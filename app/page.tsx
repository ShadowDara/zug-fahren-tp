'use client';

import React, { useState } from 'react';
import Startpage from "./components/startpage"

export default function Home() {
  let content;
  let [showContent, setShowContent] = useState(0);

  const show_page = () => {
    setShowContent(showContent + 1);
  };

  if (showContent === 0) {
    content = (
      <button onClick={show_page}>
        <h1>Zug fahren!</h1>
      </button>
    );
  }
  else if (showContent === 1) {
    content = (
      <button onClick={show_page}>
         <p>Not everyone is made for this</p>
      </button>);
  }
  else if (showContent === 2) {
    content = (
      <button onClick={show_page}>
        <h1>Los geht's! 🚆</h1>
      </button>);
  }
  else if (showContent === 3) {
    content = (
      <button onClick={show_page}>
        <Startpage />
      </button>);
  }
  else {
    content = (
      <h1>404</h1>
    );
  }

  return (
    <div>
      <main className="grid place-items-center h-screen font-[family-name:var(--font-geist-sans)]">
        {content}
      </main>
    </div>
  );

}
