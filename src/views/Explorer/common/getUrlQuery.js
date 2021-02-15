const GetUrlQuery = () => {
  let parser = document.createElement("a");
  parser.href = window.location.href;
  let queries = parser.search.substring(1).split("&");

  return queries.reduce((obj, query) => {
    let tmp = query.split("=");
    obj[tmp[0]] = tmp[1];
    return obj;
  }, {});
};

export default GetUrlQuery;
