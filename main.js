// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorDisplay = document.querySelector('#modal')
errorDisplay.className = 'hidden'

const hearts = [...document.getElementsByClassName('like-glyph')]
hearts.forEach(heart => {heart.addEventListener('click', e => {
  mimicServerCall()
  .then(()=>like(e))
  .catch(error)
} )})

function like(e){
  switch(e.target.textContent){
    case EMPTY_HEART: {
      e.target.className = 'activated-heart'
      e.target.textContent = FULL_HEART
      break
    }
    case FULL_HEART: {
      e.target.className = ''
      e.target.textContent = EMPTY_HEART
      break
    }
  }
}

function error(e){
setTimeout(()=> errorDisplay.className = 'hidden', 3000)
errorDisplay.className = ''
document.querySelector('#modal-message').textContent = e
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
