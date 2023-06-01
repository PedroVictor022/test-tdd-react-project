const Todos = () => {
   return (
      <div>
         <h1>My tasks</h1>
         <input 
            type="text" 
            placeholder="Insert a task name" 
            className="p-3 text-gray-300 bg-gray-900"
         />
         <button aria-label="Add task">Add task</button>
      </div>
   )
}

export default Todos