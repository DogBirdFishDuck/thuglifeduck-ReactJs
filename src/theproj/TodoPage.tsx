import { useState } from 'react'

import reactLogo from '../assets/react.svg'

function TodoPage() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section>
        <div className="container mx-auto max-w-[1280px] min-h-[500px] flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center">
            Hello world!
          </h1>
          <p className='m-10 text-2xl'>
            oihasohd
          </p>
        </div>
      </section>
    </div>
  )
}

export default TodoPage
