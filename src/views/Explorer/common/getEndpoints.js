export const getRepoEndpoint = (repoName, repoAuthor) =>
  "https://api.github.com/repos/" + repoAuthor + "/" + repoName;

export const getBranchesEndpoint = (repoName, repoAuthor) =>
  "https://api.github.com/repos/" + repoAuthor + "/" + repoName + "/branches";

export const getFileTreeEndpoint = ({ name, author, branch, sha }) =>
  "https://api.github.com/repos/" +
  author +
  "/" +
  name +
  "/git/trees/" +
  sha +
  "?recursive=true";
