import { useState } from "react";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout/layout";
import styles from "@/styles/Home.module.css";
import { CONTAINER } from "../utils";
import QuestionCard from "@/components/QuestionCard";
import { fetchQuizQuestions } from "@/api/API";
//TYPES
import { QuestionState, Difficulty } from "@/api/API";

type AnswerObject = {
    question: string;
    answer: string;
    corret: boolean;
    correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(questions);

    const startTrivia = async () => {
        try {
            setLoading(true);
            setGameOver(false);

            const newQuestions = await fetchQuizQuestions(
                TOTAL_QUESTIONS,
                Difficulty.EASY
            );

            setQuestions(newQuestions);
            setScore(0);
            setUserAnswers([]);
            setNumber(0);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

    const nextQuestion = () => {};
    return (
        <Layout title="Trivia | Home" description="Test your trivia knowledge">
            <section className={CONTAINER}>
                <div className="text-center py-10">
                    <h1 className="text-3xl font-bold">Trivia App</h1>
                    <h2 className="text-xl text-gray-500 font-medium">
                        Built with Next.js
                    </h2>
                    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={startTrivia}>
                            Start
                        </button>
                    ) : null}
                    {!gameOver ? <p className="score">Score:</p> : null}
                    {loading && <p>Loading Questions</p>}
                    {!loading && !gameOver && (
                        <QuestionCard
                            questionNr={number + 1}
                            totalQuestions={TOTAL_QUESTIONS}
                            question={questions[number].question}
                            answers={questions[number].answers}
                            userAnswer={
                                userAnswers ? userAnswers[number] : undefined
                            }
                            callback={checkAnswer}
                        />
                    )}

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={nextQuestion}>
                        Next Question
                    </button>
                </div>
            </section>
        </Layout>
    );
}
