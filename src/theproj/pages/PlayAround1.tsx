import Play1 from '../components/tests/Play1'

function TodoPage() {

  return (
    <div>
      <section>
        <div className="container mx-auto max-w-[1280px] min-h-[500px] flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center">
            Hello world!
          </h1>
          <Play1 />
        </div>
      </section>
    </div>
  )
}

export default TodoPage
