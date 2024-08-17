let count= 0;
let url = 'https://openapi.programming-hero.com/api/retro-forum/posts#';



function deleteReadSpin(){
    setTimeout(readSpin, 1000);
}

deleteReadSpin();


allPosts(url)

function searchCat(){
    const search = document.getElementById('search');
    const searched = search.value;
    url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searched}`;
    allPosts(url);
    searchSpinS();
    setTimeout(searchSpinE, 2000);
}