import React from 'react';
import { sections } from '../ sections';

function TabEmojis({isShow, onEmojiClick, id}) {
  return (
    isShow && (
      <div id={id} className="emoji-tabs__content">
        {sections.map((section, i) => {
          return (
            <React.Fragment key={i}>
              <h3 key={'title_' + i} className="emoji-tabs__title">{section.title}</h3>
              <div key={'list_' + i} className="emoji-list">
                {section.items.map((emoji, j) => {
                  return <button key={section.title + i + '_' + j} unselectable="on" onClick={onEmojiClick} data-row={i} data-column={j} className="emoji-list__icon">{emoji}</button>
                })}
              </div>
            </React.Fragment>
          )
        })}
      </div>
    )
  )
}

export default TabEmojis;
