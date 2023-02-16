class SignElements {
    signInPageTitle = () => {return 'h1'}
    signInPageContent = () => {return '#content'}

    signInButtonPage = () => {return '.user-info > a'}
    singInUrl = () => {return '/login?back=my-account'}
    labelEmail = () => {return ':nth-child(2) > .form-control-label'}
    inputEmail = () => {return 'input[type="email"]'}
    labelPassword = () => {return ':nth-child(3) > .form-control-label'}
    inputPassword = () => {return 'input[type="password"]'}
    showPasswordButton = () => {return '.input-group-btn > .btn'}
    submitButton = () => {return '#submit-login'}
    forgotPasswordLink = () => {return '.forgot-password > a'}

    textConfirm = () => {return '.account > .hidden-sm-down'}

    altertText= () => {return 'li[class="alert alert-danger"]'}

    createAccountLink = () => {return '.no-account > a'}
}

export default new SignElements()