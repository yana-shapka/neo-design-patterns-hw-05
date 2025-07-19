# Аналізатор файлової системи

Консольна утиліта для аналізу директорій з генерацією звітів у форматах JSON, CSV та XML. Проєкт демонструє реалізацію патернів проектування **Адаптер** та **Фасад** з ієрархічною структурою фасадів.

## Архітектура

### Патерни проектування

#### 1. Фасад (Facade) - Ієрархічна структура
- **`ReportManager`** - високорівневий фасад для керування всім життєвим циклом
- **`AnalyzerFacade`** - низькорівневий фасад для координації аналізу та форматування

#### 2. Адаптер (Adapter)
- **`ReportAdapter`** - інтерфейс для адаптерів форматів
- **`JsonReportAdapter`** - експорт у JSON
- **`CsvReportAdapter`** - експорт у CSV
- **`XmlReportAdapter`** - експорт у XML

## Структура проєкту

```
├── DirectoryReport.ts      # Інтерфейс звіту
├── DirectoryAnalyzer.ts    # Логіка аналізу файлової системи
├── ReportAdapter.ts        # Інтерфейс адаптера
├── JsonReportAdapter.ts    # Адаптер JSON формату
├── CsvReportAdapter.ts     # Адаптер CSV формату
├── XmlReportAdapter.ts     # Адаптер XML формату
├── AnalyzerFacade.ts       # Низькорівневий фасад
├── ReportManager.ts        # Високорівневий фасад
├── main.ts                 # Точка входу
├── tsconfig.json           # Конфігурація TypeScript
├── package.json            # Залежності проєкту
└── reports/                # Директорія для збереження звітів
```


### Приклади використання

```bash
# Аналіз поточної директорії у форматі JSON
npx ts-node main.ts

# Аналіз поточної директорії у форматі XML
npx ts-node main.ts . xml

# Аналіз конкретної директорії у форматі CSV
npx ts-node main.ts "./src" csv

# Аналіз системної директорії у форматі XML (Windows)
npx ts-node main.ts "C:\\Users\\Username\\Documents" xml

# Аналіз системної директорії у форматі JSON (Linux/Mac)
npx ts-node main.ts "/home/username/projects" json
```

## Приклади звітів

### JSON формат
```json
{
  "files": 54,
  "directories": 5,
  "totalSize": 8469671,
  "extensions": {
    ".jpg": 22,
    ".png": 28,
    ".svg": 1,
    ".jpeg": 2,
    ".PNG": 1
  }
}
```

### CSV формат
```csv
Metric,Value
Total Files,54
Total Directories,5
Total Size (bytes),8469671

Extension,Count
.png,28
.jpg,22
.jpeg,2
.svg,1
.PNG,1
```

### XML формат
```xml
<?xml version="1.0" encoding="UTF-8"?>
<report>
  <files>54</files>
  <directories>5</directories>
  <totalSize>8469671</totalSize>
  <extensions>
    <extension name=".png" count="28"/>
    <extension name=".jpg" count="22"/>
    <extension name=".jpeg" count="2"/>
    <extension name=".svg" count="1"/>
    <extension name=".PNG" count="1"/>
  </extensions>
</report>
```


## Результат роботи

Після успішного виконання у консолі з'явиться повідомлення:
```
Report generated successfully: reports\report-2025-04-14T12-35-48-339Z.xml
```

Звіт буде збережено у папці `reports/` з унікальною назвою, що містить точну дату та час створення.



