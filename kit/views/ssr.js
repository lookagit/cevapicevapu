/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

// ----------------------

const Html = ({ head, html, scripts, window, css }) => (
  <html lang="en" prefix="og: http://ogp.me/ns#">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:type"   content="website" />
      <meta property="og:url"    content="https://young-woodland-61835.herokuapp.com" />
      <meta property="og:title"  content="Drama Ćevapi" />
      <meta property="og:image"  content="https://young-woodland-61835.herokuapp.com/share.jpg" />
      <meta property="og:description"
        content="Uživajte u najkvalitetnijim ćevapima kod nas.Drama ćevapi" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {head.meta.toComponent()}
      <link rel="stylesheet" href={css} />
      {head.title.toComponent()}
    </head>
    <body>
      <div
        id="main"
        dangerouslySetInnerHTML={{ __html: html }} />
      <script
        dangerouslySetInnerHTML={{
          __html: Object.keys(window).reduce(
            (out, key) => out += `window.${key}=${JSON.stringify(window[key])};`,
          ''),
        }} />
      {scripts.map(src => <script key={src} src={src} />)}
    </body>
  </html>
);

Html.propTypes = {
  head: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
  window: PropTypes.object.isRequired,
  scripts: PropTypes.arrayOf(PropTypes.string).isRequired,
  css: PropTypes.string.isRequired,
};

export default Html;
