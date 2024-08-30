import { useState } from "react";
import "./App.css";
import GlowCircle from "./glowCircle";

function App() {
  const [view, setView] = useState("token"); // 'token' or 'settings'

  const handleNextClick = () => {
    setView("settings");
  };

  const handleBackClick = () => {
    setView("token");
  };

  return (
    <>
      <GlowCircle />
      <div className="container">
        <form>
          <div
            className={`token-enter-div ${view === "settings" ? "active" : ""}`}
          >
            <h1>Enter Bot Token</h1>
            <input
              name="token"
              id="token"
              className="token-input"
              placeholder="token"
            />
            <button type="button" onClick={handleNextClick}>
              Next
            </button>
          </div>

          <div className={`settings ${view === "settings" ? "active" : ""}`}>
            <h1>Settings</h1>
            <div className="bot-info">
              <img
                className="bot-info-avatar"
                src="https://cdn.discordapp.com/avatars/829112572816130058/823630e777efe85c7fe71402f00ab0c1.png?size=1024"
              />
              <h3 className="bot-info-name">Bot Name (id)</h3>
            </div>

            <div className="buttons">
              <button type="button" onClick={handleBackClick}>
                Back
              </button>

              <button type="button">Raid</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
