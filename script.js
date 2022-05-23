window.$ = jQuery;
$(document).ready(() => {
    console.log(123)
    $('body').append(`
        <hr>

        <div class="menu">
            меню из js
            <ul>
                <li>
                    <a href="https://google.com">Главная</a>
                </li>
                <li>
                    <a href="https://google.com">О нас</a>
                </li>
                <li>
                    <a href="https://google.com">Услуги</a>
                </li>
                <li>
                    <a href="https://google.com">Прочее</a>
                </li>
                <li>
                    <a href="https://google.com">Новости</a>
                </li>
            </ul>
        </div>
    `);
})
