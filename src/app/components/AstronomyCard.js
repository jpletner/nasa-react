import React from 'react';

const AstronomyCard = (props) => {
  const { title,
          url,
          hdurl,
          explanation,
          date,
          service_version,
          media_type
        } = props.data;

  function renderContent() {
      switch(media_type) {
        case('video'):
          return (
            <iframe
              allowFullScreen
              frameBorder="0"
              height="520"
              width="720"
              src={url}>
            </iframe>
          )
        case('image'):
          return (
            <a href={hdurl} className="astronomy-image-wrapper">
              <img src={url} alt={title}/>
            </a>
          )

        default:
          return null
      }
  }

  return (
    <div className="astronomy-card">
      <h6 className="astronomy-title">Nasa Photo of the Day</h6>
      <h8 className="photo-title">{title}</h8>

      {renderContent()}

      <p>{explanation}</p>

      <span>{date}, {service_version}</span>
    </div>
  )
}

export default AstronomyCard;
