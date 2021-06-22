import { ACTIONS } from './index';

export const updateEmojis = (emoji, row, column) => {
  return {
    type: ACTIONS.UPDATE_EMOJIS,
    payload: {
      emoji,
      row,
      column,
    },
  };
};
