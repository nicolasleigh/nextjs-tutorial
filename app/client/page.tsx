"use client";

import { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);
  // console.log(count);
  return (
    <div>
      <h1 className='text-7xl'>{count}</h1>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
        increase
      </button>
    </div>
  );
}
