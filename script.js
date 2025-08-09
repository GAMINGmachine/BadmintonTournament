function startSlider(sliderId, intervalTime) {
    const slider = document.getElementById(sliderId);
    const slides = slider.getElementsByClassName('slide');
    let currentIndex = 0;
    function showNextSlide() {
        slides[currentIndex].classList.remove('active');        
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }
    slides[currentIndex].classList.add('active');
    setInterval(showNextSlide, intervalTime);
}
window.onload = function() {
    startSlider('slider1', 3000);
    startSlider('slider2', 3000);
};
