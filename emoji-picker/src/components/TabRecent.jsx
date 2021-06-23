function TabRecent({isShow, onEmojiClick, id, emojis}) {
  return (
    isShow && (
      <div id={id} className="emoji-tabs__content">
        <h3 className="emoji-tabs__title">Недавние</h3>
        <div className="emoji-list">
          {emojis.map((emoji) => {
            if (emoji[0] !== 0)  {
                return (
                <button key={'Recent_' + emoji[1] + '_' + emoji[2]} unselectable="on" onClick={onEmojiClick} data-row={emoji[1]} data-column={emoji[2]} className="emoji-list__icon">{emoji[0]}</button>
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
