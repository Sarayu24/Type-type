import React from "react";
import TypeGame from "./typeGame";
import "./styles.css";
import Footer from "./footer";

export default function App() {
  const [
    time,
    isTimeRunning,
    handleChange,
    startGame,
    inputRef,
    text,
    wordCount
  ] = TypeGame();
  return (
    <><div>
      <h1>Speed Typing Game</h1>
      <textarea
        ref={inputRef}
        disabled={!isTimeRunning}
        onChange={handleChange}
        value={text} />

      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h2>Time Remaining: {time}</h2>
      <h3>Word Count: {wordCount}</h3>
    </div><Footer /></>
  );
}