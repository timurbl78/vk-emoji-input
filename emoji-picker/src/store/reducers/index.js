import { combineReducers } from 'redux';
import recentEmojiReducer from './recentEmojiReducer';

export default combineReducers({
  recentEmojis: recentEmojiReducer
});
