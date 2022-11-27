const welcomes = ['Hi!', 'Welcome...,', 'Godd morning...,', 'Dear...,'];
const content = ['How are you?', "How it's going?", 'What did you do yesterday?', 'I have question to you: ...', "I've been ... last week.", 'All documents in attachments.', 'In response to your message, ...', 'Thanks for your message!'];
const regards = ['Good luck!', 'Best Regards!', 'Bye!', 'Goodbye!'];

const welcomes_wrapper = document.querySelector('.welcomes')
const content_wrapper = document.querySelector('.content')
const regards_wrapper = document.querySelector('.regards')

const makeMessages = function(wrapper, array) {
    array.forEach(el => {
        let message = document.createElement('div')
        let message_text = document.createElement('p')
        let addButton = document.createElement('button')
        message.classList.add('messages_message')
        message_text.classList.add('messages_text')
        addButton.classList.add('messages_addButton')
        addButton.innerText = 'ADD'
        message_text.innerText = el
        message.appendChild(message_text)
        message.appendChild(addButton)
        wrapper.appendChild(message)
    })
}

makeMessages(welcomes_wrapper, welcomes)
makeMessages(content_wrapper, content)
makeMessages(regards_wrapper, regards)

const messageArea = document.querySelector('.message');
const addButtons = document.querySelectorAll('.messages_addButton')

const addText = function(text) {
    messageArea.value += text
}

addButtons.forEach(button => {
    let text = button.previousElementSibling.innerText
    button.addEventListener('click', () => addText(text))
})