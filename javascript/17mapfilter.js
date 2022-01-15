//es6
> map is use to iterate over the array  of elements
> it always return the same length of output as input array
> it use for apply logic(add,sub,mul,div) or iterate over html

var a = [5,44,55,8,9,23,11,34,6,18,9,29]
a.map((item) => {return item*2})
[10, 88, 110, 16, 18, 46, 22, 68, 12, 36, 18, 58]

var a = [4,5,7]
a.map((data) => {
    return `<p>${data}</p>`
})

['<p>4</p>', '<p>5</p>', '<p>7</p>']

////filter
> filter is use to filter out the data
> it may or may not return the same length of output as input Array
> it only return those value for which condition or output is true


var a = [5,44,55,8,9,23,11,34,6,18,9,29]
a.filter((data) =>  {return data>20})
[44, 55, 23, 34, 29]

a.map((data) =>  {return data>20})
[false, true, true, false, false, true, false, true, false, false, false, true]


var a = [-1,0,1,2,Infinity]
a.filter((data) => {return data*2})
[-1, 1, 2]

var a = [-1,0,1,2]
a.map((data) => {return data*2})
[-2, 0, 2, 4]