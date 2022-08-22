import './Responsibilities.scss'

function Responsibilities() {
  return (
    <div className='container'>
        <h1>Responsibilities *Optional*</h1>
        <form>
          <textarea
          placeholder='For example, we know many of our team worked jobs and/or had to take care of family members. No detail is too small!'
          rows={25}
          cols={150}
          >
          </textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Responsibilities
