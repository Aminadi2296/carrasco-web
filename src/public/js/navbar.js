const sections = document.querySelectorAll("section")
const navLink = document.querySelectorAll('.nav-list li a')

const options = {
	threshold: "0.5" // 0.6 == 60% => section
}



const observer = new IntersectionObserver(entries =>{
	entries.forEach(e =>{
		
		if(e.isIntersecting){
			// console.log(e.target.id)
			navLink.forEach(function (key) {
				if(key.dataset.nav === e.target.id){
					key.classList.add('active')
				} else if(e.target.id === home){
					console.log('object')
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