import { useState } from "react";
import TabEmojis from "./TabEmojis";

function EmojiTabs({onEmojiClick}) {
  const [tabs, setTabs] = useState([true, false]);
  const emojis = [128512, 128513, 128514, 128515, 128516, 128517, 128518, 128519, 128520];

  const tabOnClick = (evt) => {
    const name = evt.target.dataset.name;

    if (name === 'emojis') {
      setTabs([true, false]);
    } else if (name === 'recent') {
      setTabs([false, true]);
    }
  }

  return (
    <>
      <div className="emoji-helper">
        <TabEmojis title={'Эмоции'} isShow={tabs[0]} id={'emojis'} onEmojiClick={onEmojiClick} emojis={emojis} />
        <TabEmojis title={'Недавние'} isShow={tabs[1]} id={'recent'} onEmojiClick={onEmojiClick} emojis={emojis} />

        <div className="emoji-tabs">
          <button onClick={tabOnClick} className={`emoji-tabs__tablink emoji-tabs__tablink--emojis ${tabs[0] ? 'emoji-tabs__tablink--active' : ''}`} data-name="emojis">

          </button>
          <button onClick={tabOnClick} className={`emoji-tabs__tablink emoji-tabs__tablink--recent ${tabs[1] ? 'emoji-tabs__tablink--active' : ''}`} data-name="recent">

          </button>
        </div>
      </div>
    </>
  )
}

export default EmojiTabs;
