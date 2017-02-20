var formGroup = document.getElementsByClassName('form-container');
var jobseeker = document.querySelector('.tabs');
var business = document.getElementById('business');


jobseeker.addEventListener("click", function(){
  for(var i = 0; i < formGroup.length; i++){
    formGroup[i].classList.toggle('hidden');
    formGroup[i].classList.add('animated');
    formGroup[i].classList.add('fadeIn');
  }
});

business.addEventListener("click", function(){
  for(var i = 0; i < formGroup.length; i++){
    formGroup[i].classList.toggle('hidden');
    formGroup[i].classList.add('animated');
    formGroup[i].classList.add('fadeIn');
  }
});
