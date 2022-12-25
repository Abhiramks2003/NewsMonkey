
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const[progress,setProgress] = useState(0);
  const changeProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/"
            element={<News changeProgress={changeProgress} key="general" pageSize={9} country="in" category="general" />} />
          <Route path="/business"
            element={<News changeProgress={changeProgress} key="business" pageSize={9} country="in" category="business" />} />
          <Route path="/entertainment"
            element={<News changeProgress={changeProgress} key="entertainment" pageSize={9} country="in" category="entertainment" />} />
          <Route path="/health"
            element={<News changeProgress={changeProgress} key="health" pageSize={9} country="in" category="health" />} />
          <Route path="/science"
            element={<News changeProgress={changeProgress} key="science" pageSize={9} country="in" category="science" />} />
          <Route path="/sports"
            element={<News changeProgress={changeProgress} key="sports" pageSize={9} country="in" category="sports" />} />
          <Route path="/technology"
            element={<News changeProgress={changeProgress} key="technology" pageSize={9} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

