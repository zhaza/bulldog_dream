import './Essay2.scss'

function Essay2() {
  return (
    <div className='container'>
        <h1>Essay 2</h1>
        <form>
          <label>
          Describe any personal or economic hardships/barriers you have had to overcome and explain how they affected your life.
          <br />
          <textarea
          rows={25}
          cols={150}
          maxLength={3000}
          required
          >
          </textarea>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Essay2
