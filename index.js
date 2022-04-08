const heading = document.getElementById("heading")
const tableHead = document.getElementsByClassName("tablehead")
const tableRow = document.getElementsByTagName("p")[2]
const firstChild = main.children
const secondChild = main.children[1]
const p = secondChild.getElementsByTagName('p') // searches for the second "p" child
p.textContent = "wow"

// We can navigate through the DOM Subtrees using elements like 'children'



