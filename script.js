// Draw the central thread as the page scrolls
const threadFill = document.querySelector('.thread-fill');

function updateThread(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
  const offset = 100 - progress * 100;
  if (threadFill) threadFill.style.strokeDashoffset = offset;
}

window.addEventListener('scroll', updateThread, { passive: true });
window.addEventListener('resize', updateThread);
updateThread();

// Reveal timeline entries as they enter the viewport
const entries = document.querySelectorAll('.entry');

const observer = new IntersectionObserver((observed) => {
  observed.forEach((item) => {
    if (item.isIntersecting){
      item.target.classList.add('in-view');
    }
  });
}, { threshold: 0.25 });

entries.forEach((entry) => observer.observe(entry));
