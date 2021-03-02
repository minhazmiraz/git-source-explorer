let position = 0;
let tree = null;

const sortCmpFunc = (objA, objB) => {
  if (objA.child.length > 0 && objB.child.length === 0) return -1;
  else if (objA.child.length === 0 && objB.child.length > 0) return 1;
  else return objA.name.localeCompare(objB.name);
};

const parseTree = () => {
  if (tree[position].type === "tree") {
    let parent = tree[position].path;
    let name = parent.split("/").pop();
    let child = [];
    while (true) {
      position++;
      //console.log("path: ", tree[position]);
      if (
        !parent ||
        !tree[position] ||
        parent.split(/\/[^\/]*$/)[0] !==
          tree[position].path.split(/\/[^\/]*$/)[0]
      ) {
        position--;
        break;
      }
      child.push(parseTree());
    }
    child.sort(sortCmpFunc);

    return { name, id: position + 2, child };
  } else {
    let name = tree[position].path.split("/").pop();
    return { name, id: position + 2, child: [] };
  }
};

export const parseJsonToTree = (jsonArray) => {
  tree = jsonArray;
  let parsedTree = [];
  while (true) {
    if (!tree[position]) break;
    parsedTree.push(parseTree(tree));
    position++;
  }
  parsedTree.sort(sortCmpFunc);
  return parsedTree;
};

/* 

{
    name: src,
    id: position,
    childs: [
        {
            name: a.js,
            id: position
            childs:null
        },
        {
            name: b.js,
            id: position
            childs:null
        }
    ]
}


*/
