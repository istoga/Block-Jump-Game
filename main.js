let character = document.getElementById("character");
let block = document.getElementById("block");
let btn = document.querySelector("button");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout( function() {
    character.classList.remove("animate");
  }, 500);

  let checkDead = setInterval (function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
      block.style.display = "none";
      alert("U lose!");
    }
  }, 10);
}

function slide() {
  if (block.classList != "slide") {
    block.classList.add("slide");
  }
    let checkDead = setInterval (function() {
      let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.display = "none";
        alert("U lose!");
      }
    });
}

function control(e) {
  if(e.keycode === 32) {
    jump();
  }
}

document.addEventListener("keypress", jump);
btn.addEventListener("click", slide);