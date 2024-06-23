'use client'
import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">
        Home Page
      </h1>
      <button className="p-2 rounded bg-blue-500 text-white">Click Me</button>
      <div>
        <label htmlFor="randomText">
          Enter Random Text:
        </label>
        <input className="text-black p-2 rounded ml-2" id="randomText"/>
      </div>
      <div>
        <label htmlFor="specificText">
          Enter Specific Text:
        </label>
        <input className="text-black p-2 rounded ml-2" id="specificText"/>
      </div>
      <div>
        <input className="text-black p-2 rounded ml-2" placeholder="Search..."/>
      </div>
      <div>
        <input className="text-black p-2 rounded ml-2" value="Hello World"/>
      </div>
      <div className="flex flex-col">
       <button className="p-2 mb-4 rounded bg-green-500 text-white" onClick={() => (setShowText(!showText), 100)}>
          {showText ? 'Hide Text' : 'Show Text'} 
        </button>
        <span>{showText && 'This is the text!'}</span>
      </div>
    </main>
  )
}
