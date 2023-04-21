import React from 'react';

const Personal = ({nextPage, data, setData}) => {
  
  

  const updateFormData = (e) => {
    const prop = e.target.name;
    setData(data => {
      data[prop] = e.target.value;
      console.log('data inside of Personal', data);
      return data;
    });
  }

  return(
    <div className = 'pageWrap'>
      <h1>Personal Info</h1>
        <input type='text' placeholder='Name' name='name' onChange = {updateFormData}></input>
        <input type='text' placeholder='Title' name='title' onChange = {updateFormData}></input>
        <input type='text' placeholder='Industry' name='industry' onChange = {updateFormData}></input>
        <input type='text' placeholder='Focus' name='focus' onChange = {updateFormData}></input>
      <button type='submit' onClick = {nextPage}>next</button>
     
    </div>
    
  )
}

export default Personal
