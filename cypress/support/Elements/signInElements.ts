class SignElements {
    signInButton = () => {return '.user-info > a'}
    singInUrl = () => {return '/login?back=my-account'}
    inputEmail = () => {return 'input[type="email"]'}
    inputPassword = () => {return 'input[type="password"]'}
    submitButton = () => {return '#submit-login'}

    textConfirm = () => {return '.account > .hidden-sm-down'}

    altertText= () => {return 'li[class="alert alert-danger"]'}

    createAccountButton = () => {return '.no-account > a'}
}

export default new SignElements()