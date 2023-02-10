import React from "react";
//Types
import { AnswerObject } from "@/pages";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
};

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

const TwButton: React.FC<ButtonWrapperProps> = () => <div>Question</div>;

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
    return (
        <div className="bg-[#ebfeff] border-2 border-[#0085a3] rounded-md p-5 shadow-lg">
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p>{question}</p>
            <div>
                {answers.map((answer) => (
                    <div
                        className="my-2"
                        key={answer}
                        // correct={userAnswer?.correctAnswer === answer}
                        // userClicked={userAnswer?.answer === answer}
                    >
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={callback}>
                            <span
                                dangerouslySetInnerHTML={{ __html: answer }}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
