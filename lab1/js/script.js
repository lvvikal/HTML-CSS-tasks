const buttonShowModalWindow = document.querySelectorAll('.button_index1');
const modalWindow = document.querySelector('.modal');
const buttonCloseModalWindow = document.querySelector('.modal__button');
const buttonClose=document.querySelector('.form_el');

for(var i=0;i<buttonShowModalWindow.length;i++)
buttonShowModalWindow[i].addEventListener('click', function(evt){
    evt.preventDefault();
    modalWindow.classList.add('modal--show');
    
buttonClose.addEventListener('click', function(){
        var valueName=document.getElementById('name').value;
        var valueTel=document.getElementById('tel').value;
        if((/^\p{sc=Cyrillic}*$/u.test(valueName))&&(/^\d+$/.test(valueTel))&&(valueName!=null)&&(valueTel!=null))
        {
            modalWindow.classList.remove('modal--show');
        }
        else {
            alert("Некорректные значения");
            console.log(/^\p{sc=Cyrillic}*$/u.test(valueName));
            console.log(/^\d+$/.test(valueTel));
            }
    });
});


    
buttonCloseModalWindow.addEventListener('click', function(){
    modalWindow.classList.remove('modal--show');
});



document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
        modalWindow.classList.remove('modal--show');
    }
  });


  const fullPhoto = document.querySelector('.full-photo');
  const thumbnails = document.querySelectorAll('.gallery__photo-preview');
  
  for(let i = 0; i < thumbnails.length; i++){
      thumbnails[i].addEventListener('click', function(){
          fullPhoto.src = thumbnails[i].src;
      });
  }