# ITMO Новости
Сервис новостей с сайта ITMO

## Запуск
Перед запуском проекта у вас должны быть установлены [Node.js](https://nodejs.org/) и [npm](https://www.npmjs.com/).

Запуск dev-приложения:
```bash
# Установить зависимости
npm i
# Запустить локальный сервер
npm run dev
```

Сборка билда:
```bash
# Установить зависимости
npm i
# Собрать билд
npm run build
```

## Деплой
https://itmo-gladosq.vercel.app/news/1

## Функционал
1. Реализована интернационализация `next-intl` по стандарту i18n. При смене/добавлении локали меняются все элементы навигации (кнопки, заголовки, декоративные элементы) и контентная часть сайта. Можно масштабировать проект на большое количество языков методом расширения справочника.
2. Реализована пагинация.
3. Все запросы к API серверные согласно ТЗ.
4. Отрисованы скелетоны, пока контент с сервера не загрузится.
5. Реализован отлов неизвестных маршрутов и страницы с ошибками (`404`, `500`)
6. Сайт адаптивно замобилен вплоть до расширения `320px`
7. Все данные с сервера хранятся в сторе `Redux Toolkit` в `persist` режиме
   > Persist режим используется для того, чтобы реализовать деталку новостей в виду отсутствия соответсвущей ручки. При следущих исходных данных нельзя поделиться деталкой новости с пользователем, который на этом сайте не был (ссылка https://itmo-gladosq.vercel.app/news/article/13300 для него будет недоступна и покажет ошибку), потому что данные о новости получаются в списке новостей.
   Возможное решение: на деталке новостей делать _ещё один запрос_, предварительно определив локаль и фильтровать по квери параметрам. Данное решение считается оверхедом.
9. Отработана логика битых и отсутсвующих изображений, вместо них подставляются плейсхолдеры
10. Реализован функционал полноэкранного просмотра изображения на странице деталки новости
