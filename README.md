# Design Patterns Homework

Цей проєкт демонструє реалізацію трьох основних патернів проектування.

## Реалізовані патерни

### 1. Singleton (Одинак)
Забезпечує існування лише одного екземпляра класу `AppConfigService` у всій системі.

### 2. Builder (Будівельник)
Дозволяє створювати складні документи покроково через клас `DocumentBuilder`.

### 3. Prototype (Прототип)
Надає можливість клонування об'єктів `UserProfile` з глибоким копіюванням.

## Структура проєкту

```
src/
├── singleton/
│   ├── AppConfigService.ts
│   └── main.ts
├── builder/
│   ├── DocumentBuilder.ts
│   └── main.ts
└── prototype/
    ├── UserProfilePrototype.ts
    ├── UserProfile.ts
    └── main.ts
```

## Інструкція запуску

```bash
# Запуск демонстрації патерну Singleton
npx ts-node src/singleton/main.ts

# Запуск демонстрації патерну Builder
npx ts-node src/builder/main.ts

# Запуск демонстрації патерну Prototype
npx ts-node src/prototype/main.ts
```