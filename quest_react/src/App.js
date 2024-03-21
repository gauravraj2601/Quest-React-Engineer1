import { useState } from 'react';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd'; // Import DragDropContext

import Done from './components/Done/Done';
import InProgress from './components/InProgress/InProgress';
import Review from './components/Review/Review';
import Todo from './components/Todo/Todo';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id:"1",
      projectName:"Project A",
      barColor:"#7bc86c",
      messageCount:""
    },
    {
      id:"2",
      projectName:"Project B",
      barColor:"#e6c60d",
      messageCount:"2"
    },
    {
      id:"3",
      projectName:"Project C",
      barColor:"#cd8de5",
      messageCount:"1"
    },
    {
      id:"4",
      projectName:"Project M",
      barColor:"#ffaf3f",
      messageCount:""
    },
    {
      id:"5",
      projectName:"Project K",
      barColor:"#29cce5",
      messageCount:"2"
    },
  ])
  const [inprogress, Setinprogress] = useState([
    {
      id:"1",
      projectName:"Project G",
      barColor:"#ff8ed4",
      messageCount:"2"
    },
    {
      id:"2",
      projectName:"Project P",
      barColor:"#f18677",
      messageCount:""
    },
    {
      id:"3",
      projectName:"Project F",
      barColor:"#6deca9",
      messageCount:""
    },
    {
      id:"4",
      projectName:"Project Z",
      barColor:"#c0c6d0",
      messageCount:""
    },
  ])

  const onDragEnd = (result) => {
    // Your onDragEnd logic here
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
        <Todo todoList={todoList} setTodoList={setTodoList} />
        <InProgress inprogress={inprogress} Setinprogress={Setinprogress} />
        
        <Review />
        <Done />
    </div>
    </DragDropContext>
  );
}

export default App;
