//LLFE(Immediately Invoked Function Expression) - функция, которая вызывается немедленно после ее создания.
// Такой подход часто используется в JS для создания локальной области видомости, предотвращения утечек переменных в глобальную область видимости и изолиции кода 

(function () {
    // Функция для подсчёта времени загрузки страницы
    function calculateLoadTime() {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        return 'Время загрузки страницы: ' + loadTime + ' мс';
    }

    // Подписка на событие загрузки страницы
    window.addEventListener('load', function () {
        var loadTimeInfo = document.getElementById('loadTimeInfo');
        if (loadTimeInfo) {
            loadTimeInfo.textContent = calculateLoadTime();
        }
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    
    // получение всех элементов меню
    var menuItems = document.querySelectorAll('.menu-list li');

    // Перебираем элементы и добавляем класс active к текущей странице
    menuItems.forEach(function (item) {
        var link = item.querySelector('a');
        var href = link.getAttribute('href');

        if (filename == href) {
            item.classList.add('active');
        }
    });
});
