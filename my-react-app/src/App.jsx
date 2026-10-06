import { useState } from 'react'
import './App.css'
function Header(){
  return (
        <h1>First React Assignment</h1>
  );
}
function ToDoTask() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  function TaskFormatter(event) {
    event.preventDefault();

    setTaskList([...taskList, task]);
    setTask("");
  }
  return (
    <div>
      <form onSubmit={TaskFormatter}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      {taskList.length===0 ? (
        <p>No tasks yet</p>
      ):(
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>)}
      <button onClick={()=> setTaskList([])}>
        Clear Tasks
      </button>
    </div>
  );
}
function ProfileCard({ name, bio, hobby }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Favorite Hobby: {hobby}</p>
    </div>
  );
}
function Footer() {
  return(
  <h3>@ 2026 Corey Nixon</h3>
  )
}
function App() {
  const [message, setMessage] = useState("Welcome to my first React assignment!");
  return (
    <div>
    <Header />
    <ProfileCard
      name='Corey' 
      bio='I am a student at Base Camp Coding Academy learning software development.'
      hobby="In my free time I like to read manhwa" />
    <input
      type='text'
      value={message}
      onChange={(e)=> setMessage(e.target.value)}
      placeholder='Type a message'
    />
    <p>{message}</p>
    <button
    onClick={() => setMessage("Thanks for visiting my First React Assignment")}>
      Change Message
    </button>
    <button onClick={()=> setMessage("")}>
      Clear Message
    </button>
    <Footer />
    <h2>List for task</h2>
    <ToDoTask />
    </div>

    )
}

export default App