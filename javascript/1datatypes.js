Ecma Scripts
//es5
//es6

datatypes
> String
>> Any thing in single quotes, double quotes or backticks
"Hi" 'hey' "10" '101' `hey10` `11`

> Number
11 5454554 88.78676 .8677 7676767.675

> Boolean
true false

///declare variable
var a = "Hii"
var b = 10
var c = true

a
'Hii'
typeof(a)
'string'
typeof(b)
'number'
typeof(c)
'boolean'
var d = "10"
typeof(d)
'string'
var e = 10.11
typeof(e)
'number'

var a = 10
var b = 20

a+b (addition)
30 
b-a
10
a-b
-10
a/b
0.5
a*b
200

a%b
4%2
0
5%3
2

2%4 > 2
3%4 > 3

var a = "Hi"
var b = "JavaScript"

a+b (concat)
'HiJavaScript'
a-b
NaN
a*b
NaN
a/b
NaN
a%b
NaN

var a = "Hi"
var b = 10
a+b
'Hi10'
b+a
'10Hi'

string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"1020"+30
"102030"


10+20+"30"
30+"30"
"3030"

"10"+20+30
"1020"+30
"102030"

10+"20"+30-1
102029

10+20+"30"-1
3029

"10"+20+30-1
102029

"10"-1
9

"Hi"-1
NaN (not a number)

"10"+1
'101'

2-"10"
-8

10/"2"
5

"10a"-1
NaN

10/"2z"
NaN

if both the side of oprator except +(as it is concat)
all operator will work