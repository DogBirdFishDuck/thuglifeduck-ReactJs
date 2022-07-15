import { useState } from 'react'

import reactLogo from '../assets/react.svg'
import Heeder from './Heeeder'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Heeder />
      <section>
        <div className="container mx-auto max-w-[1280px] min-h-[500px] flex flex-col justify-center">

          <h1 className="text-3xl font-bold text-center">
            Hello world!
          </h1>
          <p className='m-10 text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum porro accusantium eaque nulla dolore quam repellat, iusto aliquam inventore facilis deserunt, sed, autem laborum cum modi facere cupiditate dolorem!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
