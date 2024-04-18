const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const carousselDots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagLineParagraph = document.querySelector("#banner p");
let currentIndex = 0;

function updateSelectedDot() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        } 
		else{
            dot.classList.remove('dot_selected');
        }
    });
};

function updateImageData() {
	bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;
	tagLineParagraph.innerHTML = slides[currentIndex].tagLine;
}


slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected');
    }
    carousselDots.appendChild(dot);
});

arrowLeft.addEventListener('click', function() {
	if (currentIndex > 0) {
		currentIndex--;
    } else {
		currentIndex = slides.length - 1;
    }
	console.log(currentIndex);
    updateSelectedDot();
	updateImageData();
});

arrowRight.addEventListener('click', function() {
	if (currentIndex < slides.length - 1) {
		currentIndex++;		
    } else {
		currentIndex = 0;
    }
	console.log(currentIndex);
    updateSelectedDot();
	updateImageData();
});