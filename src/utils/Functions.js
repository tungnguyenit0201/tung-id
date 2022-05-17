export const buildURL = (url, query) => {
  let _url = url;
  if (query) {
    _url += /\?/.test(url) ? '&' : '?';
    if (typeof query === 'object') {
      _url += queryString.stringify(query);
    } else {
      _url += query;
    }
  }
  return _url;
};
