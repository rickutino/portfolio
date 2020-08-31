$(document).on("turbolinks:load", ()=>{ 
  const sections = document.querySelectorAll('section');
  const bubble = document.querySelector('.bubble');
  // const gradient = "linear-gradient( 109.6deg,  rgba(14,11,56,1) 11.2%, rgba(239,37,37,1) 91.1% )";

  const options = {
    threshold : 0.7
  };

  let observer = new IntersectionObserver(navCheck, options);

  function navCheck(entries) {
    entries.forEach(entry => {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      // const gradientIndex = entry.target.getAttribute('data-index');
      const coords = activeAnchor.getBoundingClientRect();
      const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left
      };
      if(entry.isIntersecting){
        bubble.style.setProperty('left',`${directions.left}px`);
        bubble.style.setProperty('top',`${directions.top}px`);
        bubble.style.setProperty('width',`${directions.width}px`);
        bubble.style.setProperty('height',`${directions.height}px`);
        // bubble.style.background = gradient[gradientIndex];
      }
    }); 
  }

  sections.forEach(section =>{
    observer.observe(section);
  }); 
})