import './App.css';
import UrlValidator from './components/UrlValidator/UrlValidator';
import FilterEvenOdd from './components/FilterEvenOdd/FilterEvenOdd';
import ImageLoader from './components/ImageLoader/ImageLoader';
import AreaCalculator from './components/AreaCalculator/AreaCalculator';
import Search from './components/Search/Search';
import ColorChanger from './components/ColorChanger/ColorChanger';
import Stopwatch from './components/Stopwatch/Stopwatch';
import InputContainer from './components/InputContainer/InputContainer'
import TaskList from './components/TaskList/TaskList';
import Blog from './components/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <>
      {/* <div className="App">
        <InputContainer />
        <Stopwatch />
        <Search />
        <ColorChanger />
        <AreaCalculator />
        <FilterEvenOdd />
        <ImageLoader />
        <UrlValidator />
      </div> */}

      {/* <div className="App">
        <TaskList />
        <Navigation />
      </div> */}

      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    
    </>


  );
}

export default App;
