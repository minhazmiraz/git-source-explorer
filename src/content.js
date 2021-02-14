let openIde = (data) => {
  console.log("sending msg");
  chrome.runtime.sendMessage(
    { action: "OPEN_EXPLORER", data },
    function (response) {
      console.log(response.message);
    }
  );
};

const parent = document.querySelector(".file-navigation");
const child = parent.querySelector("a.btn");

let btn = document.createElement("button");
let btnText = document.createTextNode("Source");
btn.appendChild(btnText);
btn.setAttribute("class", "btn ml-2 d-none d-md-block");
btn.setAttribute("id", "sourceButton");
parent.insertBefore(btn, child);

//Get Branch data for explorer
let eventBool = document
  .querySelector("#branch-select-menu")
  .dispatchEvent(new Event("mouseover"));
console.log(eventBool);

setTimeout(() => {
  let all_branch_node = document
    .querySelector("#branch-select-menu")
    .querySelectorAll("[data-menu-button-text]");
  let all_branch = [...all_branch_node].map((branch) => branch.outerText);
  console.log(current_branch, all_branch);

  let current_branch = document
    .querySelector("#branch-select-menu")
    .querySelector("[data-menu-button]").outerText;

  document
    .getElementById("sourceButton")
    .addEventListener("click", () => openIde({ current_branch, all_branch }));
}, 500);
