/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


var list = document.getElementsByClassName("student-item");

//console.log(list);

//console.log('list.length', list.length);
for(i=0;i<list.length;i++) {
   list[i].hidden = true;
}
//list.hidden = true;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = function(page) {
   var students_per_page = 10;
   var firstStudentIndex = (page * students_per_page) - 10;
   var lastStudentIndex = firstStudentIndex + 9;
   for(i=0;i<list.length;i++) {
      list[i].hidden = true;
   }
   for (var i = 0; i < list.length; i++) {
      //console.log(list[i]);
      if (i >= firstStudentIndex && i <= lastStudentIndex){
         list[i].hidden = false;
      }
   }
}


showPage(1);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks() {
   var numPages = Math.ceil(list.length/10);
   for (i = 1; i <=numPages; i++) {
      var elem = document.createElement('a');
      var linkText = document.createTextNode(i);
      elem.appendChild(linkText);
      elem.addEventListener('click', (function(i) {
         return function(){
           showPage(i);
         }
      })(i))
      document.getElementById("pageLength").appendChild(elem);
   }
};
appendPageLinks();




// Remember to delete the comments that came with this file, and replace them with your own code comments.