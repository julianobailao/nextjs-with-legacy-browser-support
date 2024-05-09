"use client"

import { useState } from "react"

export const WithStateExample = () => {
  const [count, setCount] = useState(0)

  return <>
    <button className="bg-red-500 text-white shadow border border-red-700 rounded py-4 px-8 text-lg"
            onClick={() => setCount(count + 1)}>{count}</button>
  </>
}