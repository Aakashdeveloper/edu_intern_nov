var a = true;
var b = true;
a+b
2
true+false
1

10+true
11
10/false
Infinity

"true"+"true"
'truetrue'
10+"true"
'10true'
"true"-"true"
NaN

"10"+"1"
"101"

var a = "10"
undefined
var b = "2"
undefined
parseInt(a)+parseInt(b)
12
var b = "c"
parseInt(b)
NaN

var a = "10.22"
var b = "9.18"
parseInt(a)+parseInt(b)
19
parseFloat(a)+parseFloat(b)
19.4

var a = "10"
var b = "2"
parseFloat(a)+parseFloat(b)
12

var a = "10"
var b = "2"
parseFloat(a)+parseFloat(b)
12
Number(a)+Number(b)
12
var a = "10.11"
var b = "2.11"
undefined
Number(a)+Number(b)
12.219999999999999

var a = "10delhi"
var b = "delhi10"
var c = "1delhi23"

parseInt(a)
10
parseInt(b)
NaN
parseInt(c)
1

Number(a)
NaN
Number(b)
NaN
Number(c)
NaN