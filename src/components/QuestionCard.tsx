import React from "react";
import styled from "styled-components";
//Types
import { AnswerObject } from "../components/GameLogic";

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

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
    return (
        <div className="bg-[#ebfeff] border-2 border-[#0085a3] rounded-md p-5 shadow-lg h-fit">
            <p className="text-xl">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p
                className="text-xl my-2"
                dangerouslySetInnerHTML={{ __html: question }}></p>
            <div className="my-5">
                {answers.map((answer) => (
                    <ButtonWrapper
                        className="my-2"
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={callback}>
                            <span
                                dangerouslySetInnerHTML={{ __html: answer }}
                            />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </div>
    );
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        background: ${({ correct, userClicked }) =>
            correct
                ? "#28df4d"
                : !correct && userClicked
                ? "#ff5656"
                : "#2196f3"};
    }
`;

export default QuestionCard;
