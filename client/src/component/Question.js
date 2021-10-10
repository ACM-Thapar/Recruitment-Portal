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
  const handleAnswerChange = (id,res) => 
  {
    const userResponse = {
      questionId: id,
      response: res
    }
    // Check if there is a response element
    if(response.length === 0)
    {
      // Looking if the response has already been recorded
      response.forEach((res) => {
        if(res.questionId === id)
        {
          // If so, delete it
          const ind = response.findIndex(res)
          response.splice(ind,1)
        }
      })
      // Record the new userResponse
      setResponse({ ...response, userResponse})
    }
  }
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question}</FormLabel>
      <RadioGroup
        aria-label="gender"
        // defaultValue="female"
        
        name="radio-buttons-group"
        onChange={() => handleAnswerChange()}
      >
        { choices.map(choice => <FormControlLabel value={choice} control={<Radio />} label={choice} />)}
        
      </RadioGroup>
    </FormControl>
  );
  }
