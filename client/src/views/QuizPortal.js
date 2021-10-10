import React, { useState } from 'react'
import Question from '../component/Question'
import ResponseContext from '../component/ResponseContext'

import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function QuizPortal() {
  const [ response, setResponse ] = useState([])

  // Assuming we have an array of { quesId, question } from server
  const quesArr = [
    {
      id:1,
      text: "Sample Question 1",
      choices: [ "Sample Choice 1" , "Sample Choice 2" , "Sample Choice 3" , "Sample Choice 4"]
    },
    {
      id:2,
      text: "Sample Question 2",
      choices: [ "Sample Choice 1" , "Sample Choice 2" , "Sample Choice 3" , "Sample Choice 4"]
    },
    {
      id:3,
      text: "Sample Question 3",
      choices: [ "Sample Choice 1" , "Sample Choice 2" , "Sample Choice 3" , "Sample Choice 4"]
    },
  ]

  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   // textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  
    return (
    <div>
      <ResponseContext.Provider value={{ response, setResponse }}>
      
        <Box sx={{ flexGrow: 1 , mb: 3}}>
          <Grid 
          container 
          spacing={2}
          >
            { quesArr.map((ques) => {
            return (
              <Grid item xs={8} key={ques.id} sx={{ my:1}}>
                {/* <Item> */}
                  <Question quesId={ques.id} question={ques.text} choices = {ques.choices} />
                {/* </Item> */}
              </Grid>
            )
          }) }
          </Grid>
          <Button variant="contained" onClick={() => console.log(response)}>Submit</Button>
          <Button variant="outlined" onClick={() => console.log(response)}>Back</Button>
        </Box>
      </ ResponseContext.Provider>
    </div>
  )
}
