import type { NextPage } from 'next'

import Counter from '../components/counter/Counter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Testing with React.js</h1>
      <Counter description="My Counter" defaultCount={0} />
    </div>
  )
}

export default Home
