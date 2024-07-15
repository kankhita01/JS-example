// Example 1: change the text
function textChange(){
    document.getElementById('t_c').innerHTML= "Hello World";
}
// Example 2: show the date
function showDate(){
    document.getElementById('t_d').innerHTML = Date();
}
// Example 3: emoji change
function angryEmoji(){
    document.getElementById('emoji_img').src="images/angry-1.webp"
}
function smileEmoji(){
    document.getElementById('emoji_img').src="images/happy.webp"
}

// Example 4: change text color
function colorChange(){
    document.getElementById('t_color').style.color = "red"
}

// Example 5: show/hide text
function tShow(){
    document.getElementById('sh_text').style.display ='block';
}
function tHide(){
    document.getElementById('sh_text').style.display='none'
}

// Example 6: show write
function dWrite(){
    document.write("Welcome to Java Script");
}

// Example 7: show alert
function sAlert(){
    window.alert("Welcome to Java Script examples");
}

// Example 8: show console log
function cLog(){
    console.log("Welcome to web dvelopment");
}

// Example 9: show result using variable
let number1,number2,result;
number1 = 3;
number2 = 5;

result = number1 + number2;

function rAddition(){
    document.getElementById('r_a').innerHTML = result;
}

// Example 10: show text using variable
function vMessage(){
    var data = "Welcome"
    document.getElementById('vm').innerHTML = data.repeat(2);
}

// Example 11: show result using variable
let num1,num2,sub;
num1 = 20;
num2 = 5;

sub = num1 - num2;

function rSubtraction(){
    document.getElementById('r_s').innerHTML = sub;
}

// Example 12: show URL name
function myUrl(){
    document.getElementById('demo').innerHTML = document.URL;
}

// Example 13: show anchor number
function numAncor(){
    document.getElementById('ancor').innerHTML = document.anchors.length;
}

// Example 14: show href of first link
function sLink(){
    document.getElementById('s_l').innerHTML = document.links[0].href;
}

// Example 15: disable button
function disableElement(){
    document.getElementById('btn01').disabled = true;
}

// Example 16: show text
function classExample(){
    document.getElementsByClassName('p')[1].innerHTML = "Hello";
}

// Example 17: count element 
function elementCount(){
    var info = document.getElementsByClassName('p_c');
    alert(info.length);
}

// Example 18: 
function addSn(){
    let text = "clara" + " " + 85;
    
    document.getElementById('add').innerHTML = text;
}

// Example 19: assignment operator
function assignMulti(){
    let n1,n2;
    n1 = 20;
    n2 = 2;
    n1 *= n2;
    
    document.getElementById('asMul_result').innerHTML = n1;
}

// Example 20: assignment operator
function assigndiv(){
    let n1,n2;
    n1 = 20;
    n2 = 2;
    n1 /= n2;
    
    document.getElementById('asdiv_result').innerHTML = n1;
}

// Example 21: assignment operator
function assignadd(){
    let n1,n2;
    n1 = 20;
    n2 = 2;
    n1 += n2;
    
    document.getElementById('asadd_result').innerHTML = n1;
}

// Example 22: assignment operator
function assignsum(){
    let n1,n2;
    n1 = 20;
    n2 = 2;
    n1 -= n2;
    
    document.getElementById('sum_result').innerHTML = n1;
}

// Example 23: comparison operator
function comparisonA(){
    let text1,text2,greater;

    text1 = "A";
    text2 = "B";
    greater = text1 < text2;

    document.getElementById('compare').innerHTML = greater;    
}

// Example 24: Show Text length
function textLength(){
    let Text = "hello, students. Welcome to javascript 50 example practice session.";
    document.getElementById('length').innerHTML = Text.length;
}

// Example 25: Show double quote
function doubleQuote(){
    let paragraph = "Hello everyone. Welcome to \"Full stack web development \" course."
    document.getElementById('d_q').innerHTML = paragraph;
}

// Example 26: show arrays
function showArray(){
    const subjects = ["Math", "chemistry", "Biology", "Physics"];
    document.getElementById('s_array').innerHTML = subjects;
}

// Example 27: show month
function showMonth(){
    const d = new Date();
    document.getElementById('s_month').innerHTML = d.getMonth() + 1; 
}

// Example 28: show hour
function showHours(){
    const d = new Date();
    document.getElementById('s_hour').innerHTML = d.getHours(); 
}

// Example 29: show minitue
function showMinitue(){
    const d = new Date();
    document.getElementById('s_minitue').innerHTML = d.getMinutes(); 
}

// Example 30: show second
function showSecond(){
    const d = new Date();
    document.getElementById('s_sec').innerHTML = d.getSeconds(); 
}

// Example 31: returns the square root
function showRoot(){
    document.getElementById('s_root').innerHTML = Math.sqrt(64);
}

// Example 32: show the minimum number
function showMin(){
    document.getElementById('s_min').innerHTML = Math.min(100,20,50,7,300);
}

// Example 33: show the minimum number
function showMax(){
    document.getElementById('s_max').innerHTML = Math.max(100,20,50,7,300);
}

// Example 34: show the value of boolean
function showBool(){
    document.getElementById('s_bool').innerHTML = Boolean(100>90);
}

// Example 35: show the logical operators
function showLogical(){
    let x = 5;
    document.getElementById('s_logical').innerHTML = (x==8);
}

// Example 36: change the font size
function changeFontsize(){
    document.getElementById('c_font').style.fontSize = "45px";
}

// Example 37: change the font style
function changeFontstyle(){
    document.getElementById('c_style').style.fontStyle = "italic";
}

// Example 38: change the background color
function changeBg(){
    document.getElementById('c_bg').style.backgroundColor = "blue";
}

// Example 39: sort array on ascending order
function sortAscending(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.getElementById('demo1').innerHTML = fruits;

    fruits.sort();
    document.getElementById('demo2').innerHTML = fruits;

}

// Example 40: sort an array in descending order
function sortDescending(){
    const subject = ["Math", "Biology", "Chemistry", "Science"];

    document.getElementById('demo3').innerHTML = subject;

    subject.sort();
    subject.reverse();

    document.getElementById('demo4').innerHTML = subject;
}

// Example 41: convert number to string
function convertString(){
    let x = 123;
    document.getElementById('c_string').innerHTML =
    String(x) + "<br>" +
    String(123) + "<br>" +
    String(100 + 23);
}

// Example 42: return random number
function randomNum(){
    document.getElementById('r_n').innerHTML = Math.random();
}

// Example 43: form submit
function myFunction(){
    document.getElementById('frm1').submit();
}

// Example 44: push elements in array
function arrayPush(){
    const cars = ["Saab", "Volvo", "BMW"];
    cars.push("Audi");

    document.getElementById('a_p').innerHTML = cars;
}

// Example 45: change elements in array
function changeArray(){
    const country = ["Bangladesh", "Japan", "Korea" , "Canada"];
    document.getElementById('before_change').innerHTML = country;

    country[2] = "India";
    document.getElementById('c_array').innerHTML = country;
}

// Example 46: show the ratio of pie
function ratioPie(){
    document.getElementById('r_pie').innerHTML = Math.PI;
}

// Example 47: Creating a map from an array
function createMap(){
    const marks = new Map([
        ["physics", 75],
        ["Math", 87],
        ["Biology", 90]
      ]);
      
      let numb = marks.get("Math");
      document.getElementById("c_map").innerHTML = "Math mark is " + numb;   
}

// Example 48: Creating a map from an array
function searchMap(){
    const progamming = ["Html", "Css", "Javascript", "Php"];
    let position = progamming.indexOf("Php") + 1;document.getElementById("search_map").innerHTML = "Php is found in position " + position;
}

// Example 49: display object
function displayObject(){
    const person = {
        name: "Tom",
        age: 20,
        city: "Japan"
    };
    document.getElementById("d_obj").innerHTML = person.name + ", " + person.age + ", " + person.city;
} 

// Example 50: show type of variable
function showType(){
    document.getElementById("s_type").innerHTML =
    "'kankhita' is " + typeof "John" 
}
