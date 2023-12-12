//IIFE(Immediately Invoked Function Expression) - функция, которая вызывается немедленно после ее создания.
// Такой подход часто используется в JS для создания локальной области видомости, предотвращения утечек переменных в глобальную область видимости и изолиции кода 

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        var loadTime = performance.now();
        console.log('Время загрузки страницы: ' + loadTime + ' мс');

        var element = document.getElementById('loadTimeInfo');
        element.innerHTML = 'Время загрузки страницы: ' + loadTime.toFixed(3) + ' мс';
    });
});


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
