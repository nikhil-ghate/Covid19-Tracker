//SELECT ALL ELEMENTS
const countryNameElement = document.querySelector(".country .name");
const updateDate = document.getElementById("update");

const totalCasesElement = document.querySelector(".total-cases .value");
const newCasesElement = document.querySelector(".total-cases .new-value");

const recoverdElement = document.querySelector(".recovered .value");
const newRecoverdElement = document.querySelector(".recovered .new-value");

const deathsElement = document.querySelector(".deaths .value");
const newDeathsElement = document.querySelector(".deaths .new-value");

const ctx = document.getElementById("axes_line_chart");

//APP VARIABLES
let appData = [],
	casesList = [],
	recoverdList = [],
	deathsList = [],
	cntList = [];

// console.log(countryNameElement);
//GET USER COUNTRY CODE
let countryCode = geoplugin_countryCode();
let userCountry;
country_list.forEach( country => {
	if(country.code === countryCode){
		userCountry = country.name;
	}
});


function fetchData(userCountry){

	fetch('https://api.covid19api.com/summary')
	.then( response => {
		return response.json();
	})
	.then( data => {
		data.Countries.forEach(cnt => {
			if (cnt.Country === userCountry ) {
				console.log(cnt);
				countryNameElement.innerHTML = cnt.Country;
				const event = new Date(`${cnt.Date}`);
				console.log(event.toString());
				updateDate.innerHTML = `Last Updated: ${event.toString()}`;
				
				totalCasesElement.innerHTML = cnt.TotalConfirmed || 0;
				newCasesElement.innerHTML = `+${cnt.NewConfirmed || 0}`;
				
				recoverdElement.innerHTML = cnt.TotalRecovered || 0;
				newRecoverdElement.innerHTML = `+${cnt.NewRecovered || 0}`;

				deathsElement.innerHTML = cnt.TotalDeaths || 0;
				newDeathsElement.innerHTML = `+${cnt.NewDeaths || 0}`;
			}
		})

	})
	.catch( error => {
		alert(error);
	})
}
fetchData(userCountry);

