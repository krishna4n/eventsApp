import './index.css'

const EventItem = props => {
  const {event, imageClicked} = props
  const {imageUrl, name, location, registrationStatus} = event

  const onClickImage = () => {
    imageClicked(registrationStatus)
  }

  return (
    <li className="event-item-container">
      <button type="button" className="event-button" onClick={onClickImage}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
