class SignElements {
    inputEmail = () => {return 'input[type="email"]'}
    inputPassword = () => {return 'input[type="password"]'}
    submitButton = () => {return '#submit-login'}

    textConfirm = () => {return '.account > .hidden-sm-down'}

    altertText= () => {return 'li[class="alert alert-danger"]'}
}

export default new SignElements()