/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   



// Variable student-item is for each student on the list of students.
// Get the elements to work with
var list = document.getElementsByClassName("student-item");


//Hide all elements on the page
for(i=0;i<list.length;i++) {
   list[i].hidden = true;
}



//Shows ten items per page
const showPage = function(page) {
   var students_per_page = 10;
   //calculate start and end index
   var firstStudentIndex = (page * students_per_page) - 10;
   var lastStudentIndex = firstStudentIndex + 9;
   //Hide all elements on the page
   for(i=0;i<list.length;i++) {
      list[i].hidden = true;
   }
   for (var i = 0; i < list.length; i++) {
   //If index i is in range, show element
      if (i >= firstStudentIndex && i <= lastStudentIndex){
         list[i].hidden = false;
      }
   }
}

//Default to page 1
showPage(1);



function appendPageLinks() {
   //Calculate number of pages
   var numPages = Math.ceil(list.length/10);
   var listContainer = document.createElement('ul');
   for (i = 1; i <=numPages; i++) {
      //Create all the elements
      var listItem = document.createElement('li');
      var elem = document.createElement('a');
      var linkText = document.createTextNode(i);
      elem.appendChild(linkText);
      elem.href = '#';
      elem.addEventListener('click', (function(i) {
         return function(){
           showPage(i);
           //Set active class based on the page
           var a = document.getElementById('pageLength').getElementsByTagName('a');
           for(var j=0; j< a.length; j++) {
              if(j == i-1) {
                 a[j].className = 'active';
              } else {
                 a[j].className = '';
              }
           }
         }
      })(i))
      listItem.appendChild(elem);
      listContainer.appendChild(listItem);
   }
   document.getElementById("pageLength").appendChild(listContainer);
};
appendPageLinks();




