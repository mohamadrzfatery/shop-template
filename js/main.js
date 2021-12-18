// function barfunc() {
//     document.getElementById("searchsection").checked = false;
//     document.getElementById("phonesection").checked = false;
// }
// function searchfunc(){
//     document.getElementById("barsection").checked = false;
//     document.getElementById("phonesection").checked = false;
// }
// function phonefunc(){
//     document.getElementById("searchsection").checked = false;
//     document.getElementById("barsection").checked = false;
// }
// function dropdowninphonedevice(){
//
// }

// function scrollfunc() {
//     var navbar = document.getElementById("masternav1");
//     var buttonrel = document.getElementById("btnrel");
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         buttonrel.classList.add("show");
//         buttonrel.classList.remove("fade");
//         navbar.classList.remove("position-absolute");
//         navbar.classList.add("bg-dark");
//         navbar.classList.remove("bg-transparent");
//     } else {
//         navbar.classList.add("bg-transparent");
//         navbar.classList.add("position-absolute");
//         buttonrel.classList.remove("show");
//         buttonrel.classList.add("fade");
//     }
// }
// function random() {
//     var myVar = setInterval(myTimer, 1000);
//
//     function myTimer() {
//         value = Math.floor(Math.random() * 9).toString();
//         var img = document.get(value);
//         img.onload = function () {
//             alert(this.width + 'x' + this.height);
//         }
//         img.style.transform = 'transform:scale(1.1,1.1)';
//
//     }
// }

//     jQuery('a.backToTop').click(function(){
//         jQuery('html, body').animate({scrollTop:1}, 'slow');
//         return false;
//     });
// });
//

/*------------------------
		Testimonial Slider
    ----------------------- */

$(".owl-carousel").owlCarousel({
  items: 3,
  nav: false,
  dots: true,
  dotClass: [
    "btn btn-outline-light rounded-circle p-1 mx-1",
    "btn btn-outline-light rounded-circle p-1 mx-1",
  ],
  margin: 20,
  autoplay: false,
  loop: true,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 3,
    },
  },
});
// $("#cmnt").owlCarousel({
//     items: 1,
//     rtl:true,
//     dots: true,
//     margin: 20,
//     autoplay: true,
//     loop: true,
//     autoplayHoverPause:true,
//     smartSpeed: 1200,
//     delay:2000
//
// });

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  navigationTooltips: ["خانه", "معرفی", "خرید", "ارتباط با ما"],
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    if (destination.index === 0) {
      gsap.from(".title", { duration: 1, x: -200, opacity: 0, ease: "power1" });
      gsap.to(".title", { duration: 1, x: 0, opacity: 1, ease: "power1" });
      gsap.from(".txt", { duration: 1, x: 100, opacity: 0, ease: "power1" });
      gsap.to(".txt", { duration: 1, x: 0, opacity: 1, ease: "power1" });
      gsap.from(".btotop", {
        duration: 0.8,
        y: 200,
        opacity: 0,
        ease: "power1",
      });
      gsap.to(".btotop", { duration: 0.8, y: 0, opacity: 1, ease: "power1" });
    }
    if (destination.index === 1) {
      gsap.from(".myimg", { duration: 1.5, x: -1000, ease: "power1" });
      gsap.to(".myimg", { duration: 1.5, x: 0, ease: "power1" });
      gsap.from(".pictxt", {
        duration: 1.5,
        x: 500,
        opacity: 0,
        ease: "power1",
      });
      gsap.to(".pictxt", { duration: 1.5, x: 0, opacity: 1, ease: "power1" });
    }

    gsap.from(".ttobotlg", {
      duration: 1,
      y: -500,
      opacity: 0,
      ease: "power1",
    });
    gsap.to(".ttobotlg", { duration: 1, y: 0, opacity: 1, ease: "power1" });
    if (destination.index === 2) {
      gsap.from(".ltor", {
        duration: 0.8,
        x: -500,
        opacity: 0,
        ease: "power1",
        stagger: 0.35,
      });
      gsap.to(".ltor", {
        duration: 0.8,
        x: 0,
        opacity: 1,
        ease: "power1",
        stagger: 0.35,
      });
    }

    if (destination.index === 3) {
      gsap.from(".myimg1", { duration: 1.5, x: -1000, ease: "power1" });
      gsap.to(".myimg1", { duration: 1.5, x: 0, ease: "power1" });
      gsap.from(".pictxt1", {
        duration: 1.5,
        x: 500,
        opacity: 0,
        ease: "back",
        stagger: 0.15,
      });
      gsap.to(".pictxt1", {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: "back",
        stagger: 0.15,
      });
      gsap.from(".btotoplg", {
        duration: 1.2,
        y: 300,
        opacity: 0,
        ease: "power1",
        stagger: 0.15,
      });
      gsap.to(".btotoplg", {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: "power1",
        stagger: 0.15,
      });
    }
  },
});
