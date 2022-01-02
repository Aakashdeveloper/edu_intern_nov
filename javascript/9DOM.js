DOM
> document object modal
document.getElementsByTagName('a')
document.getElementsByClassName('scroll')
document.getElementById('heading')

document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I am from edureka"
'I am from edureka'

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[1]
<a href=​"#youtube" class=​"scroll">​Youtube​</a>​
document.getElementsByClassName('scroll')[1].innerText
'Youtube'
document.getElementsByClassName('scroll')[1].innerText = "Video"
'Video'

document.getElementsByClassName('scroll')[1].style.color = "red"
document.getElementsByClassName('scroll')[1].style.fontWeight = "bold"
'red'
document.getElementsByClassName('scroll')[1].style.visibility="hidden"
'hidden'
document.getElementsByClassName('scroll')[1].style.visibility="visible"
'visible'