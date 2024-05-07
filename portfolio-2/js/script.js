/* スライドメニュー
====================================================*/
const menuBtn = document.querySelector('#menu-btn');
const menuPanel = document.querySelector('#menu-panel');
const menuCaption = document.querySelector('.nav-caption');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};

//メニューを開く
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuPanel.classList.toggle('active');
    if (menuCaption.textContent === 'メニュー') {
        menuCaption.textContent = '閉じる';
    } else {
        menuCaption.textContent = 'メニュー';
    }
});

/* TOP画像スライドショー
====================================================*/
// const lists = [
//     "../images/cover-1.jpg",
//     "../images/cover-2.jpg",
//     "../images/cover-3.jpg",
// ];
// const topBg = document.querySelector('#top-bg');
// const content = `<div><img src="images/${lists[1]}" alt="矢印"><div>`;

// topBg.insertAdjacentHTML('beforeend', content);


/* 学校紹介スライダー
====================================================*/
// const images = ['images/slider_1.jpg', 'images/slider_2.jpg', 'images/slider_3.jpg',];
// const slideImg = document.querySelector('#slide_img');
// const prev = document.querySelector('#prev');
// const next = document.querySelector('#next');
// let current = 0;

// next.addEventListener('click', () => {
//     if (current + 1 < images.length) {
//         current++;
//         slideImg.src = images[current];
//     }
// });
// prev.addEventListener('click', () => {
//     if (current > 0) {
//         current--;
//         slideImg.src = images[current];
//     }
// });
new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    rewind      : true,
    rewindByDrag: true,
    focus: 'center',
    gap: 20,
} ).mount();
