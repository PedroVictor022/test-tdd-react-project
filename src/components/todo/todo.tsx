import { useState } from "react"
import { useForm } from "react-hook-form"

interface Todo {
   id: string
   title: string
   isCompleted: boolean  
}

const Todos = () => {
   const { register, handleSubmit, formState: { errors } } = useForm<{ title: string }>()
   const [ todos, setTodos ] = useState<Todo[]>([])

   const handleAddClick = (data: { title: string }) => {
      setTodos((prev) => [...prev, {
         id: Math.floor(Math.random() * 10),
         title: data.title, 
         isCompleted: false
      }])
   }

   return (
      <div>
         <h1>My tasks</h1>
         <input 
            type="text" 
            placeholder="Insert a task name" 
            className="p-3 text-gray-300 bg-gray-900"
            onClick={() => handleSubmit(handleAddClick)()}
            {...register('title', { required: true })}
         />
         <button aria-label="Add task">Add task</button>
      </div>
   )
}

export default Todos