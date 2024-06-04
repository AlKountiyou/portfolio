document.addEventListener('DOMContentLoaded', function () {
    // Splash screen logic
    const html = document.documentElement;
    const body = document.body;
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        html.style.height = 'inherit';
        body.style.height = 'inherit';
        splash.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.classList.remove('hidden');
    }, 2000); // 5 seconds delay

    // Animation on scroll
    const timelineItems = document.querySelectorAll('.timeline li');
    
    const isElementInViewport = el => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const callbackFunc = () => {
        for (let i = 0; i < timelineItems.length; i++) {
            if (isElementInViewport(timelineItems[i])) {
                timelineItems[i].classList.add('in-view');
            }
        }
    };

    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);
});
