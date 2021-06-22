function TabRecent({isShow, onEmojiClick, id, emojis}) {
  return (
    isShow && (
      <div id={id} className="emoji-tabs__content">
        <h3 className="emoji-tabs__title">Недавние</h3>
        <div className="emoji-list">
          {emojis.map((emoji) => {
            if (emoji[0] !== 0)  {
                return (
                <button key={'Recent_' + emoji[2] + '_' + emoji[3]} unselectable="on" onClick={onEmojiClick} data-row={emoji[2]} data-column={emoji[3]} className="emoji-list__icon">{emoji[0]}</button>
              )
            } else {
              return '';
            }
          })}
        </div>
      </div>
    )
  )
}

export default TabRecent;
