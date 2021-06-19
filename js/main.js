let arr = [];
function pushArr() {
	return Math.floor(50 * Math.random());
}
pushArr();

function createRandomNumbers() {
	for (let i = 0; i < 7; i++) {
		arr.push(pushArr())
	}
}

createRandomNumbers()

function changeElementsArr() {
	let newArr = [];
	for (let elemts of arr) {
		for (var number of newArr) {
			if (number == elemts) {
				elemts++
			}
		}
		newArr.push(elemts)
	}
	return newArr;
}

let btn = document.querySelector('.btn');

btn.addEventListener('click', writeElements)

function writeElements(elems) {
	let out = document.querySelector('.out')
	let store = changeElementsArr(elems)
	for (let elements of store) {
		let newP = document.createElement('p');
		newP.classList.add('number--css')
		newP.textContent = elements;
		out.append(newP);
	}
	this.style.display = 'none';
}



//console.log(changeElementsArr());








//console.log(Math.floor(Math.random() * i));