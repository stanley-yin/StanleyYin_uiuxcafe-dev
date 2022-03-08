new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  scrollHorizontally: true,
  afterLoad:function (origin, destination, direction) {
    const section = destination.item;
    
  },
  onLeave: function (origin, destination, direction) {
    const section = destination.item;

    const title = section.querySelector("h2");
    const t5 = new TimelineMax({ delay: 0.5 });
    const t3 = new TimelineMax({ delay: 0.3 });
    const t1 = new TimelineMax({ delay: 0.1 });
    t5.fromTo(title, 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

    const h1 = section.querySelector("h1");
    t3.fromTo(h1,0.5,{x:-500},{x:0})

    const button = section.querySelector('.show-btn')
    t1.fromTo(button,0.5,{x:-850},{x:0})

    const h5 = section.querySelector('h5')
    t1.fromTo(h5,0.5,{x:-500},{x:0})

    // portfolio
    const h3 = section.querySelector('h3')
    t1.fromTo(h3,0.5,{x:550},{x:0})

    const img = section.querySelector('img')
    t3.fromTo(img,0.5,{opacity:0},{opacity:1})

  },
});

//methods
fullpage_api.setAllowScrolling(true);
