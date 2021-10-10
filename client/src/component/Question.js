import React, { useContext } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ResponseContext from './ResponseContext';


export default function Question({quesId, question, choices}) 
{
  const { response, setResponse } = useContext(ResponseContext)
  // console.log(response)
  const newResponse = response;
  const handleAnswerChange = (quesId,res) => 
  {
    const userResponse = {
      questionId: quesId,
      response: res
    }
    console.log(userResponse)
      // Check if there is a response element
    if(newResponse.length !== 0)
    {
      const index = newResponse.findIndex( res => (res.questionId === quesId))
      if(index !== -1)
        newResponse.splice(index,1)
      newResponse.push(userResponse)
    }
    else
    {
      newResponse.push(userResponse)
    }
    console.log(newResponse)
    setResponse(newResponse)
  }
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question}</FormLabel>
      <RadioGroup
        aria-label="question"
        name="radio-buttons-group"
        onChange={(e) => handleAnswerChange(quesId, e.target.value)}
      >
        { choices.map((choice,index) => <FormControlLabel key={index} value={choice} control={<Radio />} label={choice} />)}
        
      </RadioGroup>
    </FormControl>
  );
  }
