define(['mui','picker'], (mui) => {
	const yearType = document.querySelector('.year-type');
	const dateType = document.querySelector('.date-type');

	let picker = null;
	let dtPicker = null;
	let nowdate = {
		nowY: new Date().getFullYear(),
		nowM: new Date().getMonth() + 1
	}
	dateType.firstElementChild.innerHTML = nowdate.nowY +'-'+nowdate.nowM
	const init = () => {
		mui.init();
		
		picker = new mui.PopPicker();
		 picker.setData([
				 {value:'y',text:'年'},
				 {value:'m',text:'月'}
				
			]);
		 yearType.addEventListener('tap', addEvent);
		  dtPicker = new mui.DtPicker({
			  type: 'month',
			  endDate: new Date()
		  }); 
		 
	}
	function addEvent() {	
		picker.show(function (selectItems) {
			// console.log(yearType.children)
				 yearType.children[0].innerHTML = selectItems[0].text;
			 if(selectItems[0].value === 'y') {
				 dateType.firstElementChild.innerHTML = nowdate.nowY;
			 } else {
				 dateType.firstElementChild.innerHTML = nowdate.nowY +'-'+nowdate.nowM;
			 }
				console.log(selectItems[0].text);
				console.log(selectItems[0].value);
		})
		dateType.addEventListener('tap', () => {
			let timetype = yearType.firstElementChild.innerHTML;
			
			if(timetype === '年') {	
				changedate('none', '100%');
			} else {
				changedate('inline-block', '50%');
			}
			dtPicker.show(function (selectItems) { 
				dateType.firstElementChild.innerHTML = 
				timetype === '年'? selectItems.y.text: 
				selectItems.y.text + '-' + selectItems.m.text;
			    console.log(selectItems.y);//{text: "2016",value: 2016} 
			    console.log(selectItems.m);//{text: "05",value: "05"} 
			})
		});
	}
	

	function changedate(s, w) {
		let monthList = document.querySelector('div[data-id="picker-m"]');
		let yearList = document.querySelector('div[data-id="picker-y"]');
		let monthTitle = document.querySelector('h5[data-id="title-m"]');
		let yearTitle = document.querySelector('h5[data-id="title-y"]');
		
		monthList.style.display = s;
		monthTitle.style.display = s;
		yearList.style.width = w;
		yearTitle.style.width = w;
	}
	init() 
})