function Info() {
  return (
    <div className='container'>
        <h1>Enter your information</h1>

        <form>
          <section>
            <label>
              Years attended @ Foster:
            <input type="text" name="firstName" required/>
            </label>
            <label>
              GPA:
            <input type="text" name="lastName" required/>
            </label>
            <br />
            <label>
              Do you qualify for free/reduced lunch?
            <input type="checkbox" name="lastName" required/>
            </label>
            <br />
            <label>
              Do you qualify for FAFSA?
            <input type="checkbox" name="lastName" required/>
            </label>
          </section>

          <section>
            <h3>*Optional*</h3>
            <label>
              ACT scores:
            <input type="text" name="lastName" />
            </label>
            <label>
              SAT scores:
            <input type="text" name="lastName" />
            </label>
          </section>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Info
