import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';

export default function QuizDetail() {
  return (
    <div>
      These are the questions
      <Link to="/quizPortal">
        <Button variant="contained">Start Quiz</Button>
      </Link>
    </div>
  )
}
