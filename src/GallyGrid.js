import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Gallery from './GallyLib';
import scss from './styles.scss';

function makeUnsplashSrc (id) {
	return `/galerija/IMAG4935.jpg`;
}

function makeUnsplashSrcSet (id, size) {
	return `/galerija/IMAG4935.jpg`;
}

function makeUnsplashThumbnail (id, orientation = 'landscape') {
	const dimensions = orientation === 'square'
		? 'w=300&h=300'
		: 'w=240&h=159';

	return `/galerija/IMAG4935.jpg`;
}

// Unsplash images from the "Spirit Animals" collection
// https://unsplash.com/collections/158825/spirit-animals

const DEFAULT_IMAGES = [
	{ image: '/galerija/IMAG4935.jpg', caption: 'Drama ćevapi', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
	{ image: '/galerija/IMAG4937.jpg', caption: 'Drama ćevapi', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ image: '/galerija/IMAG4940.jpg', caption: 'Drama ćevapi', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ image: '/galerija/IMAG4941.jpg', caption: 'Drama ćevapi', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ image: '/galerija/IMAG4944.jpg', caption: 'Drama ćevapi', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
	{ image: '/galerija/IMAG5142-3.jpg', caption: 'Drama ćevapi', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
	{ image: '/galerija/IMAG5148.jpg', caption: 'Drama ćevapi', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

export default class GallyGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen:true,
    }
  }
  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false
    })
  }
  render() {
    return(
      <div>
       <Grid>
			 	<div className={scss.gallyNaslov}>
				</div>
         <Row>
         <Col xs={12}>
      <Gallery images={DEFAULT_IMAGES.map(({ caption, image, orientation, useForDemo }) => ({
			src: image,
			thumbnail: image,
			srcset: [
				image,
			],
			caption,
			orientation,
			useForDemo,
		}))} />
    </Col>
      </Row>
    </Grid>
      </div>
    );
  }
}
