const sections = document.querySelectorAll('section');
const sectionsArr = Array.from(sections);

const navItems = document.querySelectorAll('nav a');
function activateNavByIndex(index) {
  if (sectionsArr[index].classList.contains('active'))
     return;

  const currentActive = document.querySelectorAll('.active');
  for (let i = currentActive.length - 1; i >= 0; i--) {
    currentActive[i].classList.remove('active');
  }
  navItems[index].classList.add('active');
}

const intersectionCallback = (entries, observer) => {
  if (entries[0].intesectionRatio <= 0)
      return;
  
  console.log(entries);
  if (entries[0].intersectionRatio > 0.75) {    activateNavByIndex(sectionsArr.indexOf(entries[0].target))
  }
};

const intersectionOptions = {
  threshold: [0, 0.5, 1],
  rootMargin: '60px 0px 0px 0px'
};

const intersectionObserver = new IntersectionObserver(intersectionCallback, intersectionOptions);

for (let i = 0; i < sections.length; i++) {
  intersectionObserver.observe(sections[i]);  
}
