function getData(){

    let url = `https://www.loc.gov/books/?q=football&fo=json`;

    fetch(url)
    .then(function (response) {
       if (response.ok){
        response.json().then(function(data){
            if(data.length===0){
                alert("not found")
            }else {console.log(data)}
        })
       }
    })
    
}
getData()

function printResults(resultObj) {
    console.log(resultsObj);

    const resultCard = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    const titleEl = document.createElement('h3');
    titleEl.textContent = resultObj.title;

    const bodyContentEl = document.createElement ('p');
    bodyContentEl.innerHTML = 
        `<strong>Data:</strong>${resultObj.date}<br/>`;
    if (resultsObj.subject) {
        bodyContentEl.innerHTML +=
        `<strong>Subjects:</strong>${resultsObj.subject.join(',')}<br/>`;
    } else {
        bodyContentEl.innerHTML +=
        `<strong>Subjects:</strong> No subject for this entry.`;
    }
   
    if (resultsObj.description) {
        bodyContentEl.innerHTML +=
        `<strong>Description:</strong>${resultObj.description[0]}`;
    } else {
        bodyContentEl.innerHTML +=
        '<strong>Description:</strong> No description for this entry.';
    }

    const linkButtonEl = document.createElement('a');
    linkButtonEl.textContent = 'Read More';
    linkButtonEl.setAttribute('href', resultObj.url);
    linkButtonEl.classList.add('btn', 'btn-dark');

    resultBody.append(titleEl, bodyContentEl, linkButtonEl);

    resultContentEl.append(resultCard);
}

  








//function searchAPI(sport, medium) {
    //let url = 'https://www.loc.gov/${medium}/?q=${sport}&fo=json';

    //fetch(url)
    //.then(function (response) {
      //  return response.json();
    //})
    //.then(function (results) {

      // for (let i = 0; i < results.results.length; i++) {
        //    printResults(results.results[i]);
       //}
    //})
//}

//function printResults(resultObj) {
  //  console.log(resultsObj);
//}


