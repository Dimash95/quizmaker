# QuizMaker

**QuizMaker** — платформа для создания и прохождения онлайн-тестов с динамическими вопросами, поддержкой фильтрации, поиска, рейтингов и аналитики.

## 🚀 Быстрый старт

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/quizmaker.git
cd quizmaker

# Установить зависимости для backend
cd backend
npm install

# Запустить PostgreSQL, создать БД quizmaker (если еще не создана)

# Запустить backend
npm run start:dev

# Открыть новую вкладку, перейти во frontend
cd ../frontend
npm install

# Запустить frontend
npm run dev
```
---

## 🛠️ Технический стек

- **Frontend:** Next.js, React, Tailwind CSS, Axios
- **Backend:** NestJS, TypeORM, PostgreSQL
- **Валидация:** class-validator
- **Менеджмент состояния:** useState/useEffect

---

## 📐 Проектирование и архитектура

- **Модульная структура:** Разделение на модули Quiz, Question, AnswerOption, Result, Tag для простоты поддержки.
- **Чистый REST API:** Все сущности имеют CRUD эндпоинты.
- **Типизация:** Используется TypeScript как на клиенте, так и на сервере.
- **UI/UX:** Адаптивная верстка, минималистичный дизайн, все основные действия доступны с главной страницы и через сайдбар/хедер.

---

## ⚡ Уникальные подходы

- **Динамические тесты:** поддержка любых типов вопросов, включая текстовые с автоматической проверкой на минимальное количество символов.
- **Пользовательский рейтинг:** система подсчета баллов по всем попыткам, вывод топа пользователей.
- **Гибкая фильтрация:** поиск по названию (без учета регистра), фильтрация по тегам, пагинация.
- **Каскадное удаление:** удаление теста также удаляет все связанные вопросы и результаты.

---

## 🤝 Компромиссы

- Не реализована аутентификация — всё пока анонимно.
- Нет файлового хранилища для картинок к тестам и вопросам.
- Не реализован экспорт/импорт тестов.
- Минимум кастомизации для UI — ставка на скорость и простоту.

---

## 🐞 Известные ошибки/ограничения

- Иногда возникает ошибка при миграции БД, если в таблицах есть старые null-значения — рекомендуется вручную очистить таблицы или использовать миграции.
- Нет сложной проверки текстовых ответов (только по длине).
- Возможны баги при одновременном удалении теста и прохождении его пользователем.

---

## 💡 Почему выбран этот стек

- **Next.js + React:** быстрый старт, SSR/SPA, легко масштабировать.
- **NestJS + TypeORM:** удобная модульная структура, мощная работа с БД.
- **PostgreSQL:** продвинутая SQL-БД, поддержка массивов и связей.
- **Tailwind CSS:** быстрое прототипирование без избыточной кастомизации.
