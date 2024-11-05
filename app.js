// State dictionary mapping images to active clickable areas
const state = {
    'images/home.png': ['area-articles'],
    'images/articles.png': ['area-back-btn', 'area-fil-btn','area-article-unf1', 'area-article-unf2', 'area-article-unf3', 'area-article-unf4', 'area-article-unf5'],
    'images/articles_filtered.png': ['area-back-btn','area-fil-btn','area-article-fil1', 'area-article-fil2', 'area-article-fil3'],
    'images/article_opened.png' : ['area-back-btn']
};

const all_btns = ['area-home-btn', 'area-settings-btn', 'area-profile-btn', 'area-articles-btn'];

const handledIDs = [
    'area-articles',
    'area-articles-btn',
    'area-back-btn',
    'area-fil-btn',
    'area-article-fil1',
    'area-home-btn',
    'area-article-unf1'
];

// Function to change the iPhone image source and update clickable areas
function changeImage(newSrc) {
    document.getElementById('iphone-image').src = newSrc;
    updateClickableAreas(newSrc);
}

// Function to enable/disable clickable areas based on the current image
function updateClickableAreas(imageSrc) {
    // Get all clickable areas
    const allAreas = document.querySelectorAll('.click-area');
    
    // Get the list of active areas for the current image
    const activeAreas = state[imageSrc] || [];
    //concat with all_btns
    activeAreas.push(...all_btns);
    
    
    allAreas.forEach(area => {
        if (activeAreas.includes(area.id)) {
            // Enable the area
            area.style.pointerEvents = 'auto';
            area.style.visibility = 'visible';
        } else {
            // Disable the area
            area.style.pointerEvents = 'none';
            area.style.visibility = 'hidden';
        }
    });
}

// Event listeners for clickable areas
document.getElementById('area-articles').addEventListener('click', function() {
    changeImage('images/articles.png');
});
document.getElementById('area-articles-btn').addEventListener('click', function() {
    changeImage('images/articles.png');
});

document.getElementById('area-back-btn').addEventListener('click', function() {
    changeImage('images/home.png');
});

document.getElementById('area-fil-btn').addEventListener('click', function() {
    // current_image = document.getElementById('iphone-image').src;
    // if(current_image.includes('articles.png')){
    //     changeImage('images/articles_filtered.png');
    // } else {
    //     changeImage('images/articles.png');
    // }
    changeImage('images/filter_1.png');
});

document.getElementById('area-article-fil1').addEventListener('click', ()=> {
    changeImage('images/article_opened.png')
})
DynamicsCompressorNode
document.getElementById('area-home-btn').addEventListener('click', ()=> {
    changeImage('images/home.png')
})
d
document.getElementById('area-article-unf1').addEventListener('click', ()=> {
    current_console = document.getElementById('console-text')
    current_console.innerText = current_console.innerText + "\nError: this UI has not yet been implemented."
})

let clickables = document.querySelectorAll('.click-area')

clickables.forEach((area)=> {
    area.addEventListener('click', ()=> {
        if(!handledIDs.includes(area.id))  {
            current_console = document.getElementById('console-text')
            current_console.innerText = current_console.innerText + "\nError: this UI has not yet been implemented."
        }
})})

// Initialize clickable areas on page load

window.onload = function() {
    updateClickableAreas('images/home.png');
};
