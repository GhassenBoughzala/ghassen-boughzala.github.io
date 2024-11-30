import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Theme from "./components/theme";

function App() {
  return (
    <>
      <h1>Portfolio GB</h1>
      <div className="card">
        <Theme />
      </div>
      <p className="read-the-docs">Click to switch themes</p>
    </>
  );
}

export default App;
