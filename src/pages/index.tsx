import Layout from "@/components/layout/layout";
// Components
import GameLogic from "@/components/GameLogic";

export default function Home() {
    return (
        <Layout title="Trivia | Home" description="Test your trivia knowledge">
            <GameLogic />
        </Layout>
    );
}
