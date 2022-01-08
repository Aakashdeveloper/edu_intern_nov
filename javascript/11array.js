var a = ['agh','yff','hjvh'] >>> array of string
var b  = [3,56,43,52,12] >>> array of number
var c = [true, false, false, true] >>> array of boolean

// array is a collection of homogeneous as well as heterogeneous data type 

var d = [45,true,'sdfs',"dgsd",34,false,false]

var city = ["Delhi","Mumbai","Pune","London","Amsterdam"]
undefined
typeof(city)
'object'
city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[4]
'Amsterdam'
city[city.length-1]
'Amsterdam'

city.at(2)
'Pune'
city[2]
'Pune'
city[-2]
undefined
city.at(-2)
'Venice'

var city = ["Delhi","Mumbai","Pune","London","Amsterdam"]
city.push("Venice")
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice']
city.push("Dubai")
7
city
(7) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
city.pop()
'Dubai'
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice']
city.pop(2)

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
city.pop()
'Dubai'
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice']
city.pop(2)
'Venice'
city.pop(20000000)
'Amsterdam'

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
city.shift()
'Delhi'
city.shift()
'Mumbai'
city.unshift('Boston')
6
city
(6) ['Boston', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']

push > add the value in the end of the array 
unshift > add the value in the begning of array
pop > remove the last value of array
shift > remove the first value of array


var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
undefined
city.slice(1)
(6) ['Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
city.slice(3)
(4) ['London', 'Amsterdam', 'Venice', 'Dubai']
city
(7) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
city.slice(2,5)
(3) ['Pune', 'London', 'Amsterdam']
city.slice(-1)
['Dubai']
city.slice(-2)
(2) ['Venice', 'Dubai']
city.slice(0,-1)
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice']
city.slice(0,1)
['Delhi']
city.slice(1)
(6) ['Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
city.slice(1,-1)
(5) ['Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice']


city.splice(start,delete count, value)
var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
// remove 2 value on index number 2
city.splice(2,2)
(2) ['Pune', 'London']
city
(5) ['Delhi', 'Mumbai', 'Amsterdam', 'Venice', 'Dubai']

// dont not remove value but on index number add 2 values
city.splice(3,0,'Nice','Helsinki')
city
(7) ['Delhi', 'Mumbai', 'Amsterdam', 'Nice', 'Helsinki', 'Venice', 'Dubai']

// remove 1 value at index number 4 and add 2 values
city.splice(4,1,'Pune','NewYork')
['Helsinki']
city
(8) ['Delhi', 'Mumbai', 'Amsterdam', 'Nice', 'Pune', 'NewYork', 'Venice', 'Dubai']


var a = ['a','b','c',1]
var b = [2,'e','f',5]
a+b
'a,b,c,12,e,f,5'

a.concat(b)
(8) ['a', 'b', 'c', 1, 2, 'e', 'f', 5]

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']
city.indexOf('Delhi')
0
city.indexOf('London')
3
city.indexOf('Helsinki')
-1
city.indexOf('Indore')
-1
city.indexOf('Dubai')
6

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Amsterdam', 'Venice', 'Dubai']

undefined
city.sort()
(7) ['Amsterdam', 'Delhi', 'Dubai', 'London', 'Mumbai', 'Pune', 'Venice']
city.reverse()
(7) ['Venice', 'Pune', 'Mumbai', 'London', 'Dubai', 'Delhi', 'Amsterdam']


var a = 10
var b = [10]
undefined
Array.isArray(a)
false
Array.isArray(b)
true


var city = ['Delhi', 'Mumbai',['Red',['Audi','Bmw','Merc'],'Yellow','Green',"Orange"], 'Venice', 'Dubai']

var city = ['Delhi', 'Mumbai',['Red',['Audi','Bmw','Merc'],'Yellow','Green',"Orange"], 'Venice', 'Dubai']
city[1]
'Mumbai'
city[2]
(5) ['Red', Array(3), 'Yellow', 'Green', 'Orange']
city[2][0]
'Red'
city[2][1]
(3) ['Audi', 'Bmw', 'Merc']
city[2][1][0]
'Audi'
city[3][0]
'V'
city[2][2]
'Yellow'