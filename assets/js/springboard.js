var formGroup = document.getElementsByClassName('form-container');
var button = document.querySelector('.tabs');

button.addEventListener("click", function(){
  for(var i = 0; i < formGroup.length; i++){
    formGroup[i].classList.toggle('hidden');
    formGroup[i].classList.add('animated');
    formGroup[i].classList.add('fadeIn');
  }
});

// function toggleTabs(){
//   for(var i = 0; i < button.length; i++){
//     addEventListener(button[i], 'click', function(){
//       for(var i = 0; i < formGroup.length; i++){
//         formGroup[i].classList.toggle('hidden');
//         formGroup[i].classList.add('animated');
//         formGroup[i].classList.add('fadeIn');
//       }
//     });
//   }
// }
//
// toggleTabs();
