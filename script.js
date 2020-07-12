

const url = 'https://ghibliapi.herokuapp.com/films'

let movies = () => {
  // get the movies div
  let moviesDiv = document.getElementById('movies');
  fetch(url)
    .then(response => response.json())
    // we defined the data as m below
    .then(m => {
      // for each movie (our personally defined variable) in the m array / forEach is our loop
      m.forEach(movie => {
        // create div for card (class is card)
        let div = document.createElement(`div`);
        div.className = `card`;
        // create h5 for title (set text to movie.title, class to card-header)
        let h5 = document.createElement(`h2`);
        h5.innerText = movie.title;
        
        // create p for description (set text to movie.description, class to card-text)
        let descript = document.createElement(`p`);
        descript.innerText = movie.description;
        // add h5 and p to card body
        div.appendChild(h5);
        div.appendChild(descript);
        // add card to moviesDiv
        moviesDiv.appendChild(div);
      })
    });
}
// call the function
movies();



// fetch(url)
// .then(response => response.json())
// // we defined the data as m below
// .then(m => {
//   // for each movie (our personally defined variable) in the m array / forEach is our loop
//   m.forEach(movie => {
//     // we will do the steps below
//     // create p element
//     let pTag = document.createElement(`p`);
//     // set the text of the p tag
//     pTag.innerText = movie.title;
//     // add the p tag to the movies div
//     moviesDiv.appendChild(pTag);
//   })
// });