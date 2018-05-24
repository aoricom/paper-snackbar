/**
 * PaperSnackbarNotify
 *
 * @summary Mixin for <paper-snackbar>
 * @polymer 
 * @mixinFunction
 */
const PaperSnackbarNotify = superclass => class extends superclass {
    connectedCallback() {
        super.connectedCallback();
    }    

    /**
    * Send a notification to the end user with paper-snackbar
    *
    * @param {string} message The message to display to the user.
    * @param {string} targetTitle The title of the button text.
    * @param {string} targetUrl The target href of the button.
    * @return {void}
    */
    paperSnackbarNotify(message, targetTitle, targetUrl) {
        this.dispatchEvent(new CustomEvent('paper-snackbar-notify', {
            bubbles: true, 
            composed: true,
            detail: { 
                message: message, 
                targetTitle: targetTitle,
                targetUrl: targetUrl
            }
        }));
    }
}

export default PaperSnackbarNotify;