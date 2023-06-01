import Todos from "./components/todo/todo"

function App() {

  return (
    <div className="bg-zinc-900 h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl text-emerald-400 absolute top-0 mt-10 font-mono">Introducao a Testes - TDD</h1>
      <Todos />
    </div>
  )
}

export default App
