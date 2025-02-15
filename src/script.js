console.log("Hello World!")


document.addEventListener('DOMContentLoaded', function() {
    // Load settings from local storage
    const settings = ['screenReader', 'highContrast', 'textSize', 'keyboardShortcuts', 'reduceAnimations', 'messageRequests', 'readReceipts', 'typingIndicator', 'chatTheme'];
    settings.forEach(setting => {
        const element = document.getElementById(setting);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = localStorage.getItem(setting) === 'true';
            } else if (element.type === 'range' || element.type === 'color') {
                element.value = localStorage.getItem(setting) || element.value;
            }
        }
    });

    // Save settings to local storage on change
    settings.forEach(setting => {
        const element = document.getElementById(setting);
        if (element) {
            element.addEventListener('change', function() {
                if (element.type === 'checkbox') {
                    localStorage.setItem(setting, element.checked);
                } else if (element.type === 'range' || element.type === 'color') {
                    localStorage.setItem(setting, element.value);
                }
            });
        }
    });
});