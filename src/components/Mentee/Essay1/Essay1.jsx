import './Essay1.scss'

function Essay1() {
  return (
    <div className='container'>
        <h1>Essay 1</h1>
        <form>
          <label>
          What does being a “Bulldog” mean to you? What have you learned from attending Foster that you can take with you going forward? *3000 character limit
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

export default Essay1
