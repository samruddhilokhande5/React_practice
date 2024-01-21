
function App() {
  const todos = ["Buy Soap", "Buy Coconut oil", "Buy Movie Ticket"]
  return (
    <div>
       <h1>To Do List</h1>
      <p>{todos[0]}</p>
      <p>{todos[1]}</p>
      <p>{todos[2]}</p>
    </div>
  );
}

export default App;
