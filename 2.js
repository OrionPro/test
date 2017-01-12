  // цели
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
