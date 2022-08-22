import './Responsibilities.scss'

function Responsibilities() {
  return (
    <div className='container'>
        <h1>Responsibilities *Optional*</h1>
        <form className='responsibilities' id='resp-form'>
          <textarea className='left'
          placeholder='For example, we know many of our team worked jobs and/or had to take care of family members. No detail is too small!'
          rows={20}
          >
          </textarea>
          <label className='NA'>
              No responsibilities? That's fine! Check here.
              <br />
          <input type="checkbox" name="lastName" required/>
          </label>
          <br />
        </form>
        <button type="submit" form='resp-form'>Submit</button>
    </div>
  )
}

export default Responsibilities
