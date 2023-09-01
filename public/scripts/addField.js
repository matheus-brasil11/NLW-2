document.querySelector('#add-time')

    .addEventListener('click', cloneField)

function cloneField() {
    const NewFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = NewFieldContainer.querySelectorAll('input')

    fields.forEach(field => {
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(NewFieldContainer)
}
