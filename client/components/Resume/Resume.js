import React from 'react';
import {useState, useEffect} from 'react';
import { CircularProgress } from '@mui/material';
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.open_AI_key,
});

const openai = new OpenAIApi(configuration);

const Resume = ({prevPage, data}) => {
  const [loaded, setLoaded] = useState(false);
  const [responses, setResponses] = useState('');
  const chatGPTQuestion = `Can you generate a resume based off the following information? Please just return the resume and no extranious details. Info: Name: ${data.name}, Title: ${data.title}, Industry: ${data.industry}, Focus: ${data.focus}, Project 1: ${data.project_1}, Project 2: ${data.project_2}`
  const generateResume = async () => {
    console.log('generating response (inside of generateReusme');
    const chatGPT = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content : `you will be helping by summarizing my work experiences into brief sentences for my resume in the ${data.industry} industry with a focus on ${data.focus}`},
        {role: "user", content: `Please summarize my experience working on these projetcs: ${data.project_1}, ${data.project_2}. Please responsd with 1 sentence each, seperated by a period.`},
      ],
    });
    const arrOfResponses = chatGPT.data.choices[0].message.content.split('.');
    setResponses(arrOfResponses);
    setLoaded(true);
  };

  //run this hook on load
  useEffect(() => {
    generateResume();
  }, []);
  if(loaded){
    const projectsSummarized = responses.map((response, i) => <p key={`response ${i+1} from chatGPT`}>-{response}</p>);
    return(
      <div id = 'resumeDisplay'>
        <p>{data.name}</p>
        <p>{data.title}</p>
        <p>Project Accomplishments</p>
        {projectsSummarized}
      </div>
    )
  } else {
    return(
      <>
        <h1>generating resume...</h1>
       <CircularProgress />
      </>
       
    )
  }
  
}

export default Resume