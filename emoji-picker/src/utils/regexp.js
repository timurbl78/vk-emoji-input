export const findEMails = (searchText) => {
  const regexp = /\S+[a-z0-9]@[a-z0-9\.]+/img;
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
