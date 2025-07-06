import React, { useState, ChangeEvent, FormEvent } from 'react'
import { MIN_NUMBER, MAX_NUMBER } from '../constants'

interface GuessInputProps {
  onGuess: (guess: number) => void
  disabled?: boolean
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled = false }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '') {
      setInputValue('')
      return
    }
    const numberValue = Number(value)
    if (!isNaN(numberValue) && numberValue >= MIN_NUMBER && numberValue <= MAX_NUMBER) {
      setInputValue(value)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const numberValue = Number(inputValue)
    if (inputValue === '' || isNaN(numberValue)) {
      return
    }
    onGuess(numberValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder={`Enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}`}
        min={MIN_NUMBER}
        max={MAX_NUMBER}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || inputValue === ''}>
        Guess
      </button>
    </form>
  )
}

export default GuessInput