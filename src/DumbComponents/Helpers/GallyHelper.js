import React from 'react';
import items from './GallyImgs';
import {PhotoSwipeGallery} from 'react-photoswipe';
export default class GallyHelper extends React.Component {
  getThumbnailContent = (item) => {
    return (
      <img src={item.thumbnail} width={290} height={200}/>
    );
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <PhotoSwipeGallery items={items} options={{}} thumbnailContent={this.getThumbnailContent} />
      </div>
    )
  }
}