import { useState } from "react";
import Layout from "@/components/layout/layout";
import { CONTAINER } from "../utils";
import QuestionCard from "@/components/QuestionCard";
import { fetchQuizQuestions } from "@/api/API";
//TYPES
import { QuestionState, Difficulty } from "@/api/API";
// Components
import GameLogic from "@/components/GameLogic";

export default function Home() {
    return (
        <Layout title="Trivia | Home" description="Test your trivia knowledge">
            <GameLogic />
        </Layout>
    );
}
