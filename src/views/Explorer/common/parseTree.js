let position = 0;
let tree = null;

const parseTree = () => {
  if (tree[position].type === "tree") {
    let parent = tree[position].path;
    let name = parent.split("/").pop();
    let childs = [];
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
      childs.push(parseTree());
    }

    return { name, id: position, childs };
  } else {
    let name = tree[position].path.split("/").pop();
    return { name, id: position, childs: [] };
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
