function EmojiButton({onClick}) {
  return (
    <div className="emoji">
      <a tabIndex="2" className="emoji__link" href="/" onClick={onClick}>
        <img className="emoji__img" alt="Choose Emoji" src="../img/IconEmoji.png" height="20px" width="20px" />
      </a>
    </div>
  )
}

export default EmojiButton;
