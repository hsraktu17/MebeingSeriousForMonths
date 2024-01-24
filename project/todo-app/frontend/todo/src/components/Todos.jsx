function Todos (props) {

    const { title, description, isCompletes } = props

    return (
        <div>
            <h1> {title} </h1>
            <h2> {description} </h2>
            <button> {isCompletes ? "Mark as Completed" : "Mark as incompleted"} </button>
        </div>
    )
}

export default Todos;