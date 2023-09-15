let windowHeight = window.innerHeight;
let home = document.querySelector('.hero-home');
let wrapperTran = document.querySelector('.transition')


wrapperTran.style.height = `${windowHeight}px`


let pageTran = ()=>{
  var tl = gsap.timeline();
  
  tl.to('.wrapper-trans', {
     scale: 0.9,
     duration: 0.4,
     ease: "power2.out"
  })
  tl.to('.transition', {
    y: 0,
    duration: 0.5,
    ease:"power2.out"
  })
  
  tl.to('.transition', {
     opacity: 0,
     delay: 0.3
  })
  
  tl.set('.transition', {
     opacity: 1, 
     y:"100%"
  })
  
}





let mainAnimation = ()=>{
  gsap.from('p', {
     opacity: 0,
     duration: 0.6,
     ease:"power2.out", 
     delay: 2
  })
  
}






delay = (n) => {
    n = n || 2000;
    return new Promise((done)=> {
        setTimeout(()=> {
            done();
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data){
                const done = this.async();
                pageTran();
                await delay(1000);
                done();
            },

            async enter (data){
                mainAnimation();
            },

            async once(data){
                mainAnimation();
            }
        }
    ]
});
