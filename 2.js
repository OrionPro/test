// hover on item  class="path4611"  class="circle4613" 
    $(".g5504").hover(
        function() {
            TweenMax.to($(this).find(".path4611"), 0.7, { fill: "#eed350" });
            TweenMax.to($(this).find(".circle4613"), 0.7, { fill: "#e2c63b" });
            TweenMax.to($(this).find(".path4393"), 0.7, { fill: "#a2361f" });
        },
        function() {
            TweenMax.to($(this).find(".path4611"), 0.7, { fill: "#d45b3e" });
            TweenMax.to($(this).find(".circle4613"), 0.7, { fill: "#c45237" });
            TweenMax.to($(this).find(".path4393"), 0.7, { fill: "#B14731" });
        }
    );tl3.from("#g4995", 0.8, { opacity: 0, transformOrigin: "50% 50%", scale: 0 }, 1.5);
tl3.from((".what_else_do_item_p"), 0.7, { opacity: 0, transformOrigin: "50% 50%", scale: 0 }, 1);
tl3.from("#g42911111", 0.8, { opacity: 0, transformOrigin: "50% 50%", scale: 0 }, 1.7);

// Наше портфолио
tl4.from("#g4388", 0.8, { opacity: 0, x: 100, ease: Power2.easeInOut, }, 0.3);
tl4.from("#g4474", 0.8, { opacity: 0, y: -100, ease: Power2.easeInOut, }, 0.4);
tl4.from("#g4420", 0.8, { opacity: 0, y: -100, ease: Power2.easeInOut, }, 0.5);
tl4.from("#g4504", 0.8, { opacity: 0, x: -100, ease: Power2.easeInOut, }, 0.6);

    TweenMax.from("#g4378", 1.5, { rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut });
    TweenMax.from("#g4950", 1.5, { rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut });
    TweenMax.from("#g4219", 1.5, { rotation: 360, transformOrigin: "50% 50%", delay: 0.5, ease: Power1.easeInOut });
    TweenMax.from("#path5-circle1", 1.5, { drawSVG: "100% 100%", delay: 0.5 });
    TweenMax.from("#path5-circle2", 1.5, { drawSVG: "100% 100%", delay: 0.5 });
    TweenMax.from("#path5-circle3", 1.5, { drawSVG: "100% 100%", delay: 0.5 });
     // скалы и дома вверху
    tl.from("#g4445", 0.6, { opacity: 0, y: -250, ease: Back.easeInOut }, 0.1);
    tl.from("#g4452", 0.6, { opacity: 0, y: -250, ease: Back.easeInOut }, '-=0.5');
    tl.from("#g4583", 0.6, { opacity: 0, y: -250, ease: Back.easeInOut }, '-=0.5');
    tl.from("#g5908", 0.6, { opacity: 0, y: -250, ease: Back.easeInOut }, '-=0.5');
    tl.from("#g5725", 0.6, { opacity: 0, y: -250, ease: Back.easeOut }, '-=0.4');
    tl.from("#g5837", 0.6, { opacity: 0, y: -250, ease: Back.easeOut }, '-=0.4');
    tl.from("#path4449", 0.6, { opacity: 0, y: 300, ease: Power2.easeInOut }, '-=0.4');
    // облака
    tl.from("#g4280", 0.6, { opacity: 0, x: -400, ease: Back.easeOut }, 0.5);
    tl.from("#g4299", 0.6, { opacity: 0, x: 400, ease: Back.easeOut }, 0.5);  
