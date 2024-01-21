import { useState } from "react";
import Todo from "./components/Todo";

function App3(){
    const [todos, setTodos] = useState([
        { title: "Buy Soap", description: "Buy 2 lifeboy soap", price: 200 },
        { title: "Buy Cocount Oil", description: "Buy 2 ltrs cocount oil", price: 200 },
        { title: "Buy Movie Ticket", description: "Buy 2 movie tickets", price: 200 }

    ]);
    const [title, setTitle] = useState("");

    const updateTitle = (event) => {

        console.log(event.target.value);

        setTitle(event.target.value);
    };

    const updateTodoList = () => {
        setTodos((prevState) => {
            return [
                ...prevState, { title: "hello", description: "", price: "600" }
            ];
        });
    };


    const renderTodo = () => {
        return todos.map((item, index) => {
            return (
                <Todo
                    key={item}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            );

        });
    };


    return (
        <div>
            <h1>To Do List</h1>
            <input type="text" name="item" onChange={updateTitle} />
            <button onClick={updateTodoList}>Click Me</button>
            <button>Read Title</button>
            {todos.map((item, index) => {
                return (
                    <Todo
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                );
            })};
        </div>
    );
}

export default App3;