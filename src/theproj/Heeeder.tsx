

import reactLogo from '../assets/react.svg'

function Heeder() {

  return (
    <section className='border mb-8 py-1'>
      <div className="container max-w-[1280px] text-2xl mx-auto">
        <div className='flex justify-between'>
          <div className='mx-8 flex items-center'>
            <a href="/">
              <img src={reactLogo} className="logo inline-block react" alt="React logo" />
            </a>
          </div>
          <div className='mx-8 flex sm:hidden  items-center'>
            <button>
              BurgerXD
            </button>
          </div>
          <div className='mx-8 hidden sm:flex items-center'>
            <a href="/" className='mx-4'>
              Page1
            </a>
            <a href="/" className='mx-4'>
              Page2
            </a>
          </div>
          <div className='mx-8 hidden sm:flex py-2'>
            <a href="/" className=''>
              <button className='px-4 text-base py-2 bg-slate-700 text-white rounded-lg'>
                Amazing
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heeder
