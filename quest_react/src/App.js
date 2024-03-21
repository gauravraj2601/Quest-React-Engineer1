import './App.css';
import Done from './components/Done/Done';
import InProgress from './components/InProgress/InProgress';
import Review from './components/Review/Review';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
        <Todo/>
        <InProgress />
        <Review />
        <Done />
    </div>
  );
}

export default App;
