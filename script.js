function showScreen(number) {

  const screens =
    document.querySelectorAll(".screen");

  screens.forEach(screen => {

    screen.classList.remove("active");

  });


  const nextScreen =
    document.getElementById(
      "screen" + number
    );

  nextScreen.classList.add("active");


  createHearts();

}



/* RUNNING NO BUTTON */

function moveButton(button) {

  button.style.position = "fixed";


  const maxX =
    window.innerWidth -
    button.offsetWidth -
    20;

  const maxY =
    window.innerHeight -
    button.offsetHeight -
    20;


  const randomX =
    Math.floor(
      Math.random() * maxX
    );

  const randomY =
    Math.floor(
      Math.random() * maxY
    );


  button.style.left =
    randomX + "px";

  button.style.top =
    randomY + "px";

}



/* HEART ANIMATION */

function createHearts() {

  for (let i = 0; i < 25; i++) {

    const heart =
      document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.top =
      "100vh";

    heart.style.fontSize =
      Math.random() * 20 + 15 + "px";

    heart.style.zIndex = "9999";

    heart.style.pointerEvents =
      "none";

    heart.style.transition =
      "all 3s ease-out";


    document.body.appendChild(heart);


    setTimeout(() => {

      heart.style.top = "-50px";

      heart.style.opacity = "0";

      heart.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    }, 100);


    setTimeout(() => {

      heart.remove();

    }, 3200);

  }

}
