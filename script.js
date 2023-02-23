//TODO - allow the user to change size
//TODO - have the window dynamically resize
//TODO - make the website look better


function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }

const container = document.getElementById("container");
container.style.width = `${(Math.min(getWidth(), getHeight()) * .9)}px`
container.style.height = `${(Math.min(getWidth(), getHeight()) * .9)}px`

let gridSize = 16;
console.log(container);
makeGrid(gridSize);

const button = document.getElementById("gridChange");
button.addEventListener("click", function(){
    gridSize = prompt("Set the size of the grid", `${gridSize}`);
    makeGrid(gridSize);
})



function makeGrid(gridSize) {
    if(gridSize > 100)
        gridSize = 100;

    //Remove all old elements
    const oldDiv = document.querySelectorAll("div.pixel");
    oldDiv.forEach((e) => e.remove());


    let divSize = (Math.min(getWidth(), getHeight()) * .9) / gridSize;

    for(let i = 0; i < gridSize ** 2; i++){
        const element = document.createElement("div");
        element.classList.add("pixel");
        container.appendChild(element);
        element.addEventListener("mouseover", function() {
            element.classList.add("currentlyHovered");
        });

        element.style.width = `${divSize}px`
        element.style.height = `${divSize}px`
    }

      
}