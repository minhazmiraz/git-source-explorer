let position = 0;
let tree = null;

const sortCmpFunc = (objA, objB) => {
  if (objA.child.length > 0 && objB.child.length === 0) return -1;
  else if (objA.child.length === 0 && objB.child.length > 0) return 1;
  else return objA.name.localeCompare(objB.name);
};

const verifyChild = (parent, child) => {
  return parent === child.split(/\/[^\/]*$/)[0];
};

const parseTree = () => {
  let parent = tree[position].path;
  let name = parent.split("/").pop();
  let id = position + 2;
  let child = [];

  while (parent && tree[position + 1]) {
    position++;
    if (verifyChild(parent, tree[position].path)) {
      if (tree[position].type === "tree") child.push(parseTree());
      else
        child.push({
          path: tree[position].path,
          name: tree[position].path.split("/").pop(),
          id: position + 2,
          child: [],
        });
    } else {
      position--;
      break;
    }
  }
  child.sort(sortCmpFunc);
  return { path: parent, name, id, child };
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
