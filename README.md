![preview-hw](/preview.jpg)

## Критерії приймання ДЗ
- Створений репозиторій: `goit-react-hw-07-phonebook`
- Під час запуску коду завдання в консолі відсутні помилки та попередження.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом стилів
- Використана бібліотека [`Redux Toolkit`](https://redux-toolkit.js.org/)
- Використаний цей
[шаблон React-проекту](https://github.com/goitacademy/react-homework-template#readme)
як стартова точка програми. [README to React homework template](/README.template.md)

## Завдання «Книга контактів» (Redux Toolkit)
Виконай рефакторинг коду застосунку з попереднього ДЗ [«Книга контактів»](https://github.com/Tasitaforme/goit-react-hw-06-phonebook). Видали код, що відповідає за зберігання та читання контактів з локального сховища, та додай взаємодію з бекендом для зберігання контактів.


### Бекенд
Створи свій персональний бекенд для розробки за допомогою UI-сервісу [**mockapi.io.**](https://mockapi.io/) Зареєструйся використовуючи свій обліковий запис GitHub. Створи ресурс `contacts` щоб отримати endpoint `/contacts`. Використай конструктор ресурсу та опиши об'єкт контакту як на ілюстрації.

<img src="./api.png" alt="Mockapi api" width="450" style="display: block; margin: 0 auto;" />

### Форма стану
Додай у стан Redux обробку індикатора завантаження та помилки. Для цього зміни форму стану.

```js
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
```

### Операції
Використовуй функцію [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk) для оголошення асинхронних генераторів actions та виконання HTTP-запитів. Обробку actions  та зміну даних у стані Redux зроби за допомогою [`createSlice`](https://redux-toolkit.js.org/api/createSlice).

**Оголоси наступні операції:**

- `fetchContacts` - одержання масиву контактів (метод GET) запитом. Базовий тип екшену `"contacts/fetchAll"`.
- `addContact` - додавання контакту (метод POST). Базовий тип екшену `"contacts/addContact"`.
- `deleteContact` - видалення контакту (метод DELETE). Базовий тип екшену `"contacts/deleteContact"`.

# Бібліотеки та імпорти

## Бібліотека Redux Toolkit
[npm install @reduxjs/toolkit](https://redux-toolkit.js.org/introduction/getting-started)

`npm install react-redux`

Якщо не буде використовуватись функція `combineReducers()` то можна 2 в 1:

`npm install @reduxjs/toolkit react-redux`


### Зв'язування store з компонентами React
```js
import { Provider } from 'react-redux';
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
```
### Підписка на store - хук useSelector(selector)
```js
import { useSelector } from "react-redux";

const App = () => {
  // Отримуємо необхідну частину state
  const contacts = useSelector(state => state.contacts);
};
```
### Відправка actions - хук useDispatch()

```js
import { useDispatch } from "react-redux";

const App = () => {
  // Отримуємо посилання на функцію actions
  const dispatch = useDispatch();

  dispatch(deleteСontact(id));
};
```

### Генератор унікальних ідентифікаторів рядків для JS (в Redux Toolkit)

```js
import { nanoid } from '@reduxjs/toolkit';

id: nanoid()
```

## HTTP-запити 
[**npm i axios**](https://axios-http.com/)

`import axios from "axios";`

## Прелоадер
[**npm i  react-loader-spinner**](https://mhnpd.github.io/react-loader-spinner/)

`import { InfinitySpin } from 'react-loader-spinner';`


## Перевірка типів одержуваних пропсів
[**npm i prop-types**](https://www.npmjs.com/package/prop-types)

```js
import PropTypes from 'prop-types'

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
```

## Cповіщення для React [react-hot-toast](https://react-hot-toast.com/docs)
[**npm i react-hot-toast**](https://www.npmjs.com/package/react-hot-toast)

```js
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Here is your toast!', {
        duration: 1500,
      })

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
```

## CSS на JavaScript
[**npm i styled-components**](https://www.npmjs.com/package/styled-components)

```js
import styled from 'styled-components';

export const Button = styled.button`
background-color: black;
transition: background-color 250ms ease-in-out;

&:hover {
    background-color: #007aff;
  }
`;
```
