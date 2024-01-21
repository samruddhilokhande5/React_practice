import Todo from "./components/Todo";
import { useState } from "react";
function App2(){
    const [todos, setTodos] = useState ([ {title: "Buy Soap" , description: "Buy 2 lifeboy soap" , price: 200},
    {title: "Buy Cocount Oil", description: "Buy 2 ltrs cocount oil" , price: 200} , 
    {title: "Buy Movie Ticket" , description: "Buy 2 movie tickets" , price: 200}
    
]);
const [title, setTitle] = useState("");
return (
    <div>
        <h1>To Do List</h1>
        <input type="text" name="item"onChange={(event) => {
            console.log(event.target.value);
            setTitle(event.target.value);
        }} />
        <button>Read Title</button>
        <button onClick={() =>{
            console.log("title = " , title)
        }}>Click me</button>
        {todos.map((item,index) => {
            return (
                <Todo 
               key={index} 
                title={item.title}
                description={item.description}
                price={item.price}
                />
            );
        })}
    </div>
);
}
export default App2;