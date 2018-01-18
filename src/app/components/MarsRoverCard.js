import _ from 'lodash';
import React from 'react';

const MarsRoverCard = (props) => {
  let images = [];
  const photos = props.data.photos;
  const unique_photos = _.uniqBy(photos, 'img_src');
  const label = "Earth Date: ";

  if (typeof unique_photos !== 'undefined') {
    images = unique_photos.map((image) => {
      const img_src = image.img_src;


        return (
            <li key= {image.id}>
              <a href={img_src} className="astronomy-image-wrapper">
                <img src={img_src}/>
              </a>
            </li>
        );
    });
  }

  return (
    <div className="astronomy-card">
      <h6 className="rover-title">Mars Rover Photos</h6>
      <h8 className="photo-title">Earth Date: May 30, 2015</h8>
      <div>
        <ol>{images}</ol>
      </div>
    </div>
  )
}

export default MarsRoverCard;
