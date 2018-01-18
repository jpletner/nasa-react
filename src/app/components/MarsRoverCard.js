import React from 'react';

const MarsRoverCard = (props) => {
  let images = [];
  const date = null;
  const photos = props.data.photos;
  const label = "Earth Date: "
  if (typeof photos !== 'undefined') {
    images = photos.map((image) => {
      const img_src = image.img_src;
      const date = image.earth_date;

        return (
            <li key= {image.id}>
              <h6>{label}{date}</h6>
              <a href={img_src} className="astronomy-image-wrapper">
                <img src={img_src}/>
              </a>
            </li>
        );
    });
  }

  return (
    <div className="astronomy-card">
      <h6 className="astronomy-title">"Mars Rover Photos of the Day"</h6>
      <div>
        <ol className="astronomy-image-wrapper">{images}</ol>
      </div>
    </div>
  )
}

export default MarsRoverCard;
