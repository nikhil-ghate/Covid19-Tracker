// ALL COUNTRY NAMES WITH THEIR ISO CODE
let country_list = [
    {name: "Afghanistan", code: "AF"},
    {name: "Albania", code: "AL"},
    {name: "Algeria", code: "DZ"},
    {name: "Andorra", code: "AD"},
    {name: "Angola", code: "AO"},
    {name: "Antigua and Barbuda", code: "AG"},
    {name: "Argentina", code: "AR"},
    {name: "Armenia", code: "AM"},
    {name: "Australia", code: "AU"},
    {name: "Austria", code: "AT"},
    {name: "Azerbaijan", code: "AZ"},
    {name: "Bahamas", code: "BS"},
    {name: "Bahrain", code: "BH"},
    {name: "Bangladesh", code: "BD"},
    {name: "Barbados", code: "BB"},
    {name: "Belarus", code: "BY"},
    {name: "Belgium", code: "BE"},
    {name: "Belize", code: "BZ"},
    {name: "Benin", code: "BJ"},
    {name: "Bhutan", code: "BT"},
    {name: "Bolivia", code: "BO"},
    {name: "Bosnia and Herzegovina", code: "BA"},
    {name: "Botswana", code: "BW"},
    {name: "Brazil", code: "BR"},
    {name: "Brunei Darussalam", code: "BN"},
    {name: "Bulgaria", code: "BG"},
    {name: "Burkina Faso", code: "BF"},
    {name: "Burundi", code: "BI"},
    {name: "Cambodia", code: "KH"},
    {name: "Cameroon", code: "CM"},
    {name: "Canada", code: "CA"},
    {name: "Cape Verde", code: "CV"},
    {name: "Central African Republic", code: "CF"},
    {name: "Chad", code: "TD"},
    {name: "Chile", code: "CL"},
    {name: "China", code: "CN"},
    {name: "Colombia", code: "CO"},
    {name: "Comoros", code: "KM"},
    {name: "Congo (Brazzaville)", code: "CG"},
    {name: "Congo (Kinshasa)", code: "CD"},
    {name: "Costa Rica", code: "CR"},
    {name: "Croatia", code: "HR"},
    {name: "Cuba", code: "CU"},
    {name: "Cyprus", code: "CY"},
    {name: "Czech Republic", code: "CZ"},
    {name: "Côte d'Ivoire", code: "CI"},
    {name: "Denmark", code: "DK"},
    {name: "Djibouti", code: "DJ"},
    {name: "Dominica", code: "DM"},
    {name: "Dominican Republic", code: "DO"},
    {name: "Ecuador", code: "EC"},
    {name: "Egypt", code: "EG"},
    {name: "El Salvador", code: "SV"},
    {name: "Equatorial Guinea", code: "GQ"},
    {name: "Eritrea", code: "ER"},
    {name: "Estonia", code: "EE"},
    {name: "Ethiopia", code: "ET"},
    {name: "Fiji", code: "FJ"},
    {name: "Finland", code: "FI"},
    {name: "France", code: "FR"},
    {name: "Gabon", code: "GA"},
    {name: "Gambia", code: "GM"},
    {name: "Georgia", code: "GE"},
    {name: "Germany", code: "DE"},
    {name: "Ghana", code: "GH"},
    {name: "Greece", code: "GR"},
    {name: "Grenada", code: "GD"},
    {name: "Guatemala", code: "GT"},
    {name: "Guinea", code: "GN"},
    {name: "Guinea-Bissau", code: "GW"},
    {name: "Guyana", code: "GY"},
    {name: "Haiti", code: "HT"},
    {name: "Holy See (Vatican City State)", code: "VA"},
    {name: "Honduras", code: "HN"},
    {name: "Hungary", code: "HU"},
    {name: "Iceland", code: "IS"},
    {name: "India", code: "IN"},
    {name: "Indonesia", code: "ID"},
    {name: "Iran, Islamic Republic of", code: "IR"},
    {name: "Iraq", code: "IQ"},
    {name: "Ireland", code: "IE"},
    {name: "Israel", code: "IL"},
    {name: "Italy", code: "IT"},
    {name: "Jamaica", code: "JM"},
    {name: "Japan", code: "JP"},
    {name: "Jordan", code: "JO"},
    {name: "Kazakhstan", code: "KZ"},
    {name: "Kenya", code: "KE"},
    {name: "Korea (South)", code: "KR"},
    {name: "Kuwait", code: "KW"},
    {name: "Kyrgyzstan", code: "KG"},
    {name: "Lao PDR", code: "LA"},
    {name: "Latvia", code: "LV"},
    {name: "Lebanon", code: "LB"},
    {name: "Lesotho", code: "LS"},
    {name: "Liberia", code: "LR"},
    {name: "Libya", code: "LY"},
    {name: "Liechtenstein", code: "LI"},
    {name: "Lithuania", code: "LT"},
    {name: "Luxembourg", code: "LU"},
    {name: "Macedonia, Republic of", code: "MK"},
    {name: "Madagascar", code: "MG"},
    {name: "Malawi", code: "MW"},
    {name: "Malaysia", code: "MY"},
    {name: "Maldives", code: "MV"},
    {name: "Mali", code: "ML"},
    {name: "Malta", code: "MT"},
    {name: "Mauritania", code: "MR"},
    {name: "Mauritius", code: "MU"},
    {name: "Mexico", code: "MX"},
    {name: "Moldova", code: "MD"},
    {name: "Monaco", code: "MC"},
    {name: "Mongolia", code: "MN"},
    {name: "Montenegro", code: "ME"},
    {name: "Morocco", code: "MA"},
    {name: "Mozambique", code: "MZ"},
    {name: "Myanmar", code: "MM"},
    {name: "Namibia", code: "NA"},
    {name: "Nepal", code: "NP"},
    {name: "Netherlands", code: "NL"},
    {name: "New Zealand", code: "NZ"},
    {name: "Nicaragua", code: "NI"},
    {name: "Niger", code: "NE"},
    {name: "Nigeria", code: "NG"},
    {name: "Norway", code: "NO"},
    {name: "Oman", code: "OM"},
    {name: "Pakistan", code: "PK"},
    {name: "Palestinian Territory", code: "PS"},
    {name: "Panama", code: "PA"},
    {name: "Papua New Guinea", code: "PG"},
    {name: "Paraguay", code: "PY"},
    {name: "Peru", code: "PE"},
    {name: "Philippines", code: "PH"},
    {name: "Poland", code: "PL"},
    {name: "Portugal", code: "PT"},
    {name: "Qatar", code: "QA"},
    {name: "Republic of Kosovo", code: "XK"},
    {name: "Romania", code: "RO"},
    {name: "Russian Federation", code: "RU"},
    {name: "Rwanda", code: "RW"},
    {name: "Saint Kitts and Nevis", code: "KN"},
    {name: "Saint Lucia", code: "LC"},
    {name: "Saint Vincent aenadines", code: "VC"},
    {name: "San Marino", code: "SM"},
    {name: "Sao Tome and Principe", code: "ST"},
    {name: "Saudi Arabia", code: "SA"},
    {name: "Senegal", code: "SN"},
    {name: "Serbia", code: "RS"},
    {name: "Seychelles", code: "SC"},
    {name: "Sierra Leone", code: "SL"},
    {name: "Singapore", code: "SG"},
    {name: "Slovakia", code: "SK"},
    {name: "Slovenia", code: "SI"},
    {name: "Somalia", code: "SO"},
    {name: "South Africa", code: "ZA"},
    {name: "South Sudan", code: "SS"},
    {name: "Spain", code: "ES"},
    {name: "Sri Lanka", code: "LK"},
    {name: "Sudan", code: "SD"},
    {name: "Suriname", code: "SR"},
    {name: "Swaziland", code: "SZ"},
    {name: "Sweden", code: "SE"},
    {name: "Switzerland", code: "CH"},
    {name: "Syrian Arab Republic (Syria)", code: "SY"},
    {name: "Taiwan, Republic ina", code: "TW"},
    {name: "Tajikistan", code: "TJ"},
    {name: "Tanzania, United Republic of", code: "TZ"},
    {name: "Thailand", code: "TH"},
    {name: "Timor-Leste", code: "TL"},
    {name: "Togo", code: "TG"},
    {name: "Trinidad and Tobago", code: "TT"},
    {name: "Tunisia", code: "TN"},
    {name: "Turkey", code: "TR"},
    {name: "Uganda", code: "UG"},
    {name: "Ukraine", code: "UA"},
    {name: "United Arab Emirates", code: "AE"},
    {name: "United Kingdom", code: "GB"},
    {name: "United States of America", code: "US"},
    {name: "Uruguay", code: "UY"},
    {name: "Uzbekistan", code: "UZ"},
    {name: "Venezuela (Bolivarian Republic)", code: "VE"},
    {name: "Viet Nam", code: "VN"},
    {name: "Western Sahara", code: "EH"},
    {name: "Yemen", code: "YE"},
    {name: "Zambia", code: "ZM"},
    {name: "Zimbabwe", code: "ZW"}
];

// Select search country elements

const search_country_element = document.querySelector('.search-country');
const country_list_element = document.querySelector('.country-list');
const change_country_btn = document.querySelector('.change-country');
const close_list_btn = document.querySelector('.close');
const input = document.getElementById('search-input');

//CREATE THE LIST
function createCountryList(){
    const num_countries = country_list.length;

    let i = 0, ul_list_id;

    country_list.forEach((country,index) => {
        if( index % Math.ceil(num_countries/num_of_ul_lists) == 0){
            ul_list_id = `list-${i}`
            country_list_element.innerHTML += `<ul id='${ul_list_id}'></ul`;
            i++;
        }
        document.getElementById(`${ul_list_id}`).innerHTML += `
        <li onclick="fetchData('${country.name}')" id="${country.name}">
        ${country.name}
        </li>
        `;
    })
}

let num_of_ul_lists = 3;
createCountryList();

//SHOW/HIDE THE COUNTRY LIST ON CLICK EVENT
change_country_btn.addEventListener("click", function(){
    input.value = "";
    resetCountryList();
    search_country_element.classList.toggle('hide');
    search_country_element.classList.add('fadeIn');
});

close_list_btn.addEventListener("click", function(){
    search_country_element.classList.toggle('hide');
});

country_list_element.addEventListener("click", function(){
    search_country_element.classList.toggle('hide');
});


//COUNTRY FILTER
input.addEventListener("input", function(){
    let value = input.value.toUpperCase();
    country_list.forEach(country => {
        if (country.name.toUpperCase().startsWith(value)){
            document.getElementById(country.name).classList.remove("hide");
        }else{
            document.getElementById(country.name).classList.add("hide");

        }
    })
});

//RESET COUNTRY LIST
function resetCountryList() {
    country_list.forEach(country => document.getElementById(country.name).classList.remove("hide"));
}