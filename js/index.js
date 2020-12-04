/* 轮播 */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 200,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});