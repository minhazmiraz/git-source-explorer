let openIde = (data) => {
  console.log("sending msg");
  chrome.runtime.sendMessage(
    { action: "OPEN_EXPLORER", data },
    function (response) {
      console.log(response.message);
    }
  );
};

let scrapeData = () => {
  //console.log("scrapeData");
  let repoData = {};

  //Get Repo Name and Repo Author
  let url = window.location.href;
  let urlData = url.split("/");

  repoData["author"] = urlData[3];
  repoData["name"] = urlData[4];

  if (!repoData["name"] || !repoData["author"]) return false;

  //Get Branch name
  let branch_selector = document.querySelector(
    "#branch-select-menu [data-menu-button]"
  );

  if (!branch_selector) return false;

  repoData["branch"] = branch_selector.outerText;

  let last_commit_url = document.querySelector(
    "#repo-content-pjax-container.repository-content [data-issue-and-pr-hovercards-enabled] .css-truncate a.link-gray-dark"
  );

  if (!last_commit_url) return false;

  repoData["sha"] = last_commit_url.href.split("/").pop();

  if (!repoData["sha"]) return false;

  return repoData;
};

let contents = () => {
  //console.log("contents");
  let data = scrapeData();
  if (data === false) return;
  //console.log(data);

  const parent = document.querySelector(".file-navigation");
  if (!parent) return;
  const child = parent.querySelector("a.btn");
  if (!child) return;

  let btn = document.createElement("button");
  let btnText = document.createTextNode("Source");
  btn.appendChild(btnText);
  btn.setAttribute("class", "btn ml-2 d-none d-md-block");
  btn.setAttribute("id", "sourceButton");
  parent.insertBefore(btn, child);

  document
    .getElementById("sourceButton")
    .addEventListener("click", () => openIde(data));
};

contents();
