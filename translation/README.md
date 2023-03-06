# eslint-plugin-custom-rules-rtkit

Плагин с самописным набором правил для статической проверки AST.

## Почемк?

Это плагин eslint, добавляющий самописные правила, использующиесы в нескольких проектах, в которых я участвую. Используйте их в дополнение к вашим правилам, если вы используете аналогичные стандарты для кода.

## Установка

Сначала вам нужно установить [ESLint](https://eslint.org/docs/latest/user-guide/getting-started):

```sh
# npm
npm install eslint --save-dev

# yarn
yarn add eslint --dev
```

Далее установите `eslint-plugin-custom-rules-rtkit`:

```sh
# npm
npm i eslint-plugin-custom-rules-rtkit --save-dev

# yarn
yarn add eslint-plugin-custom-rules-rtkit --dev
```

**Note:** Если вы установили ESLint глобально (используя флаг `-g` в npm или префикс `global` в yarn), вы также должны установить глобально `eslint-plugin-custom-rules-rtkit`.

## Использование

Добавьте `custom-rules-rtkit` в раздел плагинов вашего конфигурационного файла `.eslintrc`. Вы можете опустить префикс `eslint-plugin-`:

```json
{
  "plugins": ["custom-rules-rtkit"]
}
```

Затем настройте правила, которые вы хотите использовать, в разделе правил.

```json
{
  "rules": {
    "custom-rules-rtkit/rule-name": 2
  }
}
```
## Rules
| Name         | Description     
|--------------|-----------
| enum-declaration | `Enum` должно начинаться с заглавной буквы и иметь префикс `E `   
| enum-uppercase-propertes | Свойства `Enum` должны быть написанны в стиле `upper case`.   
| iterface-declaration | Имена `интерфейсов` должны начинаться с заглавной буквы и иметь префикс `I`.
| interface-located | `Интерфейсы` должны быть расположены в файле `interfaces`. 
| styled-components-declaration      | `styled-components` должны начинаться с заглавной буквы и иметь префикс `S`.
| styled-components-located      | `styled-components` должны находиться в файле с именем `styles`.  
| type-declaration      | Имена `типов` должны начинаться с заглавной буквы и иметь префикс `T`.  
| type-located      | `Типы` должен находиться в файле `interfaces`.  