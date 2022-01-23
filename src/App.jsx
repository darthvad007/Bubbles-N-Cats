import { useState } from "react";
import logo from "./cat.jpg";
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
        <p>Hello Kitty and Rush Lovers! {emoji && emoji.native}</p>
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
            Feelings for kitties
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://youtu.be/4vLaO7hoTxM?t=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Music Video
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://www.google.com/search?q=kittens&rlz=1C1GGRV_enUS751US751&sxsrf=AOaemvJ5yuKo5ROWmFs_mF-O2p9KzQ8Y6A:1642978816199&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwiYztmF_cj1AhXAAWMBHdv6DcgQ_AUoAXoECAEQAw&biw=1099&bih=1084&dpr=1.75"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kitties
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
