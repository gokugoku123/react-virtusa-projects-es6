import './App.css';
import UrlValidator from './components/UrlValidator/UrlValidator';
import FilterEvenOdd from './components/FilterEvenOdd/FilterEvenOdd';
import ImageLoader from './components/ImageLoader/ImageLoader';
import AreaCalculator from './components/AreaCalculator/AreaCalculator';
import Search from './components/Search/Search';
import ColorChanger from './components/ColorChanger/ColorChanger';
import Stopwatch from './components/Stopwatch/Stopwatch';
import InputContainer from './components/InputContainer/InputContainer'
import Route from './components/Navigation/Route/Route';
import Header from './components/Navigation/Header/Header';
import Component1 from './components/Navigation/Component1/Component1'
import Component2 from './components/Navigation/Component2/Component2'
import TaskList from './components/TaskList/TaskList';
function App() {
  return (
    <>
      <div className="App">
        {/* <InputContainer />
        <Stopwatch />
        <Search />
        <ColorChanger />
        <AreaCalculator />
        <FilterEvenOdd />
        <ImageLoader />
        <UrlValidator /> */}
      </div>

      <div className="App">
        <TaskList />
      </div>
      
      {/* Navigation Component  */}
      <div className="App">
          <Header />
          <h1 className="nav-style">App Component Works</h1>
          <Route path="/component1">
            <Component1 />
          </Route>
          <Route path="/component2">
            <Component2 />
          </Route>
      </div>
    </>


  );
}

export default App;
