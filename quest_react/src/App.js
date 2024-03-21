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
      id:"11",
      projectName:"Project G",
      barColor:"#ff8ed4",
      messageCount:"2"
    },
    {
      id:"12",
      projectName:"Project P",
      barColor:"#f18677",
      messageCount:""
    },
    {
      id:"13",
      projectName:"Project F",
      barColor:"#6deca9",
      messageCount:""
    },
    {
      id:"14",
      projectName:"Project Z",
      barColor:"#c0c6d0",
      messageCount:""
    },
  ])

  const [doneList, setDoneList] = useState([
    {
      id:"21",
      projectName:"Project D",
      barColor:"#29cce5",
      messageCount:"9"
    },
    {
      id:"22",
      projectName:"Project N",
      barColor:"#cd8de5",
      messageCount:"4"
    },
    {
      id:"23",
      projectName:"Project X",
      barColor:"#e6c60d",
      messageCount:"24"
    },
    {
      id:"24",
      projectName:"Project R",
      barColor:"#c0c6d0",
      messageCount:"2"
    }
  ])
  const [reviewList, setReviewList] = useState([
    {
      id:"31",
      projectName:"Project W",
      barColor:"#5ba4cf",
      messageCount:"14"
    },
    {
      id:"32",
      projectName:"Project T",
      barColor:"#c0c6d0",
      messageCount:"10"
    },
    {
      id:"33",
      projectName:"Project U",
      barColor:"#7bc86c",
      messageCount:"6"
    },
    {
      id:"34",
      projectName:"Project Q",
      barColor:"#cd8de5",
      messageCount:""
    },
    {
      id:"35",
      projectName:"Project V",
      barColor:"#e6c60d",
      messageCount:"2"
    },
  ])
  const onDragEnd = (result) => {
    
    const {source, destination}= result;
    if(!destination){
      return
    }

    if(
      destination.droppableId === source.droppableId && destination.index === source.index
    ){
      return
    }
    let add;
    let sourceData;
    let setData;

    switch (source.droppableId) {
      case "todo-list": 
        sourceData = todoList;
        setData = setTodoList;
        break;
      case "progress-list":  
        sourceData = inprogress;
        setData = Setinprogress;
        break;
      case "review-list":
        sourceData = reviewList;
        setData = setReviewList;
        break;
      case "done-list":
        sourceData = doneList;
        setData = setDoneList;
        break;
      default:
        break;
    }

    add= sourceData[source.index];
    sourceData.splice(source.index, 1);

    switch (destination.droppableId) {
      case "todo-list":
        todoList.splice(destination.index, 0, add);
        break;
      case "progress-list":
        inprogress.splice(destination.index, 0, add);
        break;
      case "review-list":
        reviewList.splice(destination.index, 0, add);
        break;
      case "done-list":
        doneList.splice(destination.index, 0, add);
        break;
      default:
        break;
    }
    setData([...sourceData]);

  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
        <Todo todoList={todoList} setTodoList={setTodoList} />
        <InProgress inprogress={inprogress} Setinprogress={Setinprogress} />
        
        <Review reviewList={reviewList} setReviewList={setReviewList} />
        <Done doneList={doneList} setDoneList={setDoneList} />
    </div>
    </DragDropContext>
  );
}

export default App;
