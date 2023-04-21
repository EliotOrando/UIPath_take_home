import React from 'react';

const Projects = ({nextPage, prevPage, data, setData}) => {

 
  const updateFormData = (e) => {
    const prop = e.target.name;
    setData(data => {
      data[prop] = e.target.value;
      return data;
    });
  }
  return(
    <div className = 'pageWrap'>
      <h1>Projects</h1>
      <input type='text' placeholder='Project 1' name='project_1' onChange={updateFormData}></input>
      <input type='text' placeholder='Project 2' name='project_2' onChange={updateFormData}></input>
      <nav>
        <button onClick = {() => prevPage()}>previous</button>
        <button type='submit' onClick = {nextPage}>next</button>
      </nav>
     
    </div>
  )
}

export default Projects