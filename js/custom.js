// for copyright notice in footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentNotice = (currentYear > 2024) ? '2024 - ' + currentYear : '' + currentYear;
    document.querySelector("#displayYear").innerHTML = currentNotice;
}
getCurrentYear();

// for carousel in hero section
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

