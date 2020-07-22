function loopDescendants(targetElement, specifiedChild, finalChildrenArray) {
    // init if no value given in props
    typeof specifiedChild === "undefined" ? (specifiedChild = "*") : null;
    typeof finalChildrenArray === "undefined" ? (finalChildrenArray = []) : null;
    var childrenArray = targetElement.querySelectorAll(specifiedChild);
    if (childrenArray.length > 0) {
        // each level and its children firstly pushed
        finalChildrenArray.push(childrenArray);
        childrenArray.forEach(function (children) {
            // recursion for each descendant
            loopDescendants(children, specifiedChild, finalChildrenArray);
        });
    }
    return finalChildrenArray;
}
