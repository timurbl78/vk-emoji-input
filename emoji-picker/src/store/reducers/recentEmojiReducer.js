import {ACTIONS} from '../actions/index';
import initialState from '../initialState';

const recentEmojiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EMOJIS: {
      function sortArray(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? 1 : -1;
        }
      }

      const {emoji, row, column} = action.payload;

      const newRecentEmojis = JSON.parse(JSON.stringify(state));

      let isFind = false;
      for (let i = 0; i < newRecentEmojis.length; i++) {
        if (newRecentEmojis[i][0] === emoji) {
          isFind = true;
          newRecentEmojis[i][1]++;
        }
      }
      if (!isFind) {
        for (let i = 0; i < newRecentEmojis.length; i++) {
          if (newRecentEmojis[i][0] === 0) {
            newRecentEmojis[i][0] = emoji;
            newRecentEmojis[i][1] = 1;
            newRecentEmojis[i][2] = row;
            newRecentEmojis[i][3] = column;
            break;
          }
        }
      }
      newRecentEmojis.sort(sortArray);

      return newRecentEmojis;
    }
    default:
      return state;
  }
}

export default recentEmojiReducer;
