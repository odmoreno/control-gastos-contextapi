import { useContext } from "react"
import BudgetForm from "./components/BudgetForm"
import { BudgetContext } from "./context/BudgetContext"

function App() {

  const context = useContext(BudgetContext)
  console.log(context)

  return (
    <>
      <header className=" bg-blue-600 py-8 max-h-72">
        <h1 className=" uppercase text-white font-black text-4xl text-center">Planificador de gasto</h1>
      </header>

      <div className=" max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">

        <BudgetForm>

        </BudgetForm>
      </div>
    </>
  )
}

export default App
