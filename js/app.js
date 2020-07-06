//SELECT ALL ELEMENTS
const countryNameElement = document.querySelector(".country .name");
const updateDate = document.getElementById("update");

const totalCasesElement = document.querySelector(".total-cases .value");
const newCasesElement = document.querySelector(".total-cases .new-value");

const activeElement = document.querySelector(".active .value");

const recoverdElement = document.querySelector(".recovered .value");
const newRecoverdElement = document.querySelector(".recovered .new-value");

const deathsElement = document.querySelector(".deaths .value");
const newDeathsElement = document.querySelector(".deaths .new-value");

const recoveryElement = document.querySelector(".recovery .value");
const fatalityElement = document.querySelector(".fatality .value");

//APP VARIABLES
let appData = [],
	casesList = [],
	recoverdList = [],
	deathsList = [],
	cntList = [];

let userCountry = 'India';


function fetchData(userCountry){

	fetch('https://api.covid19api.com/summary')
	.then( response => {
		return response.json();
	})
	.then( data => {
		data.Countries.forEach(cnt => {
			if (cnt.Country === userCountry ) {
				countryNameElement.innerHTML = cnt.Country;
				const event = new Date(`${cnt.Date}`);
				updateDate.innerHTML = `Last Updated: ${event.toString()}`;
				
				totalCasesElement.innerHTML = cnt.TotalConfirmed || 0;
				newCasesElement.innerHTML = `+${cnt.NewConfirmed || 0}`;
				activeElement.innerHTML = `${cnt.TotalConfirmed - cnt.TotalRecovered - cnt.TotalDeaths || 0}`;
				
				recoverdElement.innerHTML = cnt.TotalRecovered || 0;
				newRecoverdElement.innerHTML = `+${cnt.NewRecovered || 0}`;

				deathsElement.innerHTML = cnt.TotalDeaths || 0;
				newDeathsElement.innerHTML = `+${cnt.NewDeaths || 0}`;
				recoveryElement.innerHTML = `${((cnt.TotalRecovered / cnt.TotalConfirmed) * 100).toFixed(2) || 0}%`;
				fatalityElement.innerHTML = `${((cnt.TotalDeaths  / cnt.TotalConfirmed) * 100).toFixed(2) || 0}%`;
			}
		})

	})
	.catch( error => {
		alert(error);
	})
}
fetchData(userCountry);