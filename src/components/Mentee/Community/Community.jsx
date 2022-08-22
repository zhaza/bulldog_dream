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
            placeholder='For example, we know many of our team worked jobs and/or had to take care of family members.'
            rows={25}
            cols={150}
            >
            </textarea>
            </label>
        </form>
    </div>
  )
}

export default Community
