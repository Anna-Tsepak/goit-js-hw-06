const menuItems = document.querySelectorAll(".item");
console.log(`Number of categories:${menuItems.length}`);


menuItems.forEach(item => {
 console.log(`Category: ${item.firstElementChild.textContent}`);

console.log(`Elements: ${item.lastElementChild.children.length}`)
}) 



