
function getParams() {
    const searchParamsArray = document.location.search.split('&');

    const query = searchParamsArray[0].split('=')[1];
    const format = searchParamsArray[0].split('=')[1];

    searchAPI(query, format);
}

function searchAPI(query, format) {
    let url = 'https://www.loc.gov/${format}/?q=${query}&fo=json';

    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (results) {

       for (let i = 0; i < results.results.length; i++) {
            printResults(results.results[i]);
       }
    })
}

function printResults(resultObj) {
    console.log(resultsObj);
}

