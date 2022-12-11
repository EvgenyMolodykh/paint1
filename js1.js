
var colorCircles = [];/* имя массива, = тут могут быть разные индификаторы массива 12345678910*/
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");

// добавление 5 ти переменных 

colorCircles[6] = document.getElementById("orange");
colorCircles[7] = document.getElementById("blueviolet");
colorCircles[8] = document.getElementById("greenyellow");
colorCircles[9] = document.getElementById("palevioletred");
colorCircles[10] = document.getElementById("DeepPink");



var targetColor="#F00";/*определенный цвет*/
colorCircles[0].style.height = "80px"; /*Инициализация(использование) уже объявленной переменной делается без директивы var*/
colorCircles[0].style.width = "80px";/*увеличивем(увеличил в данном случае в заходим внутрь style и изменяем height) что бы понимать какой цвет мы используем*/
/*почему без li потому что widht тут единственный элемент */

var list=document.getElementById("list"); /*list - список*/
list.addEventListener("click", pickColor);/* в ul запихнули 2 функции клик и pickColor*/
/* вешаем на него обработчик событий на элемент list 2 аргумента 1ый аргумент это который мы хотим поулчать это шелчек
второй функцию кол бэйк по сути это обычная фукция 
эту фукция запускаем не мы а создает ее пк мы только ее назнаечаем в данноом 
случае пк ее будет исполнять когда будет происходить щелчек*/

var canvas = document.getElementById("canvas");//подключаем canvas
var canvasContext = canvas.getContext("2d");// вызываем 2д контекст говорим что мы работаем с 2d элементами
canvas.addEventListener("mousemove", drawOnCanvas); //добавляем 2 функции mousemove

function pickColor(e){
	console.log(e.target.tagName);/*свойство target в js выводит по клику класс исходного элемента*/
/*свойства tagName - Свойство tagName сравнивает элементы это не button и не input это Li*/

	if (e.target.tagName=="LI"){/*если едемент равен li то ныряй в контейнер*/
		if (e.target.id=="red"){/*если id, элемента li равно red то присвой цвет #jhfd*/
			targetColor="#F00" /*переписали цвет который выше*/
		}
		else if (e.target.id=="blue"){ /*target - цель проверяем сразу нескольк условий else if*/
			targetColor="#00F"
