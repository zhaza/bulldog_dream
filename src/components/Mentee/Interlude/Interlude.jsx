// import './Interlude.scss'

function Interlude() {
  return (
    <div className="container">
        <h1>You made it to the essay section!</h1>
        <h2>There are a total of 3 essay questions. Each have a max character limit of 3000, which is about 1 page.</h2>
        <h3>The questions are: </h3>
        <table>
            <thead>
                <td>Essay #</td>
                <td>Question</td>
                <td>Saved (Yes/No)</td>
            </thead>
            <br />
            <tbody>
                <tr>
                    <td>Essay 1</td>
                    <td>What does being a “Bulldog” mean to you? What have you learned from attending Foster that you can take with you going forward?</td>
                    <td>Not Yet</td>
                </tr>
                <tr>
                    <td>Essay 2</td>
                    <td>Describe any personal or economic hardships/barriers you have had to overcome and explain how they affected your life.</td>
                    <td>Not Yet</td>
                </tr>
                <tr>
                    <td>Essay 3</td>
                    <td>What are your dreams of the future? When you look back on your life in thirty years, what would it take for you to consider your life successful?</td>
                    <td>Not Yet</td>
                </tr>
            </tbody>
        </table>
        <h3>All of your entered information is saved. Continue on to submit your essay OR exit to finish later.</h3>
        <button>Continue</button>
        <button>Exit & finish later</button>
    </div>
  )
}

export default Interlude
