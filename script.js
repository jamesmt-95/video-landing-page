const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

// const videoElement = document.getElementById("bg-video");
// videoElement.addEventListener("loadeddata", (e) => {
//   console.log(e);
//   //Video should now be loaded but we can add a second check
//   if (videoElement.readyState === 4) {
//     console.log(videoElement.readyState)
//     //your code goes here
//   }
// });
