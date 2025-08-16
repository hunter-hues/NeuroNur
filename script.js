emailjs.init('Q4xjtELSUhXxf30kr');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    if (window.innerWidth <= 1100) {
        document.querySelector('.full-title').textContent = 'NeuroNur';
    } else {
        document.querySelector('.full-title').textContent = 'NeuroNur Research Initiative';
    }
});

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        this.document.querySelector('.navbar').classList.add('scrolled');
    } else {
        this.document.querySelector('.navbar').classList.remove('scrolled');
    }
});

const tabButtons = document.querySelectorAll('.tab-button');
console.log('Found tab buttons: ', tabButtons);

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const allTabs = document.querySelectorAll('.tab-panel');

        const currentTab = document.querySelector('.tab-panel.active');

        const tabId = this.getAttribute('data-tab');
        const targetTab = document.getElementById(tabId);

        if (currentTab && currentTab !== targetTab) {
            currentTab.classList.remove('active');
            currentTab.classList.add('current');
            setTimeout(() => {
                currentTab.classList.remove('current');
            }, 400); 
        }

        allTabs.forEach(tab => {
            if (tab !== targetTab && tab !== currentTab) {
                tab.classList.remove('active', 'current');
            }
        });

        if (targetTab) {
            targetTab.classList.add('active');
            setTimeout(updateTabContentHeight, 20);
        }
    });
});

const allTabs = document.querySelectorAll('.tab-panel');
allTabs.forEach((tab, index) => {
    if (index === 0) {
        tab.classList.add('active');
    } else {
        tab.classList.remove('active');
    }
});

tabButtons[0].classList.add('active');

const firstActivePanel = document.querySelector('.tab-panel.active');
if (firstActivePanel) {
    const tabContent = document.querySelector('.tab-content');
    tabContent.style.height = firstActivePanel.offsetHeight + 'px';
}

function updateTabContentHeight() {
    const activePanel = document.querySelector('.tab-panel.active');
    const tabContent = document.querySelector('.tab-content');
    if (activePanel && tabContent) {
        tabContent.style.height = activePanel.offsetHeight + 'px';
    }
}

let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateTabContentHeight, 250);
    if (window.innerWidth <= 1100) {
        document.querySelector('.full-title').textContent = 'NeuroNur';
    } else {
        document.querySelector('.full-title').textContent = 'NeuroNur Research Initiative';
    }
});

let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = form.elements.name.value;
    let email = form.elements.email.value;
    let message = form.elements.message.value;

    emailjs.send('service_y40kc5p', 'template_1j8f96j', {
        name: name,
        email: email, 
        message: message
    })
    .then(function(response) {
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
        form.reset();
    })
    .catch(function(error) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    });
});