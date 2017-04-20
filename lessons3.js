<script type="text/javascript">    

// Д3 из методички ко второму уроку:

//1.	Дан код:
//Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;

c = ++a;
alert(c);	// 2 преинкремент (++a) сначала увеличивает значение переменное, а потом возвращает результат в с. В с значение ПОСЛЕ увеличения.

d = b++;
alert(d);	// 1 постинкремент (b++) который сначала возвращает значение переменной, а потом увеличивает её значение в d. В d значение ДО увеличения.

c = (2 + ++a);
alert(c);	// 5  а=2, далее инкременируется и становится 3, 3+2=5

d = (2 + b++);
alert(d);	// 4 b=2, здесь к 2 прибавляется значение b ДО изменения.
alert(a);	// 3 изначально 1, дваджы инкреминирована до 3
alert(b);	// 3 изначально 1, дваджы инкреминирована до 3

//2. Чему будет равен x в примере ниже?
	a = 2;
	var x = 1 + (a *= 2); //x == 5, т.к. (a *= 2) то же самое что (a = a * 2), получаем 1+(2*2)

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.
        var a = parseInt(prompt('Введите положительно или отрицательное число'));
        var b = parseInt(prompt('Введите положительно или отрицательное число'));

        if ((a >= 0) && (b >= 0)) {
            alert(a - b);
        }

        if ((a < 0) && (b < 0)) {
            alert(a * b);
        }

        if (((a < 0) && (b >= 0)) || ((a >= 0) && (b < 0))) {
            alert(a + b);
        }

//4. Присвоить переменной а значение в промежутке [0..15]. 
//С помощью оператора switch организовать вывод чисел от a до 15.

a = 8;
switch (a) {
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
}


// 5.	Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function summ(a, b) {
    return a + b;
}
function divide(a, b) {
    return a / b;
}
function subtr(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

//6.	Реализовать функцию с тремя параметрами:
//function mathOperation(arg1, arg2, operation),
//где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//В зависимости от переданного значения операции выполнить одну из арифметических операций
//(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).


function mathOperation(arg1, arg2, operation) {
    var result = false;
    switch (operation) {
        case 'summ':
            result = summ(arg1, arg2);
            break;
        case 'divide':
            result = divide(arg1, arg2);
            break;
        case 'subtr':
            result = subtr(arg1, arg2);
            break;
        case 'multiply':
            result = multiply(arg1, arg2);
            break;
    }
    return result;
}

</script>