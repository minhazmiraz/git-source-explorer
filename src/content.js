let openIde = () => {
  console.log("sending msg");
  chrome.runtime.sendMessage({ action: "OPEN_EXPLORER" }, function (response) {
    console.log(response.message);
  });
};

const parent = document.querySelector(".file-navigation");
const child = parent.querySelector("a.btn");

let btn = document.createElement("button");
let btnText = document.createTextNode("Source");
btn.appendChild(btnText);
btn.setAttribute("class", "btn ml-2 d-none d-md-block");
btn.setAttribute("id", "sourceButton");

parent.insertBefore(btn, child);

document.getElementById("sourceButton").addEventListener("click", openIde);
