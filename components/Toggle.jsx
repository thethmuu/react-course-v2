'use client';
import React, { useState } from 'react';

export default function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>

      {isOpen ? <p>Open</p> : null}
    </>
  );
}
