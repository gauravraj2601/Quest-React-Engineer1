import './App.css';
import Done from './components/Done';
import InProgress from './components/InProgress/InProgress';
import Review from './components/Review';
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
