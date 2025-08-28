$(function () {
  $(".slide").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    centerPadding: "50px",
    dots: true,
    fade: false,
    cssEase: "ease",
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});
;

$(function () {
  $('.btn-trigger').on('click', function () {
    $(this).toggleClass('active');
    return false;
  });
});

// https://github.com/hmongouachon/mgGlitch

$(function () {
  $(".main-visual").mgGlitch({
    // set 'true' to stop the plugin
    destroy: false,
    // set 'false' to stop glitching
    glitch: true,
    // set 'false' to stop scaling
    scale: true,
    // set 'false' to stop glitch blending
    blend: true,
    // select blend mode type
    blendModeType: 'hue',
    // set min time for glitch 1 elem
    glitch1TimeMin: 10,
    // set max time for glitch 1 elem
    glitch1TimeMax: 100,
    // set min time for glitch 2 elem
    glitch2TimeMin: 10,
    // set max time for glitch 2 elem
    glitch2TimeMax: 300,
  });
});

// $(function() {
//     $(".accordion-header").on("click", function() {	// .aをクリックしたら
//         $(".accordion-content").slideToggle();					// .bを開閉する
//     });
// });

const accordion = document.getElementById("paymentAccordion");
const header = accordion.querySelector(".accordion-header");
const icon = document.getElementById("accordionIcon");

header.addEventListener("click", () => {
  accordion.classList.toggle("open");
  icon.textContent = accordion.classList.contains("open") ? "−" : "＋";
});