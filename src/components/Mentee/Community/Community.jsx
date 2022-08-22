import './Community.scss'

function Community() {
  return (
    <div className='container'>
        <h1>Community Involvement/Extracurricular Activities</h1>
        <form>
          <label>
              Please list your activities with a brief description and number of years involved.
          <br />
          <textarea
          rows={25}
          cols={150}
          >
          </textarea>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Community
