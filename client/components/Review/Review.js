import React from 'react';

const Review = ({nextPage, prevPage, data}) => {
  return(
    <div className = 'pageWrap'>
      <h1>Review</h1>
      <p><em>Name </em> | {data.name ? data.name : 'No Mame Entered'}</p>
      <p><em>Title</em> | {data.title ? data.title : 'No Title Entered'}</p>
      <p><em>Industry</em> | {data.industry ? data.industry : 'No Industry Entered'}</p>
      <p><em>Focus</em> | {data.focus ? data.focus : 'No Focus Provided'}</p>
      <hr/>
      <p><em>Project 1</em> | {data.project_1 ? data.project_1 : 'No Project provided'}</p>
      <p><em>Project 2</em> | {data.project_2 ? data.project_2 : 'No Project provided'}</p>
      <nav>
        <button onClick = {() => prevPage()}>Previous</button>
        <button onClick = {() => nextPage()}>Create</button>
      </nav>
     
    </div>
  )
}

export default Review