import { useState } from "react";
import Layout from "@/components/layout/layout";
import { CONTAINER } from "../utils";
import QuestionCard from "@/components/QuestionCard";
import { fetchQuizQuestions } from "@/api/API";
//TYPES
import { QuestionState, Difficulty } from "@/api/API";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const GameLogic = () => {
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

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            //User answer
            const answer = e.currentTarget.value;
            // Check answer against the correct answer
            const correct = questions[number].correct_answer === answer;
            // Add point to score if answer is correct
            if (correct) setScore((prev) => prev + 1);
            // Save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        // Move on to the next Question if not the last question
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <Layout title="Trivia | Home" description="Test your trivia knowledge">
            <section className={CONTAINER}>
                <div className="text-center py-10">
                    <h1 className="text-4xl font-bold text-center mb-4">
                        TV Trivia Challenge
                    </h1>
                    <h2 className="text-xl text-gray-600 text-center mb-8">
                        Test your trivia knowledge!
                    </h2>
                    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
                            onClick={startTrivia}>
                            Start
                        </button>
                    ) : null}
                    {!gameOver ? (
                        <p className="text-xl font-semibold my-5">
                            Score: {score}
                        </p>
                    ) : null}
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
                    {!gameOver &&
                    !loading &&
                    userAnswers.length === number + 1 &&
                    number !== TOTAL_QUESTIONS - 1 ? (
                        <button
                            className="bg-[#ebfeff] border-2 border-[#0085a3] hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded m-3"
                            onClick={nextQuestion}>
                            Next Question
                        </button>
                    ) : null}
                </div>
            </section>
        </Layout>
    );
};

export default GameLogic;
