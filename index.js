const list = document.getElementById('list')
const input = document.getElementById('input')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault();

    const li = document.createElement('li')
    li.style.display = 'flex'
    li.style.alignItems = 'center'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const removeButton = document.createElement('button')
    removeButton.textContent = 'x'
    removeButton.style.height = '22px'

    const p = document.createElement('p')
    p.textContent = input.value


    removeButton.addEventListener('click', (e) => {
        e.target.parentElement.remove()

    })
    checkbox.addEventListener('click', (e) => {
        p.style.color = 'gray'
    })

    input.value = ''

    li.append(checkbox)
    li.append(p)
    li.append(removeButton);
    list.append(li);

}); 