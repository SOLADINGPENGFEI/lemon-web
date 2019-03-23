define(['mui','picker'], (mui) => {
	const list = document.querySelectorAll('.y-list span');
	let picker = null;
	const init = () => {
		mui.init();
		
		picker = new mui.PopPicker();
		 picker.setData([
				 {value:'y',text:'年'},
				 {value:'m',text:'月'},
				 {value:'d',text:'日'}
			]);
		 list[0].addEventListener('tap', addEvent);
	}
	function addEvent(e) {	
		const tar = e.target;
		 picker.show(function (selectItems) {
			 if(tar.tagName === 'SPAN') {
				 tar.innerHTML = selectItems[0].text;
			 }
				console.log(selectItems[0].text);//智子
				console.log(selectItems[0].value);//zz 
		})
	}
	init()
})