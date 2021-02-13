export const getRepoEndpoint = (repoName, repoAuthor) =>
  "https://api.github.com/repos/" + repoAuthor + "/" + repoName;

export const getBranchesEndpoint = (repoName, repoAuthor) =>
  "https://api.github.com/repos/" + repoAuthor + "/" + repoName + "/branches";
