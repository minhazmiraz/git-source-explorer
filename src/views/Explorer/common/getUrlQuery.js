const GetUrlQuery = () => {
  var parser = document.createElement("a");
  parser.href = window.location.href;
  var query = parser.search.substring(1);
  var repoInfo = query.split("/");
  return {
    //repoName: repoInfo[repoInfo.length - 2],
    //repoAuthor: repoInfo[repoInfo.length - 1],
    repoName: "Spoon-Knife",
    repoAuthor: "octocat",
  };
};

export default GetUrlQuery;
