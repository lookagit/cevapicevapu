import 'isomorphic-fetch';

// React UI
import React from 'react';

// React utility to transform JSX to HTML (to send back to the client)
import ReactDOMServer from 'react-dom/server';

// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled
import Koa from 'koa';

import { ApolloProvider, getDataFromTree } from 'react-apollo';

import koaSend from 'koa-send';

import nodemailer from 'nodemailer';

import xoauth2 from 'xoauth2';

import koaHelmet from 'koa-helmet';

// Koa Router, for handling URL requests
import KoaRouter from 'koa-router';

// High-precision timing, so we can debug response time to serve a request
import ms from 'microseconds';

// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL
import { StaticRouter } from 'react-router';

// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML
import Helmet from 'react-helmet';
import bodyParser from 'koa-bodyparser';
/* Local */

// Grab the shared Apollo Client
import { serverClient } from 'kit/lib/apollo';

// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser
import createNewStore from 'kit/lib/redux';

// Initial view to send back HTML render
import Html from 'kit/views/ssr';

// App entry point
import App from 'src/app';

import PATHS from 'config/paths';
var sendgrid = require("sendgrid")("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");

var helper = require('sendgrid').mail;

export function staticMiddleware() {
  return async function staticMiddlewareHandler(ctx, next) {
    try {
      if (ctx.path !== '/') {
        return await koaSend(
          ctx,
          ctx.path,
          process.env.NODE_ENV === 'production' ? {
            root: PATHS.public,
            immutable: true,
          } : {
            root: PATHS.distDev,
          },
        );
      }
    } catch (e) { /* Errors will fall through */ }
    return next();
  };
}

// Function to create a React handler, per the environment's correct
// manifest files
export function createReactHandler(css = [], scripts = [], chunkManifest = {}) {
  return async function reactHandler(ctx) {
    const routeContext = {};

    // Create a new server Apollo client for this request
    const client = serverClient();

    // Create a new Redux store for this request
    const store = createNewStore(client);

    // Generate the HTML from our React tree.  We're wrapping the result
    // in `react-router`'s <StaticRouter> which will pull out URL info and
    // store it in our empty `route` object
    const components = (
      <StaticRouter location={ctx.request.url} context={routeContext}>
        <ApolloProvider store={store} client={client}>
          <App />
        </ApolloProvider>
      </StaticRouter>
    );

    // Wait for GraphQL data to be available in our initial render,
    // before dumping HTML back to the client
    await getDataFromTree(components);

    // Full React HTML render
    const html = ReactDOMServer.renderToString(components);

    // Handle redirects
    if ([301, 302].includes(routeContext.status)) {
      // 301 = permanent redirect, 302 = temporary
      ctx.status = routeContext.status;

      // Issue the new `Location:` header
      ctx.redirect(routeContext.url);

      // Return early -- no need to set a response body
      return;
    }

    // Handle 404 Not Found
    if (routeContext.status === 404) {
      // By default, just set the status code to 404.  You can add your
      // own custom logic here, if you want to redirect to a permanent
      // 404 route or set a different response on `ctx.body`
      ctx.status = routeContext.status;
    }

    // Render the view with our injected React data.  We'll pass in the
    // Helmet component to generate the <head> tag, as well as our Redux
    // store state so that the browser can continue from the server
    ctx.body = `<!DOCTYPE html>\n${ReactDOMServer.renderToStaticMarkup(
      <Html
        html={html}
        head={Helmet.rewind()}
        window={{
          webpackManifest: chunkManifest,
          __STATE__: store.getState(),
        }}
        css={css}
        scripts={scripts} />,
    )}`;
  };
}

// Run the server
export default (async function server() {
  return {
    router: (new KoaRouter())
      .use(bodyParser())
      // Set-up a general purpose /ping route to check the server is alive
      .get('/ping', async ctx => {
        ctx.body = 'pong';
      })

      // Favicon.ico.  By default, we'll serve this as a 204 No Content.
      // If /favicon.ico is available as a static file, it'll try that first
      .get('/favicon.ico', async ctx => {
        ctx.res.statusCode = 204;
      })

      .post('/poslata', async ctx => {
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              type: 'OAuth2',
              user: 'cevapidrama@gmail.com',
              clientId: '1098430474978-lb2lmoq6gafvar6l1dvq753cmb1s0qnn.apps.googleusercontent.com',
              clientSecret: 'sKb7qT9OHrgoIGCBv5PKCoAF',
              refreshToken: '1/fGSKbDEceNB5BNCKj0hmn342TcwcUnl_HaY9JyIuGUY',
          }
      })
      
      var mailerOptions = {
          from: `'Porudzbina' <'cevapidrama@gmail.com'>`,
          to: 'cevapidrama@gmail.com',
          subject: 'Stigla je nova porudzbina',
          text: `Adresa Porudzbine ${ctx.request.body.porudzbina.adresa}
                 Broj telefona ${ctx.request.body.porudzbina.telefon}
                 ${ctx.request.body.porudzbina.stavkePorudzbines && ctx.request.body.porudzbina.stavkePorudzbines.map((item, index) => (
                  `Proizvod: ${item.proizvod.naslov}
                   Kolicina: ${item.kolicina}`
                ))}`
      }
      
      transporter.sendMail(mailerOptions, function (err, res) {
          if(err) {
              console.log("EEEEEEEEEEROR", err);
          } else {
              console.log("EMAIL JE SENT ");
          }
      })
      })

      .post('/ping', async ctx => {
        // console.log("A JA SAM NA SERVERU ", ctx.request.body);
        // let from_email = new helper.Email(ctx.request.body.test.mail);
        // let to_email = new helper.Email("luka@cybeletechnologies.com");
        // let subject = ctx.request.body.test.sub;
        // let content = new helper.Content("text/plain", "Poslao: " + ctx.request.body.test.name + "\n Poruka: " + ctx.request.body.test.mess);
        // let mail = new helper.Mail(from_email, subject, to_email, content);
        // var request = sendgrid.emptyRequest({
        //   method: 'POST',
        //   path: '/v3/mail/send',
        //   body: mail.toJSON()
        // });
        // sendgrid.API(request, function(error, response) {
        //   console.log(response.statusCode);
        //   console.log(response.body);
        //   console.log(response.headers);
        // })
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              type: 'OAuth2',
              user: 'cevapidrama@gmail.com',
              clientId: '1098430474978-lb2lmoq6gafvar6l1dvq753cmb1s0qnn.apps.googleusercontent.com',
              clientSecret: 'sKb7qT9OHrgoIGCBv5PKCoAF',
              refreshToken: '1/fGSKbDEceNB5BNCKj0hmn342TcwcUnl_HaY9JyIuGUY',
          }
      })
      
      var mailerOptions = {
          from: `${ctx.request.body.test.name} <${ctx.request.body.test.mail}>`,
          to: 'cevapidrama@gmail.com',
          subject: ctx.request.body.test.sub,
          text: `MEJL JE POSLAO ${ctx.request.body.test.mail} Tekst mejla ${ctx.request.body.test.mess}`,
      }
      
      transporter.sendMail(mailerOptions, function (err, res) {
          if(err) {
              console.log("EEEEEEEEEEROR", err);
          } else {
              console.log("EMAIL JE SENT ");
          }
      })



        ctx.body = {"bong": "koko"};
      }),
    app: new Koa()

      // Preliminary security for HTTP headers
      .use(koaHelmet())
      .use(bodyParser())
      // Error wrapper.  If an error manages to slip through the middleware
      // chain, it will be caught and logged back here
      .use(async (ctx, next) => {
        try {
          await next();
        } catch (e) {
          // TODO we've used rudimentary console logging here.  In your own
          // app, I'd recommend you implement third-party logging so you can
          // capture errors properly
          console.log('Error', e.message);
          ctx.body = 'There was an error. Please try again later.';
        }
      })

      // It's useful to see how long a request takes to respond.  Add the
      // timing to a HTTP Response header
      .use(async (ctx, next) => {
        const start = ms.now();
        await next();
        const end = ms.parse(ms.since(start));
        const total = end.microseconds + (end.milliseconds * 1e3) + (end.seconds * 1e6);
        ctx.set('Response-Time', `${total / 1e3}ms`);
      }),
  };
}());
