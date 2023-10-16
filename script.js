//ek div banao aur uspar jab mouse chale to picture pop ho jaye aur fir dafa ho jaye

// hmara mouse jab chal rha hai to kai bar chl rha hai jiske wjh se kai bar card create ho jayega and wo hum nhi chahte hai

// mouse jitnibar chal rha hai chale bs execution of function kam bar ho

// throttling - kisi particular code k no. of execution ko kam kr dena

// har bar ek div bnao
// div ko absolute banao ek width and hieght do overflow hidden kro
// and div k ander image bnao and us image ko neeche push kardo
// image ko animated way upr laao

// Throttling Function
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    // console.log("chala mouse");

    var div = document.createElement("div");
    div.classList.add("imagediv");

    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.pexels.com/photos/3369191/pexels-photo-3369191.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    );

    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
      y: "0",
      ease: Power2,
      duration: 0.6,
    });

    gsap.to(img, {
      y: "100%",
      delay: 3,
      ease: Power2,
    });

    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 500)
);
