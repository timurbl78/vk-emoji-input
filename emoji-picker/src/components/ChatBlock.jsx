import { useRef, useState } from "react";
import EmojiButton from "./EmojiButton";
import EmojiTabs from './EmojiTabs';
import { sections } from '../ sections';
import Placeholder from "./Placeholder";
import { findEMails, findHashtags, findLinks } from '../utils/regexp';

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
    if (textareaRef.current.innerText === '\n' || textareaRef.current.innerText === '') {
      setIsPlaceholderActive(true);
    } else if (isPlaceholderActive !== false) {
      setIsPlaceholderActive(false);
    }
  }

  const detectSpecialNames = (evt) => {
    const text = textareaRef.current.innerText;
    let copyedText = text;
    let newText;

    if (evt.keyCode === 13 && evt.ctrlKey) {
      const hashtags = findHashtags(text);
      if (hashtags) {
        for (let i = 0; i < hashtags.length; i++) {
          const newReplace = `<a class="highlighted">${hashtags[i]}</a>`;
          newText = copyedText.replace(hashtags[i], newReplace);
          copyedText = newText;
        }
        textareaRef.current.innerHTML = newText;
      }

      const links = findLinks(text);
      if (links) {
        for (let i = 0; i < links.length; i++) {
          const newReplace = `<a class="highlighted">${links[i]}</a>`;
          newText = copyedText.replace(links[i], newReplace);
          copyedText = newText;
        }
        textareaRef.current.innerHTML = newText;
      }

      const emails = findEMails(text);
      if (emails) {
        for (let i = 0; i < emails.length; i++) {
          const newReplace = `<a class="highlighted">${emails[i]}</a>`;
          newText = copyedText.replace(emails[i], newReplace);
          copyedText = newText;
        }
        textareaRef.current.innerHTML = newText;
      }
    }
  }


  return (
    <div className={`chat ${className}`}>
      {isEmojisActive && <EmojiTabs onEmojiClick={onEmojiClick} />}
      <div onKeyUp={detectSpecialNames} tabIndex="1" onInput={onInput} role="textbox" aria-multiline="true" contentEditable="true" ref={textareaRef} className="chat__input">
      </div>
      {isPlaceholderActive && <Placeholder />}
      <EmojiButton onClick={onClickButton} />
    </div>
  )
}

export default ChatBlock;
