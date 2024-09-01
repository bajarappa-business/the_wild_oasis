"use client";
import React, { useState } from "react";

export default function Counter({ users }) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>The number of {users.length} user</p>
      <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>
    </>
  );
}
