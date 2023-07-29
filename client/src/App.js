import './App.css';
import Home from './components/Home';
import GetList from './components/GetList';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseEffect from './components/UseEffect';
import ScoreTest from './components/ScoreTest';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/getlist' element={<GetList />}></Route>
          <Route path="/useeffect" element={<UseEffect />}></Route>
          <Route path='/score' element={<ScoreTest />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
