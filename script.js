emailjs.init('Q4xjtELSUhXxf30kr');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    if (window.innerWidth <= 1200) {
        document.querySelector('.full-title').textContent = 'NeuroNur';
    } else {
        document.querySelector('.full-title').textContent = 'NeuroNur Research Initiative';
    }
    updateNavigation();
    handleScrollFade();
});

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        this.document.querySelector('.navbar').classList.add('scrolled');
    } else {
        this.document.querySelector('.navbar').classList.remove('scrolled');
    }
    handleScrollFade(); 
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
    resizeTimeout = setTimeout(function() {
        updateTabContentHeight();
    }, 250);
    updateNavigation();
    if (window.innerWidth <= 1200) {
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

// Add responsive navigation functionality
function updateNavigation() {
    const navItemsContainer = document.querySelector('.nav-items');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (!navItemsContainer || !dropdownMenu || !dropdownToggle) {
        return;
    }
    
    // Show dropdown at 840px and below
    if (window.innerWidth <= 840) {
        // Move all items to dropdown
        const allItems = [...navItemsContainer.children, ...dropdownMenu.children];
        allItems.forEach(item => dropdownMenu.appendChild(item));
        dropdownToggle.style.display = 'block';
    } else {
        // Move all items back to nav-items
        const allItems = [...navItemsContainer.children, ...dropdownMenu.children];
        allItems.forEach(item => navItemsContainer.appendChild(item));
        dropdownToggle.style.display = 'none';
    }
}

// Toggle dropdown menu
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('dropdown-toggle')) {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
    } else {
        // Close dropdown when clicking elsewhere
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    }
});

// Smooth scrolling with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = 100; // Height of your navbar
            const targetPosition = target.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Fade in on scroll
function handleScrollFade() {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = 150; // Trigger when 150px from top
        
        if (sectionTop < window.innerHeight - sectionVisible) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Project Modal Functionality
const projectData = {
    'project-1': {
        title: 'Lorem Ipsum Research Initiative',
        content: `
            <h2>🔬 Lorem Ipsum Research Initiative</h2>
            
            <h3>Project Overview</h3>
            <p>A collaborative research project exploring innovative approaches in neuroscience. This initiative brings together researchers from around the world to advance our understanding of the brain through open science and data sharing.</p>
            
            <h3>Purpose</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h3>Scope</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <ul>
                <li>Human studies and biomarker analysis</li>
                <li>Cross-institutional collaboration</li>
                <li>Open data sharing and transparency</li>
                <li>Global research partnerships</li>
            </ul>
            
            <h3>Timeline</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <h3>Team & Collaboration</h3>
            <p>This project is driven by a diverse team of volunteers, researchers, and students from around the globe. We welcome contributors with backgrounds in neuroscience, data science, clinical research, and more.</p>
            
            <h3>Get Involved</h3>
            <p>Interested in contributing to this project? We're always looking for passionate collaborators. <a href="#contact">Contact us</a> to learn more about how you can get involved.</p>
        `
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    // Get project data
    const project = projectData[projectId];
    
    if (project) {
        // Insert project content
        modalContent.innerHTML = project.content;
        
        // Show modal
        modal.classList.add('show');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    
    // Hide modal
    modal.classList.remove('show');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Event listeners for Learn More buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('learn-more-btn')) {
        const projectId = e.target.getAttribute('data-project-id');
        openProjectModal(projectId);
    }
});

// Event listener for modal close button
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close')) {
        closeProjectModal();
    }
});

// Close modal when clicking on backdrop
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('projectModal');
        if (modal.classList.contains('show')) {
            closeProjectModal();
        }
    }
});