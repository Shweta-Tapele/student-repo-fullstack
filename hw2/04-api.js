const url = 'https://restcountries.eu/rest/v2/all';

// Enter your code here
function getpage(url) {
    fetch(url).then(response => response.json()).
        then(data => displayNames(data));
}

function displayNames(data){
    var list = document.getElementById('results');
    var newEntry =  null;
    for(country of data){
        newEntry = document.createElement('li');
        newEntry.innerHTML=country.name+" - "+country.population.toLocaleString();
        list.appendChild(newEntry);

    }
}

getpage(url);