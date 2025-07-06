import React from 'react'

interface ResultProps {
  feedback: string
  isCorrect: boolean
}

const Result: React.FC<ResultProps> = ({ feedback, isCorrect }) => {
  if (!feedback)