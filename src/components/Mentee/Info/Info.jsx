function Info() {
  return (
    <div className='container'>
        <h1>Enter your information</h1>

        <form>
          <label>
            First Name:
          <input type="text" name="firstName" />
          </label>
          <label>
            Last Name:
          <input type="text" name="lastName" />
          </label>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Info
