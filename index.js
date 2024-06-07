const { Telegraf } = require('telegraf');
const math = require('mathjs');
const keep_alive = require('./keep_alive.js');
const bot = new Telegraf('6841958475:AAGjIEnrsB14Zh6jAHXDbSQWJToVyDOjSho');
bot.start((ctx) => ctx.reply('Привет, я дз бот, созданный Кириллом. Моя задача - дать тебе дз если ты хочешь. чтобы получить дз, введи /dz. Также, ты можешь воспользоваться калькулятором, введя /calc.'))
bot.command('help', (ctx) => ctx.reply('Введи /dz для дз либо /calc для калькулятора'))
bot.command('dz', (ctx) =>{
  // Функция, которая генерирует случайное число от 0 до 1
function rand() {
  return Math.floor(Math.random() * 100 + 1);
}

// Функция, которая отправляет фото
function sendPhoto() {
  // Здесь можно добавить код для выбора и отправки фото
   ctx.replyWithPhoto('https://ltdfoto.ru/image/OQTMbZ');
}

// Функция, которая проверяет, нужно ли отправлять фото
function checkPhoto() {
  // Если случайное число меньше 0.1, то отправляем фото
  if (rand() == 1) { ctx.replyWithPhoto('https://ltdfoto.ru/image/OQTZzf');
    // Иначе ничего не делаем
    console.log("Фото не отправлено");
    } else { sendPhoto(); }
}

// Вызываем функцию проверки
checkPhoto();

});

// Создаем новую команду /calc
bot.command('calc', (ctx) => {
  // Получаем текст сообщения пользователя
  let expression = ctx.message.text;
  // Удаляем из текста команду /calc и пробелы
  expression = expression.replace('/calc', '').trim();
  // Проверяем, что выражение не пустое
  if (expression) {
    try {
      // Вычисляем результат выражения с помощью mathjs
      let result = math.evaluate(expression);
      // Отправляем результат пользователю
      ctx.reply(`Результат: ${result}`);
    } catch (error) {
// Если произошла ошибка, отправляем сообщение об ошибке
      ctx.reply(`Ошибка: ${error.message}`);
    }
  } else {
    // Если выражение пустое, отправляем сообщение о том, как пользоваться калькулятором
    ctx.reply('Чтобы использовать калькулятор, введи /calc и математическое выражение. Например: /calc 2+2');
  }
  });


bot.telegram.setMyCommands([
  {
    command:'start',
    description: 'старт'
  },
  {
    command: 'dz',
    description: 'дз'
  },

  {
    command: 'calc',
    description: 'калькулятор'
  },
  {
    command: 'help',
    description: 'помощь'
}



  
  ]);
bot.launch()

  