function Docs() {
  return (
    <div className='container'>
        <form>
          <h1>Upload School Transcript</h1>

          <label>
            Upload:
          <input type="file" name="transcript" required/>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Docs
