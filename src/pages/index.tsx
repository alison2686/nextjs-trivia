import { Inter } from '@next/font/google'
import Layout from '@/components/layout/layout'
import styles from '@/styles/Home.module.css'
import { CONTAINER } from '../utils'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout 
      title="Trivia | Home"
      description='Test your trivia knowledge'
      >
        <section className={CONTAINER}>
          <div className="text-center py-10">
            <h1 className="text-3xl font-bold">Trivia App</h1>
            <h2 className="text-xl text-gray-500 font-medium">Built with Next.js</h2>
          </div>
        </section>
      </Layout>
  )
}
