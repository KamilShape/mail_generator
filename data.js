const welcomes = ['Hi!', 'Welcome,', 'Godd morning,', 'Dear,'];
const content = ['Hi!', 'Welcome,', 'Godd morning,', 'Dear'];
const regards = ['Good luck!', 'Best Regards!', 'Bye!', 'Goodbye!'];

const welcomes_wrapper = document.querySelector('.welcomes')
const content_wrapper = document.querySelector('.content')
const regards_wrapper = document.querySelector('.regards')

const makeMessages = function(wrapper, array) {
    array.forEach(el => {
        let message = document.createElement('div')
        let addButton = document.createElement('button')
        message.classList.add('messages_message')
        addButton.classList.add('messages_addButton')
        addButton.innerText = 'ADD'
        message.innerText = el
        wrapper.appendChild(message)
        message.appendChild(addButton)
    })
}

makeMessages(welcomes_wrapper, welcomes)
makeMessages(content_wrapper, content)
makeMessages(regards_wrapper, regards)

let messageArea = document.querySelector('.message');

(function() {
    messageArea.value = 'HhahAHAhAhAha'
    messageArea.value += ' HhahAHAhAhAha'
    console.log(messageArea)
    console.log(wrappers)
})();