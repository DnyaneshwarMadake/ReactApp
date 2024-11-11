import React, { useState } from "react";

function WordReplace() {
  const [text1, setText1] = useState("");
  const [targetWord, setTargetWord] = useState("");
  const [replacementWord, setReplacementWord] = useState("");
  const [result, setResult] = useState("");

  // Function to replace word
  const handleReplace = () => {
    // Use regular expression to replace all instances, case-sensitive
    const updatedText = text1.replaceAll(targetWord, replacementWord);
    setResult(updatedText);
  };

  return (
    <div>
      <h2>Word Replacement</h2>
      <div className="spacing">
        <label>Text : </label>
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          placeholder="Enter your text here"
        />
      </div>
      <div className="spacing">
        <label>Target Word : </label>
        <input
          type="text"
          value={targetWord}
          onChange={(e) => setTargetWord(e.target.value)}
          placeholder="Word to replace"
        />
      </div>
      <div className="spacing">
        <label>Replacement Word : </label>
        <input
          type="text"
          value={replacementWord}
          onChange={(e) => setReplacementWord(e.target.value)}
          placeholder="Replacement word"
        />
      </div>
      <button className="btn btn-primary me-3" onClick={handleReplace}>
        Replace Word
      </button>

      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  );
}

export default WordReplace;
