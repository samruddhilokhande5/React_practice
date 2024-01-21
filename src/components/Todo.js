function Todo(props){
    return (
    <p>
        <b>{props.title}</b> - <span>{props.description}</span> -
        <span>{props.price}</span>
    </p>
);
}

export default Todo;