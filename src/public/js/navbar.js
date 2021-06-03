const sections = document.querySelectorAll("section")
const navLink = document.querySelectorAll('.nav-list li')

const options = {
	threshold: "0.5" // 0.6 == 60% => section
}

const observer = new IntersectionObserver(entries =>{
	entries.forEach(e =>{
		navLink.forEach((link)=>{
			// link.classList.remove('active')

			if(e.target.id === link.dataset.nav){
				link.classList.add('active')
			}
		})

		console.log(navLink)
		if(e.isIntersecting){
			console.log(e.target.id)
			navLink.map((item)=> console.log(item))
		}
		
	})
}, options)



sections.forEach(section =>{
	observer.observe(section)
})