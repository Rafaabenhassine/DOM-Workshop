console.log(`hello`)
/* 1 .to access html elements we should acess the document object: "document." */

/*2. we use methods to select elements :*/

/* a) document.get element By Id() returns the element that match the specific id   */

var h1=document.getElementById(`first`)

h1.innerHTML=`hello world`
console.log(h1)

/* b) document.get element By ClassName() returns 
an html collection containing all elements with that class   */

var p=document.getElementsByClassName(`second`)
console.log(p)

/* c) document.get element By TagName() returns 
an html collection containing all elements with that Tag name   */

var btn=document.getElementsByTagName('buttun')
console.log(btn)

/* d) document.querrySelector() retutns the first element (with its complete tag ) 
that matchs the selector.
we can use any of the css selectors (tag name,Id,class) ("tagName",".class","#id")
*/

var title=document.querySelector(`title`)

title.innerHTML=`DOM workshop` //changing the title from "document" to "DOM workshop"

console.log(title)



/* d) document.querrySelectorAll() retutns a node List of all elements 
that match our selector (any selector too)
*/
var second=document.querySelectorAll(`.second`)

console.log(second)

/* Rq :  method by tag is similar to querry selector all */


/* 3) How to acess the DOM  
Other methods :

a) document.documentElement returns the entire html element
b) document.images returns an html collection of all images
c) document.head returns the head element
d) document.lastModified returns the date and time the document was updated 

*/

document.write(`<div><ul><li>first item</li><li>second item</li><li>third item</li></ul></div>`)

function Alert(){
    alert(`take care`)
}

btn=document.querySelector(`button`).addEventListener(`click`,Alert)