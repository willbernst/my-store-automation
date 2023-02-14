class recoveryPassowrdElements{
    recoveryPasswordUrl = () => {return '/password-recovery'}
    forgotYourPasswordLink = () => {return '.forgot-password > a'}
    recoveryPasswordScreenTitle = () => {return 'h1'}
    recoveryPasswordCard = () => {return '.forgotten-password'}
    recoveryPasswordCardText = () => {return 'Please enter the email address you used to register. You will receive a temporary link to reset your password'}
    emailFieldForPasswordRecovery = () => {return '#email'}
    sendResetLinkButton = () => {return '.form-group > .hidden-xs-down'}
    backToLoginPageLink = () => {return '.account-link > span'}
    passwordRecoveryLinkSendingSuccessAlert = () => {return '.ps-alert-success'}
    recoveryPageAlert = () => {return '.item > p'}
    successMessage = () => {return `If this email address has been registered in our shop, you will receive a link to reset your password at `}
    invalidEmailMessage = () => {return 'Invalid email address'}
}

export default new recoveryPassowrdElements()