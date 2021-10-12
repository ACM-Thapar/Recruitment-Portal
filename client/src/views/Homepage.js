import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';

export default function Homepage() {
  return (
    <div>
      Welcome to the ACM Recruitments Portal
      <Link to="/quizDetails">
        <Button variant="contained">Take Me to Quiz</Button>
      </Link>
    </div>
  )
}
