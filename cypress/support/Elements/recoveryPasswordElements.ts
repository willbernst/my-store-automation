class recoveryPassowrdElements{
    recoveryPasswordUrl = () => {return '/password-recovery'}
    forgotYourPasswordLink = () => {return '.forgot-password > a'}
    recoveryPasswordScreenTitle = () => {return 'h1'}
    recoveryPasswordCard = () => {return '.forgotten-password'}
    emailFieldForPasswordRecovery = () => {return '#email'}
    sendResetLinkButton = () => {return '.form-group > .hidden-xs-down'}
    backToLoginPageLink = () => {return '.account-link > span'}
    passwordRecoveryLinkSendingSuccessAlert = () => {return '.ps-alert-success'}
    recoveryPageAlert = () => {return '.item > p'}
}

export default new recoveryPassowrdElements()