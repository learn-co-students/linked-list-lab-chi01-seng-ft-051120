const getName = node => {
    return node.name;
}

const headNode = (list, collection) => {
    return collection[list];
}

const next = (head, collection) => {
    return collection[head.next];
}

const nodeAt = (ix, list, collection) => {
    let rez = collection[list];
    for (let i = 0; i < ix; i++) {
        rez = collection[rez.next];
    }
    return rez;
}

const addressAt = (ix, list, collection) => {
    return ix === 0 ? list : nodeAt(ix - 1, list, collection).next;
}

const indexAt = (node, collection, list) => {
    let currNode = collection[list];
    for (let i = 0; i < Object.keys(collection).length; i++ ) {
        if (currNode.next === node.next) {
            return i;
        }
        currNode = next(currNode, collection);
    }
    return null;
}

const insertNodeAt = (ix, newName, list, collection) => {
    const currNext = nodeAt(ix-1, list, collection).next;
    nodeAt(ix-1, list, collection).next = newName;
    collection[newName].next = currNext;
}

const deleteNodeAt = (ix, list, collection) => {
    const currAddress = nodeAt(ix, list, collection).next;
    delete collection[addressAt(ix, list, collection)];
    nodeAt(ix-1, list, collection).next = currAddress;
}