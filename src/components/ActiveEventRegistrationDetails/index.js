import './index.css'

const RegistrationDetails = props => {
  const {status} = props

  const registrationStatus = {
    yet_to_register: 'YET_TO_REGISTER',
    registered: 'REGISTERED',
    registrations_closed: 'REGISTRATIONS_CLOSED',
  }

  const yetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="result-image"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  const registered = () => (
    <div>
      <h1>You have already registered for the event</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="result-image"
      />
    </div>
  )
  const registrationsClosed = () => (
    <div>
      <h1>Registrations Are Closed Now!</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="result-image"
      />
      <p>Stay tuned. We will reopen</p>
    </div>
  )
  const noActiveEvent = () => (
    <p>Click on an event, to view its registration details</p>
  )
  const getRegistrationStatus = () => {
    switch (status) {
      case registrationStatus.yet_to_register:
        return yetToRegister()

      case registrationStatus.registered:
        return registered()

      case registrationStatus.registrations_closed:
        return registrationsClosed()

      default:
        return noActiveEvent()
    }
  }

  return (
    <div className="registration-details-container">
      {getRegistrationStatus()}
    </div>
  )
}

export default RegistrationDetails
