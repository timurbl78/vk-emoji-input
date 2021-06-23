export const findEMails = (searchText) => {
  const regexp = /([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/g;
  const result = searchText.match(regexp);
  if (result) {
      return result;
  } else {
      return false;
  }
}

export const findLinks = (searchText) => {
  const regexp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const result = searchText.match(regexp);
  if (result) {
      return result;
  } else {
      return false;
  }
}

export const findHashtags = (searchText) => {
  const regexp = /\B\#\w\w+\b/g;
  const result = searchText.match(regexp);
  if (result) {
      return result;
  } else {
      return false;
  }
}
