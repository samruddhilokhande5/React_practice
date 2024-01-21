import Todo from "./components/Todo";

function App1(){
    const todos = [
        {title: "Buy Soap", description: "Buy 2 lifeboy soap" , price:200},
        {title: "Buy Cocount Oil", description: "Buy 2 litres of cocount oil" , price:200},
        {title: "Buy Movie Ticket", description: "Buy 2 Movie Ticket", price:200}
    ];

return (
    <div>
        <h1>To Do List</h1>
        
       <Todo title={todos[0].title} description={todos[0].description} price={todos[0].price} />
       <Todo title={todos[1].title} description={todos[1].description} price={todos[1].price} />
       <Todo title={todos[2].title} description={todos[2].description} price={todos[2].price} />
    </div>
);
}
export default App1;