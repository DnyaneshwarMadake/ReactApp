import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import WordReplace from "./Components/WordReplace";

function App() {
  return (
    <>
      <Navbar title="TextFunctions" homeText="About HomeText" />
      <div className="container my-3">
        <TextForm heading="Enter your text here!" />
      </div>
      <div className="container my-3">
        <WordReplace />
      </div>
    </>
  );
}

export default App;
