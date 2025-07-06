import { MIN_NUMBER, MAX_NUMBER } from '../constants'

export function isPrime(n: number): boolean {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  const sqrt = Math.sqrt(n)
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false
  }
  return true
}

export function getPrimesInRange(min: number = MIN_NUMBER, max: number = MAX_NUMBER): number[] {
  const primes: number[] = []
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }
  return primes
}

export function generateRandomPrime(min: number = MIN_NUMBER, max: number = MAX_NUMBER): number {
  const primes = getPrimesInRange(min, max)
  if (primes.length === 0) {
    throw new Error(`No prime numbers found in range ${min} to ${max}`)
  }
  const randomIndex = Math.floor(Math.random() * primes.length)
  return primes[randomIndex]
}