import './Essay3.scss'

function Essay3() {
  return (
    <div className='container'>
        <h1>Essay 3</h1>
        <form>
          <label>
          What are your dreams of the future? When you look back on your life in thirty years, what would it take for you to consider your life successful?
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

export default Essay3
