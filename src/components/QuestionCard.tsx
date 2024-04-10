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

type DecodeHtmlEntities = (html: string) => string;

const decodeHtmlEntities: DecodeHtmlEntities = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
    const decodedQuestion = decodeHtmlEntities(question)

    return (
        <div className="bg-[#ebfeff] border-2 border-[#0085a3] rounded-md p-5 shadow-lg h-fit">
            <p className="text-xl text-black">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p className="text-xl text-black my-2">{decodedQuestion}</p>
            <div className="my-5">
                {answers.map((answer) => {
                    const decodedAnswer = decodeHtmlEntities(answer)
                    return (
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
                            {decodedAnswer}
                        </button>
                    </ButtonWrapper>
                )
                })}
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
                ? "#17B169"
                : !correct && userClicked
                ? "#ff5656"
                : "#102F70"};
    }
`;

export default QuestionCard;
