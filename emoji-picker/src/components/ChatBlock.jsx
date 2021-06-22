import { useRef, useState } from "react";
import EmojiButton from "./EmojiButton";
import EmojiTabs from './EmojiTabs';
import { sections } from '../ sections';
import Placeholder from "./Placeholder";

function ChatBlock(props) {
  const {className} = props;
  const [isEmojisActive, setIsEmojisActive] = useState(false);
  const [isPlaceholderActive, setIsPlaceholderActive] = useState(true);

  const textareaRef = useRef();

  const onClickButton = (evt) => {
    evt.preventDefault();
    setIsEmojisActive(!isEmojisActive);
  }

  const onEmojiClick = (evt) => {
    const row = evt.target.dataset.row;
    const column = evt.target.dataset.column;
    textareaRef.current.focus();

    const text = sections[row].items[column];

    if (window.getSelection) {
      const sel = document.getSelection();

      if (sel.getRangeAt && sel.rangeCount) {
        const range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
        onInput();
      }
    } else if (document.selection && document.selection.createRange) {
      document.selection.createRange().text = text;
      onInput();
    }
  }

  const onInput = () => {
    if (textareaRef.current.innerText === '\n') {
      setIsPlaceholderActive(true);
    } else if (isPlaceholderActive !== false) {
      setIsPlaceholderActive(false);
    }
  }

  return (
    <div className={`chat ${className}`}>
      {isEmojisActive && <EmojiTabs onEmojiClick={onEmojiClick} />}
      <div onInput={onInput} role="textbox" aria-multiline="true" contentEditable="true" ref={textareaRef} className="chat__input">
      </div>
      {isPlaceholderActive && <Placeholder />}
      <EmojiButton onClick={onClickButton} />
    </div>
  )
}

export default ChatBlock;
