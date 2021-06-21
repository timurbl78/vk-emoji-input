import { useRef, useState } from "react";
import EmojiButton from "./EmojiButton";
import EmojiTabs from './EmojiTabs';
import { sections } from '../ sections';

function ChatBlock(props) {
  const {className} = props;
  const [isEmojisActive, setIsEmojisActive] = useState(false);

  const textareaRef = useRef();

  const onClickButton = (evt) => {
    evt.preventDefault();
    setIsEmojisActive(!isEmojisActive);
  }

  const onEmojiClick = (evt) => {
    const row = evt.target.dataset.row;
    const column = evt.target.dataset.column;
    textareaRef.current.focus();

    // if(typeof document.selection != "undefined")
    // {
    //   document.selection.createRange().text = sections[row].items[column];
    // }
    // else
    // {
    //   const sel = document.getSelection();
    //   console.log(textareaRef.current);
    //   console.log(sel);
    //   const index = sel.focusOffset;
    //   const length = textareaRef.current.innerText.length;
    //   const textStart = textareaRef.current.innerText.slice(0, index);
    //   const textEnd = textareaRef.current.innerText.slice(index, length);

    //   textareaRef.current.innerText = textStart + sections[row].items[column] + textEnd;
    // }
    const text = sections[row].items[column];

    if (window.getSelection) {
      const sel = document.getSelection();

      if (sel.getRangeAt && sel.rangeCount) {
        const range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
      }
    } else if (document.selection && document.selection.createRange) {
      document.selection.createRange().text = text;
    }
  }

  return (
    <div className={`chat ${className}`}>
      {isEmojisActive && <EmojiTabs onEmojiClick={onEmojiClick} />}
      <div placeholder="Ваше сообщение" role="textbox" aria-multiline="true" contentEditable="true" ref={textareaRef} className="chat__input" placeholder="Ваше сообщение">
      </div>
      <EmojiButton onClick={onClickButton} />
    </div>
  )
}

export default ChatBlock;
