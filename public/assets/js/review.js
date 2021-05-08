//get elements
const reviewBtn = document.querySelector('#review-btn');



reviewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const revTitle = document.querySelector('#title');
    const revContent = document.querySelector('#review-text');
    const revRating = document.querySelector('#rating');
    fetch('/api/reviews', {
        method: 'POST',
        body: {
            title: revTitle.textContent,
            review: revContent.textContent,
            rating: revRating.textContent
        }
    }).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err))
})

// var loos = [];

// var filteredLoos = [];

// var reviews = [];


// var viewLooTemplate = $('#viewLoo')


// document.addEventListener('click', function () {
//     var seeReviews = document.querySelector('#see-reviews');

// });

// document.addEventListener('click', function () {
//     var newReview = document.querySelector('#add-review');

// });

// document.addEventListener('click', function () {
//     var newLoo = document.querySelector('#add-loo');

// });
