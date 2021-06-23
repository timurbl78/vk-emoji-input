import {ACTIONS} from '../actions/index';
import initialState from '../initialState';

const recentEmojiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EMOJIS: {
      const {emoji, row, column} = action.payload;

      let newRecentEmojis = JSON.parse(JSON.stringify(state));
      let index;

      let isFind = false;
      for (let i = 0; i < newRecentEmojis.length; i++) {
        if (newRecentEmojis[i][0] === emoji) {
          isFind = true;
          index = i;
          break;
        }
      }
      if (isFind) {
        newRecentEmojis.splice(index, 1);
        newRecentEmojis.unshift([emoji, row, column]);
      } else {
        newRecentEmojis.unshift([emoji, row, column]);
        newRecentEmojis = newRecentEmojis.slice(0, newRecentEmojis.length - 1);
      }

      return newRecentEmojis;
    }
    default:
      return state;
  }
}

export default recentEmojiReducer;
