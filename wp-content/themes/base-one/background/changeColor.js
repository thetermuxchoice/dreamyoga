let check_one = false
let check_two = false
let check_tree = false
const header = document.querySelector(".header-desktop")

window.addEventListener("scroll", () => {
  const anim = document.querySelectorAll("#section-anim");
  const bgPosOne = anim[0].getBoundingClientRect().top;
  if (bgPosOne < 1000) {
    Color.vector = ["#fa2566", "#f05330", "#f00033"]
    if (!check_one) {
      this.init()
      header.style.background = "#f00033"
      check_one = true
    }
  }
});

let canvas;
let c;
const circleCount = 6//window.innerWidth / 150;
const mouse = { x: null, y: null };
const maxRadius = window.innerWidth / 6;
const Color = {
    vector: ["#fa2566", "#f05330", "#f00033"],
    getRandom: () => {
        return Color.vector[Math.floor(Math.random() * Color.vector.length)];
    }
};
class Circle {
    constructor(r_min = randomNumber(maxRadius * 0.9, 200), x = randomNumber(canvas.width, r_min), y = randomNumber(canvas.height, r_min), dx = randomNumber(1, -1, [0]), dy = randomNumber(1, -1, [0]), color = Color.getRandom()) {
        this.r_min = r_min;
        this.x = x;
        this.y = y;
        this.dx = 1;
        this.dy = 1;
        this.color = color;
        this.draw();
        this.r = 200;
    }
    side() {
        return {
            right: this.x + this.r,
            left: this.x - this.r,
            bottom: this.y + this.r,
            top: this.y - this.r
        };
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    run() {
        // detect collision
        if (this.side().right > canvas.width || this.side().left < 0)
            this.dx *= -1;
        if (this.side().bottom > canvas.height || this.side().top < 0)
            this.dy *= -1;
        //if (this.side().right > c.arc() || this.side().left < 0)
            //this.dx *= -1;
        // increase size
        if ((mouse.x != mouse.y) != 0 &&
            this.side().left - mouse.x < 50 &&
            mouse.x - this.side().right < 50 &&
            this.side().top - mouse.y < 50 &&
            mouse.y - this.side().bottom < 50 &&
            this.r < maxRadius)
            this.r += 3;
        else if (this.r > this.r_min)
            this.r -= 1;
        // change position
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}
let circles = [];
function init() {
    // setting up canvas
    const cc = document.createElement("canvas")
    cc.id = "canvas"
    document.body.appendChild(cc);

    document.body.replaceChild(cc,cc);
    canvas = this.document.getElementById("canvas");
    c = canvas.getContext("2d");
    this.resetCanvas();
    animation();
    // adding circles
    for (let i = circleCount; i > 0; i--) {
        circles.push(new Circle());
    }
}
function animation() {
    // clear canvas
    c.clearRect(0, 0, canvas.width, canvas.height);
     animation
    circles.forEach((circle) => circle.run());
    //callback
    requestAnimationFrame(animation);
}
// ## utility functions
function resetCanvas() {
    c.canvas.width = window.innerWidth;
    c.canvas.height = window.innerHeight;
}
function randomNumber(max = 1, min = 0, forbidden = []) {
    let res;
    do {
        res = Math.floor(min + Math.random() * (max - min));
    } while (forbidden.some((num) => num == res));
    return res;
}
// ## event handlers
window.addEventListener("load", this.init());
window.addEventListener("resize", resetCanvas);
window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    //console.log(mouse);
});
