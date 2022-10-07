ShowContact = () => {
    const XHR = new XMLHttpRequest();
    XHR.onload = () => {
        Contacts = JSON.parse(XHR.responseText);
        var list = document.createElement('ul');
    }
}