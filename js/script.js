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

$(function() {
    $(".gallery a").magnificPopup({
        type: "image",
        gallery: {							//  この部分を追記します  
            enabled: true,			//  この部分を追記します  
        },											//  この部分を追記します  
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