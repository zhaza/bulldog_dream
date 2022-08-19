function Login() {
  return (
    <div className='container'>
        <button>Gmail</button>
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

export default Login
