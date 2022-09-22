// TODO: load the dataset 

let attractions;
fetch('attractions.json')
	.then(response => response.json())
	.then(data => {
		attractions = data;
		console.log('attractions: ', attractions)
		filterData();
	});

function filterData(category) {
	let filteredD = attractions;
	if (category && category != 'all'){
		filteredD = filteredD.filter(function(value,i) {return value.Category == category;})
	}
	const sorted = filteredD.sort((a,b)=>b.Visitors-a.Visitors);
	let top5 = sorted.slice(0,5);
	console.log('Top five attractions by visitors: ',top5);
	renderBarChart(top5);
}

document.getElementById('attraction-category').addEventListener("change", (value)=> {
	console.log('selected:',value.target.value);
	filterData(value.target.value);
});

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

	/*
function getsort(prop){
	return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  

}
*/


// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category