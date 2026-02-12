import React, { useState } from "react"; //brings all the necessary react tools

export default function TodoApp() { // defines a functional component named TodoApp
    const [todos, setTodos] = useState([]); // initializes a state variable 'todos' as an empty array and provides a function 'setTodos' to update it
    const [inputValue, setInputValue] = useState(""); // initializes a state variable 'inputValue' as an empty string and provides a function 'setInputValue' to update it

    function addTodo() { // defines a function 'addTodo' to add a new todo item
        if (inputValue.trim() !== "") { // checks if the input value is not just whitespace
            setTodos([...todos, { // updates the 'todos' state by adding a new todo item to the existing list
                id: Date.now(), // generates a unique id for the new todo item using the current timestamp
                text: inputValue, // sets the text of the new todo item to the current input value
                completed: false // initializes the 'completed' status of the new todo item to false
            }]);
            setInputValue(""); // clears the input field by resetting 'inputValue' to an empty string
        }
    }

    function toggleTodo(id) { // defines a function 'toggleTodo' to toggle the completion status of a todo item
        setTodos(todos.map(todo =>  // updates the 'todos' state by mapping through the existing list and toggling the 'completed' status of the todo item with the matching id
            todo.id === id ? { ...todo, completed: !todo.completed } : todo // if the current todo item's id matches the provided id, it creates a new object with the same properties but toggles the 'completed' status; otherwise, it returns the original todo item unchanged
        ));
    }

    function deleteTodo(id) { // defines a function 'deleteTodo' to remove a todo item from the list
        setTodos(todos.filter(todo => todo.id !== id));// updates the 'todos' state by filtering out the todo item with the matching id, effectively removing it from the list
    }

    function clearAll() { // defines a function 'clearAll' to clear all todo items from the list
        setTodos([]); // updates the 'todos' state by setting it to an empty array, effectively clearing all todo items
    }

    return ( // returns the JSX to render the TodoApp component 
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4"> // sets up the main container with a gradient background and padding
            <div className="max-w-2xl mx-auto"> // centers the content and limits its maximum width
                {/* Header */} // adds a header section with a title and a decorative line
                <div className="text-center mb-12"> // centers the header content and adds margin at the bottom
                    <h1 className="text-5xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4">  // sets the title with a gradient text effect and styling
                        📝 Todo App 
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div> // adds a decorative line below the title with a gradient background and rounded edges
                </div>

                {/* Input Section */}
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-gray-700/50"> // sets up the input section with a semi-transparent background, blur effect, padding, margin, and border
                    <div className="flex gap-4"> // creates a flex container with a gap between the input field and the button
                        <input
                            type="text" // defines an input field for entering new todo items
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                            placeholder="What needs to be done today?"
                            className="flex-1 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 
                                       px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 
                                       focus:border-transparent transition-all duration-300 text-lg"
                        />
                        <button
                            onClick={addTodo}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                                       font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 
                                       active:scale-95 transition-all duration-300 whitespace-nowrap"
                        >
                            Add Task
                        </button>
                    </div>
                </div>

                {/* Todos List */}
                <div className="space-y-4">
                    {todos.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gray-700/50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <span className="text-3xl">📭</span>
                            </div>
                            <p className="text-gray-400 text-xl font-medium">No tasks yet. Add one to get started!</p>
                        </div>
                    ) : (
                        todos.map(todo => (
                            <div key={todo.id} className="group bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
                                <div className="flex items-center gap-4">
                                    {/* Checkbox */}
                                    <button
                                        onClick={() => toggleTodo(todo.id)}
                                        className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all duration-300 font-bold text-sm ${
                                            todo.completed
                                                ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-500 shadow-lg shadow-green-500/25 scale-110'
                                                : 'border-gray-600 hover:border-blue-400 hover:bg-blue-500/20'
                                        }`}
                                    >
                                        {todo.completed ? '✓' : ''}
                                    </button>

                                    {/* Todo Text */}
                                    <div className="flex-1">
                                        <p className={`text-lg font-medium transition-all duration-300 ${
                                            todo.completed 
                                                ? 'line-through text-gray-500' 
                                                : 'text-white hover:text-blue-300'
                                        }`}>
                                            {todo.text}
                                        </p>
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="px-4 py-2 bg-red-500/20 text-red-300 hover:bg-red-500/40 
                                                   rounded-lg font-medium hover:scale-105 transition-all duration-300 
                                                   opacity-0 group-hover:opacity-100"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Stats & Clear Button */}
                {todos.length > 0 && (
                    <div className="mt-12 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                        <div className="flex justify-between items-center text-gray-300 mb-4">
                            <span className="text-lg font-semibold">
                                {todos.length} task{todos.length !== 1 ? 's' : ''}
                            </span>
                            <span>
                                {todos.filter(t => !t.completed).length} remaining
                            </span>
                        </div>
                        <button
                            onClick={clearAll}
                            className="w-full py-4 px-6 bg-gradient-to-r from-gray-600 to-gray-700 text-white 
                                       font-semibold rounded-xl hover:from-gray-500 hover:to-gray-600 
                                       hover:shadow-lg transition-all duration-300 active:scale-95"
                        >
                            🧹 Clear All Tasks
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
