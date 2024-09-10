function submitData () {
    let firstNmaeDOM = document.querySelector('input[name=firstname]')
    let lastNmaeDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')

    let genderDOM = document.querySelector('input[name=gender]:checked')
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked')

    let descriptionDOM = document.querySelector('textarea[name=description]')

    let interest = ''

    for (let i = 0; i < interestDOMs.length; i++) {
        interest += interestDOMs[i].value 
        if (i != interestDOMs.length - 1) {
          interest += ', '
        }
    }

    let userData = {
        firstname: firstNmaeDOM.value,
        lastname: lastNmaeDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interest: interest
    }

    console.log('submit data', userData)
}