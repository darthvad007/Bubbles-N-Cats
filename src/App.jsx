import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

function App() {
  const [count, setCount] = useState(0);
  const [emoji, setEmoji] = useState(undefined);
  const [showPicker, setShowPicker] = useState(false);
  console.log(emoji);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Max! {emoji && emoji.native}</p>
        {showPicker && (
          <Picker
            set="apple"
            title="Choose Ur Fighter"
            emoji="point_up"
            onSelect={setEmoji}
            emojiTooltip={true}
            emojisToShowFilter={(emoji) =>
              emoji.name.toLowerCase().includes("face")
            }
          />
        )}
        <p>
          <button type="button" onClick={() => setShowPicker(!showPicker)}>
            Toggle picker
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
