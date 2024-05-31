const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }

  return (
    <div>
      <div className={`notification ${isError ? 'error' : 'success'}`}>
        {message}
      </div>
    </div>
  )
}

export default Notification