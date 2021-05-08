// ADD A REVIEW FUNCTIONALITY

const reviewBtn = document.querySelector('#review-btn');

reviewBtn.addEventListener('click', (event) => {

    const addReview = async (event) => {
        event.preventDefault();

        //get review form id's
        const revTitle = document.querySelector('#title').value.trim();
        const revContent = document.querySelector('#review-text').value.trim();
        const revRating = document.querySelector('#rating').value.trim();

        let review_split = window.location.pathname;
        let reviewID = parseInt(review_split.split('/')[2]);
        console.log(review_split, reviewID);

        if (revTitle && revContent && revRating && reviewID) {

            try {
                const response = await fetch('/api/reviews', {
                    method: 'POST',
                    body: JSON.stringify({ revTitle, revContent, revRating, reviewID }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    document.location.reload();
                }
            } catch (err) {
                alert(err.message);
            }
        }
    };

    document
        .querySelector('#submit-review')
        .addEventListener('click', addReview);


});

// const reviewBtn = document.querySelector('#review-btn');



// reviewBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const revTitle = document.querySelector('#title');
//     const revContent = document.querySelector('#review-text');
//     const revRating = document.querySelector('#rating');
//     fetch('/api/reviews', {
//         method: 'POST',
//         body: {
//             title: revTitle.textContent,
//             review: revContent.textContent,
//             rating: revRating.textContent
//         }
//     }).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err))
// })

// // var loos = [];

// // var filteredLoos = [];

// // var reviews = [];


// // var viewLooTemplate = $('#viewLoo')


// // document.addEventListener('click', function () {
// //     var seeReviews = document.querySelector('#see-reviews');

// // });

// // document.addEventListener('click', function () {
// //     var newReview = document.querySelector('#add-review');

// // });

// // document.addEventListener('click', function () {
// //     var newLoo = document.querySelector('#add-loo');

// // });
