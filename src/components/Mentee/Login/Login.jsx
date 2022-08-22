import './Login.scss'

function Login() {
  return (
    <div className='container login'>
        <section className="left">
          <h1>Sign-up/Login with Gmail</h1>
          <button>Gmail</button>
          <h3>OR</h3>
          <button>Returning Applicant Login</button>
        </section>
        
        <section className="right">
          <h1>Sign-up manually</h1>
          <form>
            <div>
              <label>
                First Name:
              <input type="text" name="firstName" />
              </label>
              <label>
                Last Name:
              <input type="text" name="lastName" />
              </label>
            </div>
            <br />
            <div>
              <label>
                Email:
              <input type="email" name="email" />
              </label>
              <label>
                password:
              <input type="password" name="password" />
              </label>
            </div>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </section>
    </div>
  )
}

export default Login
