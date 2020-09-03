function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    let nextNode = node["next"]
    return collection[nextNode]
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        return nodeAt(index - 1, linkedList, collection)["next"]
    }
}

function indexAt(node, collection, linkedList) {
    let index = 0
    let nodeToFind = headNode(linkedList, collection) 
    while (node !== nodeToFind) {
        index += 1;
        nodeToFind = nodeAt(index, linkedList, collection)
    }
    return index
}

function insertNodeAt(index, newAddress, linkedList, collection) {
    if (index === 0) {
        collection[newAddress]["next"] = linkedList
    } else {
    let neighborNode = nodeAt(index - 1, linkedList, collection)
    collection[newAddress]["next"] = neighborNode["next"]
    neighborNode["next"] = newAddress
    }
}

function deleteNodeAt(index, linkedList, collection) {
    let nodeBeforeDeleted = nodeAt(index - 1, linkedList, collection)
    let nodeToBeDeleted = nodeAt(index, linkedList, collection)
    nodeBeforeDeleted["next"] = nodeToBeDeleted["next"]
}