// инициализируем Swiper
var mySwiper = new Swiper('.swiper-container', {
  // кол-во слайдов на странице
  slidesPerView: 1,

  // расстояние между слайдами
  spaceBetween: 10,

  loop: false,
  // указываем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // пагинация указывает текущее местоположение на слайдаре
  pagination: {
    el: '.swiper-pagination',
    // буллеты
    clickable: true,
    // добавление эффекта для буллетов
    dynamicBullets: true,
    // добавление номера текущей странице в слайдере
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
});
