// State dictionary mapping images to active clickable areas
const state = {
    'images/home.png': ['area-articles', 'area-sector'],
    'images/articles.png': ['area-back-btn', 'area-fil-btn','area-article-unf1', 'area-article-unf2', 'area-article-unf3', 'area-article-unf4', 'area-article-unf5'],
    'images/articles_filtered.png': ['area-back-btn','area-fil-btn','area-article-fil1', 'area-article-fil2', 'area-article-fil3'],
    'images/article_opened.png' : ['area-back-btn'],
    'images/filter_1.png' : ['area-filter-1', 'area-filter-2', 'area-filter-3', 'area-filter-4', 'area-filter-5', 'area-filter-6', 'enable-drop', 'area-clear', 'filter-exit'],
    'images/filter_2.png' : ['area-filter-1', 'area-filter-2', 'area-filter-3', 'area-filter-4', 'area-filter-5', 'area-filter-6', 'disable-drop', 'dropdown-1', 'dropdown-2', 'dropdown-3', 'dropdown-4', 'filter-exit'],
    'images/filter_3.png' : ['area-filter-1', 'area-filter-2', 'area-filter-3', 'area-filter-4', 'area-filter-5', 'area-filter-6', 'enable-drop', 'area-clear', 'filter-go', 'area-go'],
    'images/sector_expanded.png' : ['area-back-btn']
};

const all_btns = ['area-home-btn', 'area-settings-btn', 'area-profile-btn', 'area-articles-btn'];

const handledIDs = [
    'area-articles',
    'area-articles-btn',
    'area-back-btn',
    'area-fil-btn',
    'area-article-fil1',
    'area-home-btn',
    'area-article-unf1',
    'enable-drop',
    'disable-drop',
    'dropdown-2',
    'filter-exit',
    'filter-go',
    'area-sector'
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

document.getElementById('area-home-btn').addEventListener('click', ()=> {
    changeImage('images/home.png')
})
document.getElementById('area-article-unf1').addEventListener('click', ()=> {
    current_console = document.getElementById('console-text')
    current_console.innerText = current_console.innerText + "\nError: this UI has not yet been implemented."
})

document.getElementById('enable-drop').addEventListener('click', ()=> {
    changeImage('images/filter_2.png')
})

document.getElementById('disable-drop').addEventListener('click', ()=> {
    changeImage('images/filter_1.png')
})

document.getElementById('dropdown-2').addEventListener('click', ()=> {
    changeImage('images/filter_3.png')
})

document.getElementById('filter-exit').addEventListener('click', ()=> {
    changeImage('images/articles.png')
})

document.getElementById('filter-go').addEventListener('click', ()=> {
    changeImage('images/articles_filtered.png')
})

document.getElementById('area-sector').addEventListener('click', ()=> {
    changeImage('images/sector_expanded.png')
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
