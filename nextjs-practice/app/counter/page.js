'use client'

import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount] = useState(10)
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Reduce</button>
    </div>
  );
}

export default Counter