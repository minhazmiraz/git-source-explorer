const GetUrlQuery = () => {
  let parser = document.createElement("a");
  parser.href = window.location.href;
  let queries = parser.search.substring(1).split("&");

  return {
    author: "minhazmiraz",
    branch: "master",
    name: "file-extension-icon-JS",
    sha: "7969872b953ab20655cfc09b40d0813856e5fad6",
  };
  return queries.reduce((obj, query) => {
    let tmp = query.split("=");
    obj[tmp[0]] = tmp[1];
    return obj;
  }, {});
};

export default GetUrlQuery;
