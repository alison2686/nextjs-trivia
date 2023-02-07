import { useState } from 'react'
import { Inter } from '@next/font/google'
import Layout from '@/components/layout/layout'
import styles from '@/styles/Home.module.css'
import { CONTAINER } from '../utils'
import QuestionCard from '@/components/QuestionCard'
import { fetchQuizQuestions } from '@/api/API'
//TYPES
import { Difficulty } from '@/api/API'

const TOTAL_QUESTIONS = 10

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  return (
    <Layout 
      title="Trivia | Home"
      description='Test your trivia knowledge'
      >
        <section className={CONTAINER}>
          <div className="text-center py-10">
            <h1 className="text-3xl font-bold">Trivia App</h1>
            <h2 className="text-xl text-gray-500 font-medium">Built with Next.js</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={startTrivia}>Start</button>
            <p className="score">Score</p>
            <p>Loading Questions</p>
            {/* <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            /> */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextQuestion}>Next Question</button>
          </div>
        </section>
      </Layout>
  )
}
