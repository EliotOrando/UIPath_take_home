import React from 'react';
import {useState} from 'react';
import Personal from './Personal/Personal';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Review from './Review/Review';
import './styles.css'



function App () {
  //curPage is index in an array
  const [currPage, setPage] = useState(0);
  const [data, setData] = useState({});

  const nextPage = () => {
    console.log('inside nextPage');
    setPage(page => page+1);
  };

  const prevPage = () => {
    console.log('inside prevPage');
    setPage(page => page-1);
  }
  
  const pages = [
    <Personal nextPage = {nextPage} data = {data} setData={setData}/>,
    <Projects nextPage = {nextPage} prevPage = {prevPage} data = {data} setData={setData}/>,
    <Review nextPage = {nextPage} prevPage = {prevPage} data = {data}/>,
    <Resume data = {data}/>
  ]

  return(
    <main>
      <h1>Resume Generator</h1>
      {pages[currPage]}
    </main>
    
  )
    
  
}

export default App;