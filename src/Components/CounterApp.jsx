import React,{useState} from "react";


export default function CounterApp() {
    let [count, setCount] = useState(0);

function Increment() {
    setCount(count++);
}

function Decrement(){
    setCount(count--);
}
    return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 via-pink-500 to-red-500">
      
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center w-96 transition-all duration-500 hover:scale-105">
        
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">
          🚀 Counter App
        </h1>

        <p className="text-6xl font-extrabold text-white mb-8 transition-all duration-300">
          {count}
        </p>

        <div className="flex justify-center gap-6">
          
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-green-400 text-white font-semibold rounded-xl shadow-lg 
                       hover:bg-green-500 hover:scale-110 active:scale-95 
                       transition-all duration-300"
          >
            ➕ Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-6 py-3 bg-red-400 text-white font-semibold rounded-xl shadow-lg 
                       hover:bg-red-500 hover:scale-110 active:scale-95 
                       transition-all duration-300"
          >
            ➖ Decrement
          </button>

        </div>
      </div>
    </div>
  );
}