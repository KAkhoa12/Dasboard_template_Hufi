const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('previewImage');
const saveProfile = document.querySelector('.profile--form__submit-btn')
const editProfile = document.querySelector('.profile--form__unsubmit-btn')
const textFields = document.querySelectorAll('.profile--form__text-field input')

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
});

function editProfileInfo(){
      editProfile.onclick = (e) =>{
        console.log(editProfile,saveProfile);
        textFields.forEach(element => {
            element.classList.add('active')
        });
        imageInput.classList.add('active')
        editProfile.classList.add('edit-active')
        saveProfile.classList.add('save-active')
      }
}
function saveProfileInfo(){
    saveProfile.onclick = (e) =>{
      console.log(editProfile,saveProfile);
      textFields.forEach(element => {
        element.classList.remove('active')
        });
        imageInput.classList.remove('active')

      editProfile.classList.remove('edit-active')
      saveProfile.classList.remove('save-active')
    }
}
editProfileInfo();
saveProfileInfo();