console.log("Hello World!");

document.addEventListener('DOMContentLoaded', function() {
    const settings = ['screenReader', 'highContrast', 'textSize', 'keyboardShortcuts', 'reduceAnimations', 'messageRequests', 'readReceipts', 'typingIndicator', 'chatTheme', 'language'];
    settings.forEach(setting => {
        const element = document.getElementById(setting);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = localStorage.getItem(setting) === 'true';
            } else if (element.type === 'range' || element.type === 'color' || element.type === 'select-one') {
                element.value = localStorage.getItem(setting) || element.value;
            }
        }
    });

    settings.forEach(setting => {
        const element = document.getElementById(setting);
        if (element) {
            element.addEventListener('change', function() {
                if (element.type === 'checkbox') {
                    localStorage.setItem(setting, element.checked);
                } else if (element.type === 'range' || element.type === 'color' || element.type === 'select-one') {
                    localStorage.setItem(setting, element.value);
                }
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const savedTextSize = localStorage.getItem('textSize');
    if (savedTextSize) {
        document.body.style.setProperty('--text-size', savedTextSize + 'px');
        document.getElementById('textSize').value = savedTextSize;
    }

    const settings = ['screenReader', 'highContrast', 'keyboardShortcuts', 'reduceAnimations', 'messageRequests', 'readReceipts', 'typingIndicator', 'chatTheme', 'appLanguage', 'autoTimezone', 'publicProfile', 'showActivity', 'restrictComments'];
    settings.forEach(setting => {
        const savedValue = localStorage.getItem(setting);
        if (savedValue !== null) {
            const element = document.getElementById(setting);
            if (element.type === 'checkbox') {
                element.checked = savedValue === 'true';
            } else if (element.type === 'range' || element.type === 'color') {
                element.value = savedValue;
            } else if (element.tagName === 'SELECT') {
                element.value = savedValue;
            }
        }
    });
});

function updateTextSize() {
    const textSize = document.getElementById('textSize').value;
    document.body.style.setProperty('--text-size', textSize + 'px');
    localStorage.setItem('textSize', textSize);
}

function saveSetting(setting) {
    const element = document.getElementById(setting);
    if (element.type === 'checkbox') {
        localStorage.setItem(setting, element.checked);
    } else {
        localStorage.setItem(setting, element.value);
    }
}