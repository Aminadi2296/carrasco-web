const sections = document.querySelectorAll("section")
const navLink = document.querySelectorAll('.nav-list li a')

function navIcon(x) {
	x.classList.add("change");
	const ul = document.querySelector('.nav-list')
	const li = document.querySelectorAll('.nav-list li')
	const icon = document.querySelector('#menu')

	if(!icon.checked){
		ul.style.display = 'flex'
		li.forEach(e => e.onclick = ()=>{
			ul.style.display = 'none'
			x.classList.remove("change");
			icon.checked = false;
		})
	} else{
		ul.style.display = 'none'
		x.classList.remove("change");
	}
	

  }

const options = {
	threshold: "0.5" // 0.6 == 60% => section
}



const observer = new IntersectionObserver(entries =>{
	entries.forEach(e =>{
		
		if(e.isIntersecting){

			

			navLink.forEach(function (key) {
				if(key.dataset.nav === e.target.id){
					key.classList.add('active')
					
				} else if(e.target.id === home){
					// console.log('object')
				} else{
					key.classList.remove('active')
				}
			});
		}
		
	})
}, options)



sections.forEach(section =>{
	observer.observe(section)
})


const addScroll = ()=>{
	if(document.documentElement.scrollTop >= 100 || document.body.scrollTop >= 100){
		document.querySelector('.whatsapp').style.opacity = '1'
		// console.log(document.documentElement.scrollTop)
	} else{
		document.querySelector('.whatsapp').style.opacity = '0'
		// console.log('no nav')
	}
}

window.addEventListener('scroll', addScroll)