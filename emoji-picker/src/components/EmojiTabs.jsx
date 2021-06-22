import { useState } from "react";
import { connect } from "react-redux";
import TabEmojis from "./TabEmojis";
import TabRecent from "./TabRecent";
import { updateEmojis } from '../store/actions/';
import { sections } from "../ sections";

const MAX_NUMBER_RECENT_EMOJI = 25;

function EmojiTabs({onEmojiClick, dispatch, recentEmojis}) {
  const [tabs, setTabs] = useState([true, false]);

  const tabOnClick = (evt) => {
    const name = evt.target.dataset.name;

    if (name === 'emojis') {
      setTabs([true, false]);
    } else if (name === 'recent') {
      setTabs([false, true]);
    }
  }

  const onClick = (evt) => {
    const row = evt.target.dataset.row;
    const column = evt.target.dataset.column;
    const text = sections[row].items[column];

    dispatch(updateEmojis(text, row, column));

    onEmojiClick(evt);
  }


  return (
    <>
      <div className="emoji-helper">
        <TabEmojis title={'Эмоции'} isShow={tabs[0]} id={'emojis'} onEmojiClick={onClick}/>
        <TabRecent title={'Недавние'} isShow={tabs[1]} id={'recent'} onEmojiClick={onClick} emojis={recentEmojis.slice(0, MAX_NUMBER_RECENT_EMOJI)} />

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

const mapStateToProps = state => ({
  recentEmojis: state.recentEmojis
})

export default connect(mapStateToProps)(EmojiTabs);
