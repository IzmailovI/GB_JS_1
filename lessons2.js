// 1.Найдите ошибки в коде и исправьте его.;
<script>
var sad = 'This is Sparta!!!'; // переменная бывает или var, или let, и не может начинаться с цифры.

var result = true; // без кавычек только строки в кавычах, а это boolean

var entage = 20; // лишний символ %

var header = 'Заголовок новой статьи'; // разные кавычки (двойные/одинарные)

var zipCode = 983456; - // пробел в переменой

var answer = prompt('Введите хоть что-нибудь'); // модальное окно, prompt с маленькой буквы

alert ('Вы точно все ввели?'); //нехватало скобок

var var1 = 25;
var var2 = 'Орехов';
alert ('Вы нашли ' + var1 + ' ' + var2); // не хватало кавычек и +

var var3 = '45'; 
var var4 = 20;
console.log(parseInt(var3)+var4); // приведение строки к числу
</script>

// 2.Определите типы следующих переменных:;
var art = “25 / 5”; // string - простая строка
var same = null; // object - специальное значение «ничто»
var scoop; // undefined - значение не присвоено
var flag = 0; // number
var plat = true; // boolean + логический тип
var devid = 34 / 7; // number
var person = {lastname: Ivan} // object - объект со свойством lastname и значением "Ivan";
var fruits = ['apple']; // object - перемнная-массив
var iceCream = function() { alert('Я люблю мороженое'); } // function - функция

// 3.Найдите длину следующих строк:;

“JavaScript is a high-level, dynamic, untyped, and interpreted programming language”. // 82
“Netscape Communications realized that the Web needed to become more dynamic”. // 75
“JavaScript was realized in ten days”. // 35

// 4. Выведите следующие строки в верхнем регистре. Результат присвойте переменной.

var text1 = "console.log".toUpperCase();
var text2 = "Hello World!".toUpperCase();
var text3 = "I need more code on JavaScript".toUpperCase();

// 5. Переменные из предыдущего задания преобразуйте в нижний регистр.

text1 = text1.toLowerCase();
text2 = text2.toLowerCase();
text3 = text3.toLowerCase();

// 6. Преобразуйте в верхний регистр, только первые буквы.

function capitalize(str) {
	var firstLetter = str.charAt(0);
	return firstLetter.toUpperCase() + str.slice(1);