# Проект "Игры разума":

### Hexlet tests and linter status:

[![Actions Status](https://github.com/KvDmtr/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/KvDmtr/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/7817f1eeeabcc7658c35/maintainability)](https://codeclimate.com/github/KvDmtr/frontend-project-44/maintainability)

## Описание проекта

"Игры разума": это проект состоящий из 5 консольных игр, для тренировки вашего мозга. Каждая игра задает по 3 вопроса,
на которые нужо дать правильные ответы. Если вы ответили на все вопросы, считается что вы прошли игру.
В случае неправильного ответа игра завершится и вам будет предложено попробовать еще раз.

### Системные требования:

Версия Node.js: v18.12.1

### Установка:

```
npm install @hexlet/code
```

## Игра: "Проверка на четность"

Описание игры:
Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

Запуск игры:

```
make brain-even
```

[![asciicast](https://asciinema.org/a/43SKK1dTWSuhTpyRam6hjQnoi.svg)](https://asciinema.org/a/43SKK1dTWSuhTpyRam6hjQnoi)

## Игра: "Калькулятор"

Описание игры:
пользователю показывается случайное математическое выражение, например 35 + 16,
которое нужно вычислить и записать правильный ответ.

Запуск игры:

```
make brain-calc
```

[![asciicast](https://asciinema.org/a/eIaKReeVtCnbmYG9sOw0Eql1J.svg)](https://asciinema.org/a/eIaKReeVtCnbmYG9sOw0Eql1J)

## Игра: "НОД"

Описание игры:
пользователю показывается два случайных числа, например, 25 50.
Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Запуск игры:

```
make brain-gcd
```

[![asciicast](https://asciinema.org/a/1mODLuOBAoffPYuXHTlsCZIzk.svg)](https://asciinema.org/a/1mODLuOBAoffPYuXHTlsCZIzk)

## Игра: "Арифметическая прогрессия"

Описание игры:
игроку показывается ряд чисел, образующий арифметическую прогрессию,
с замененным любым из чисел двумя точками. Игрок должен определить это число.

Запуск игры:

```
make brain-progression
```

[![asciicast](https://asciinema.org/a/lgjQAjPdhUSYY3SJogzMIinUS.svg)](https://asciinema.org/a/lgjQAjPdhUSYY3SJogzMIinUS)

## Игра: "Простое ли число?"

Описание игры:
игроку показывается случайное число. Если число "простое" ему нужно ответить "yes", если нет - "no".

Запуск игры:

```
make brain-prime
```

[![asciicast](https://asciinema.org/a/Qkpvueuv7UxD3RRTdxpDXTbuW.svg)](https://asciinema.org/a/Qkpvueuv7UxD3RRTdxpDXTbuW)
