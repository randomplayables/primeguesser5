export interface GameSession {
  sessionId: string
}

export type Feedback = 'Too low' | 'Too high' | 'Correct'

export interface GuessRecord {
  guess: number
  isCorrect: boolean
  feedback: Feedback
}

export type RoundData = GuessRecord

export interface GameStats {
  guesses: GuessRecord[]
  attemptsLeft: number
  isGameOver: boolean
}