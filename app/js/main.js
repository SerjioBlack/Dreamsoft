var swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	autoplay: {
		delay: 5000,
	  },

	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	},
  });


  (() => {
	const tabsItems = document.querySelectorAll('.projects__item')
	const contentsItems = document.querySelectorAll('.projects__content')

	tabsItems.forEach((tab, index) => {
		tab.addEventListener('click', e => {
			contentsItems.forEach(content => {
				content.classList.remove('active')
			})
			tabsItems.forEach(tab => {
				tab.classList.remove('active')
			})
			tabsItems[index].classList.add('active')
			contentsItems[index].classList.add('active')
		})
	})
})();

(() => {
	const getmoreTabsItems = document.querySelectorAll('.getmore__tabs-item')
	const getmoreContentsItems = document.querySelectorAll('.getmore__content-item')

	getmoreTabsItems.forEach((tab, index) => {
		tab.addEventListener('click', e => {
			getmoreContentsItems.forEach(content => {
				content.classList.remove('active')
			})
			getmoreTabsItems.forEach(tab => {
				tab.classList.remove('active')
			})
			getmoreTabsItems[index].classList.add('active')
			getmoreContentsItems[index].classList.add('active')
		})
	})
})();

