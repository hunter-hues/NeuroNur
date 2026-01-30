// Initialize EmailJS if available
if (typeof emailjs !== 'undefined') {
    emailjs.init('Q4xjtELSUhXxf30kr');
}

// Community Events Data
const communityEvents = [
    {
        id: 'event-1',
        title: 'Upcoming Event',
        date: 'TBD',
        description: '<p>Event details coming soon. Check back for updates on upcoming community activities, journal clubs, guest speakers, and workshops.</p>'
    }
];

// Team Members Data (Placeholder)
const teamMembers = [
    {
        id: 'team-1',
        name: 'Hajar Almutairi',
        role: 'Founder and Director',
        bio: [
            'Hajar Almutairi is the Founder and Director of NeuroNur, a graduate student, and a neuroscientist-in-training whose work sits at the intersection of neuroscience, data science, and engineering. She holds a BSc in Neuroscience with additional training in data analytics and machine learning, and she plans to continue this path toward a PhD in neuroscience. Her research interests include neurodegenerative disorders, biofluid and neural biomarkers, brain imaging, cognitive testing, and predictive-processing frameworks that explore how the brain anticipates and interprets the world.',
            'Hajar founded NeuroNur to help build the kind of research culture she believes in: open, collaborative, and genuinely inclusive. She is particularly passionate about creating spaces where researchers, trainees, and students from diverse backgrounds can co-design studies, share methods, and contribute meaningfully to neuroscience. Through NeuroNur, she aims to lower barriers to participation, encourage transparent and rigorous science, and empower emerging researchers to take an active role in shaping the future of the field. On a personal note, Hajar loves to read and to explore new coffee shops.'
        ],
        image: './teamImages/Tezza-4157.jpeg'
    },
    {
        id: 'team-2',
        name: 'Sandra Oluoch',
        role: 'Founding Scientific Engineer',
        bio: [
            'Sandra is the Founding Scientific Engineer at the NeuroNur Initiative. With a background in machine learning, computer vision, and cell biology, she is currently working on a computational flagship project for the Initiative where she is exploring how different deep learning models perform at instance segmentation of neural cells. She has worked at research institutes in the Seattle area such as the Allen Institute and Institute for Systems Biology. Sandra is passionate about racial and cultural diversity and inclusivity in the research space and believes that the best research is done with people from different backgrounds. Outside of work, Sandra loves the outdoors and can often be found high up in the mountains or deep under the sea.',
        ],
        image: './teamImages/IMG_2799.jpeg'
    },
    {
        id: 'team-3',
        name: 'Dhanya Vettiatil',
        role: 'Scientific Writer',
        bio: [
            'Dhanya Vettiatil is a neuroscientist and stem cell biologist whose work focuses on how DNA damage, mitochondrial function, and immune pathways shape brain development and neurodevelopmental disorders. She earned her PhD in Biochemistry and was awarded a competitive three-year Women Scientist Grant from the Department of Science and Technology (India), supporting her independent research early in her career. Dhanya is currently a postdoctoral researcher at the Albert Einstein College of Medicine, New York, where she studies autism, Pediatric Acute Neuropsychiatric Syndrome (PANS), fetal brain development and neural tissue engineering using stem cell models and multi-omics approaches. She also teaches undergraduate genetics and microbiology and mentors students through the New York Academy of Sciences.',
            'I chose to join this neuroscience community because I deeply believe that science grows stronger when we learn, question, and build together. This initiative means a lot to me because it creates a platform where voices at different career stages can come together, exchange ideas, and inspire each other. As the main scientific writer, I’m excited to help translate complex research into accessible, engaging content that helps people to appreciate the beauty of brain science.',
            'On a personal note, I’m passionate about mentoring young scientists, especially women and first-generation students, and helping them navigate their path with confidence. A fun fact about me: I unwind through Indian classical dance and by exploring new places, both of which recharge my creativity and curiosity.'
        ],
        image: './teamImages/DhanyaVettiatil.jpg'
    },
    {
        id: 'team-4',
        name: 'Hunter Hughes',
        role: 'Web Developer',
        bio: [
            'Hunter Hughes is a full-stack engineer with experience building practical, backend-focused tools and web applications. He is gaining experience, contributing, and creating projects involving API integrations, data-driven features, and straightforward, maintainable system design. Hunter joined NeuroNur to support the team’s goal of creating clear, accessible online resources and to apply his technical skills toward an initiative centered on helping others, while gaining experience after graduating from CSUF.'
        ],
        image: './teamImages/hunter.png'
    },
];

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    updateNavigation();
    handleScrollFade();
    initCommunityEvents();
    initTeamCarousel();
});

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        this.document.querySelector('.navbar').classList.add('scrolled');
    } else {
        this.document.querySelector('.navbar').classList.remove('scrolled');
    }
    handleScrollFade(); 
});

document.addEventListener('DOMContentLoaded', function() {
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

    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
    }

    const firstActivePanel = document.querySelector('.tab-panel.active');
    if (firstActivePanel) {
        const tabContent = document.querySelector('.tab-content');
        tabContent.style.height = firstActivePanel.offsetHeight + 'px';
    }
});

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
});

let form = document.querySelector('form');
if (form) {
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
}

// Add responsive navigation functionality
function updateNavigation() {
    const navItemsContainer = document.querySelector('.nav-items');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (!navItemsContainer || !dropdownMenu || !dropdownToggle) {
        return;
    }
    
    // Desktop vertical navbar (701px and above) - always show all links, no dropdown
    if (window.innerWidth >= 701) {
        // Move all items back to nav-items
        const allItems = [...navItemsContainer.children, ...dropdownMenu.children];
        allItems.forEach(item => navItemsContainer.appendChild(item));
        dropdownToggle.style.display = 'none';
    } 
    // Mobile horizontal navbar (700px and below) - use dropdown at 840px and below
    else if (window.innerWidth <= 840) {
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
    const dropdownToggle = e.target.closest('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownToggle) {
        e.preventDefault();
        e.stopPropagation();
        if (dropdownMenu) {
            dropdownMenu.classList.toggle('show');
        }
        return;
    }
    
    // Handle expanding/collapsing subsection dropdowns on mobile
    if (window.innerWidth <= 840) {
        const navMainLink = e.target.closest('.nav-main-link');
        if (navMainLink) {
            const navItemWithDropdown = navMainLink.closest('.nav-item-with-dropdown');
            if (navItemWithDropdown) {
                const isInDropdownMenu = navItemWithDropdown.closest('.dropdown-menu');
                if (isInDropdownMenu) {
                    e.preventDefault();
                    e.stopPropagation();
                    navItemWithDropdown.classList.toggle('expanded');
                    return;
                }
            }
        }
    }
    
    // Close dropdown when clicking elsewhere (but not on links inside dropdown)
    const clickedInDropdown = e.target.closest('.dropdown-menu');
    const clickedOnToggle = e.target.closest('.dropdown-toggle');
    
    if (!clickedInDropdown && !clickedOnToggle && dropdownMenu) {
        dropdownMenu.classList.remove('show');
    }
});

// Smooth scrolling for same-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (e.defaultPrevented) return;
        
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
            const navbarHeight = 100;
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
        // Regular sections - use normal scroll detection
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
        title: 'Instance Segmentation for Neurological Disease Research',
        images: [
            {
                path: './projectImages/image-1.png',
                label: 'Astrocytes',
                description: 'Results from running the Mask R-CNN model on astrocytes. Shows raw image (left), ground truth (center), and Mask R-CNN prediction (right).'
            },
            {
                path: './projectImages/image-2.png',
                label: 'Neuroglioblastoma',
                description: 'Results from running the Mask R-CNN model on neuroglioblastoma. Shows raw image (left), ground truth (center), and Mask R-CNN prediction (right).'
            },
            {
                path: './projectImages/image-3.png',
                label: 'Neurons',
                description: 'Results from running the Mask R-CNN model on neurons. Shows raw image (left), ground truth (center), and Mask R-CNN prediction (right).'
            }
        ],
        content: `
            <h2>🔬Instance Segmentation for Neurological Disease Research</h2>
            
            <p>Neurological diseases such as Alzheimer's and Lewy Body Dementia are still poorly understood on a cellular level. Instance segmentation is a powerful tool in object detection and tracking of individual cells. Light microscopy is a non-invasive and easy way to study cells and instance segmentation is an effective way to collect quantifiable information that can help with disease detection and treatment. Over the years, there have been different kinds of deep learning models created to improve the quality of these segmentations, but each have their advantages and disadvantages.</p>
            
            <p>The goal is to explore and compare how well different models train on brightfield images of neurons, astrocytes and the neuroblastoma cell line, SH-SY5Y. Three different deep learning neural networks will be used and the accuracy of the resulting predictions will be compared using the Dice Score, Average Precision and Recall. The data used for training is the Satorius Dataset and contains 484 images. The ground truth labels are run-length encoding (RLE) annotations. Models of interest: Mask R-CNN, U-Net CNN and Mask2Transformer.</p>
        `
    },
    'project-2': {
        title: 'Neural Mechanisms of Predictive Processing',
        images: [
            {
                path: './projectImages/NeuralMechanisms.png',
                label: 'Figure 10',
                description: 'Figure 10: Stimulus design. Our experimental design includes four different session contexts (standard mismatch, sensorimotor mismatch, sequence mismatch, and temporal mismatch) with five types of oddballs: drifting grating halt, two alternative drifting orientations, an omission, and temporal jittered oddballs.'
            }
        ],
        content: `
            <h2>🔬Neural Mechanisms of Predictive Processing</h2>
            
            <h3>Rationale</h3>
            <p>Predictive processing is a core framework for understanding perception and learning. The brain continuously forms expectations about incoming sensory input and updates internal models when reality deviates from those expectations. However, mismatch is not a single phenomenon. Violations can occur in what happens (content), when it happens (timing), how it unfolds (sequence), or whether it matches our actions (sensorimotor). This project addresses a central gap in the field. Are mismatch responses driven by one common neural computation, or by multiple specialized mechanisms?<p>
            <h3>Main research questions</h3>
            <ul>
                <li>Do different mismatch stimulus types recruit shared neural mechanisms, or distinct context-specific circuits?</li>
                <li>How do excitatory and inhibitory neurons differentially contribute to prediction error signals across mismatch contexts?</li>
                <li>Which computational primitives are most central to predictive processing, including stimulus adaptation, dendritic computation, excitation and inhibition balance, and hierarchical processing?</li>
                <li>How do prediction error mechanisms compare across species, and which signatures are conserved versus divergent?</li>
            </ul>
            <h3>Experimental approaches</h3> 
            <p>The project uses multiple session contexts to evoke different forms of mismatch and prediction error, allowing comparisons across paradigms:</p>
            <ul>
                <li>Standard mismatch: unexpected changes in a sensory stream relative to a learned or repeated pattern</li>
                <li>Sensorimotor mismatch: violations between expected sensory consequences of an action and actual sensory input</li>
                <li>Sequence mismatch: violations of an expected order of stimuli within a learned sequence</li>
                <li>Temporal mismatch: violations in expected timing, including omissions or temporal jitter events</li>
            </ul>
            <h3> Reference:</h3>
            <a target="_blank" href='https://arxiv.org/abs/2504.09614'>Neural mechanisms of predictive processing: a collaborative community experiment through the OpenScope program</a>
        `
    },
    'project-3': {
        title: '🔬Biofluid Biomarkers for Neurodegeneration',
        images: [
            {
                path: './projectImages/Biomarkers.jpg',
                label: 'Example Figure',
                description: 'Summary of Alzheimer’s disease (AD) related biomarkers across three biofluids: saliva (blue), blood (orange), and cerebrospinal fluid (CSF) (green). Arrows indicate the direction of change for each biomarker in AD (up = increased, down = decreased), highlighting how the disease affects multiple biological pathways across different fluids. Created in BioRender. Abiad, E. (2024) <a href=\'https://BioRender.com/z08y571\' target=\'_blank\'>https://BioRender.com/z08y571</a> '
            }
        ],
        content: `
            <h2>🔬Biofluid Biomarkers for Neurodegeneration</h2>
            
            <h3>Scientific Rationale</h3>
            <p>
                Neurodegenerative disorders often begin long before clear clinical symptoms appear. During this early window, underlying biological changes may already be measurable. Biofluid biomarkers offer a practical way to capture these changes using accessible samples, providing a more objective view of disease biology and progression.

                These biomarkers can reflect key processes such as neurodegeneration, neuroinflammation, synaptic dysfunction, protein aggregation, and vascular or metabolic changes. However, findings can vary across studies due to differences in cohorts, disease stage, assay platforms, and sample handling. A rigorous synthesis of the literature helps clarify:

                <ul>
                    <li>Which biomarkers show the most consistent associations with disease</li>

                    <li>Which biofluids and assays are most feasible and scalable for real-world use</li>

                    <li>Where evidence remains limited or conflicting, including gaps driven by small samples or methodological variation</li>
                </ul>

                By organizing the biomarker landscape across fluids and biological pathways, we aim to improve interpretability and help guide future research priorities and clinical applications.
            </p>
        `
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const project = projectData[projectId];
    
    if (!project) return;
    
    // Build image carousel HTML if images exist
    let imageCarouselHTML = '';
    if (project.images && project.images.length > 0) {
        imageCarouselHTML = `
            <div class="modal-image-carousel">
                <h3>Project Images</h3>
                <div class="image-carousel-tabs">
                    ${project.images.map((img, index) => 
                        `<button class="image-tab-button ${index === 0 ? 'active' : ''}" data-image-index="${index}">${img.label}</button>`
                    ).join('')}
                </div>
                <div class="image-carousel-content">
                    ${project.images.map((img, index) => 
                        `<div class="image-carousel-panel ${index === 0 ? 'active' : ''}" data-image-index="${index}">
                            <img src="${img.path}" alt="${img.label}">
                            <p class="image-description">${img.description}</p>
                        </div>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    // Insert project content with image carousel FIRST
    modalContent.innerHTML = project.content + imageCarouselHTML;
    
    // THEN set up event listeners (now that buttons exist in DOM)
    if (project.images && project.images.length > 0) {
        setupImageCarousel();
    }
    
    // Show modal and prevent body scroll
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function setupImageCarousel() {
    const imageTabButtons = document.querySelectorAll('.image-tab-button');
    const imagePanels = document.querySelectorAll('.image-carousel-panel');
    
    imageTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imageIndex = this.getAttribute('data-image-index');
            
            // Remove active class from all buttons and panels
            imageTabButtons.forEach(btn => btn.classList.remove('active'));
            imagePanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            document.querySelector(`.image-carousel-panel[data-image-index="${imageIndex}"]`).classList.add('active');
        });
    });
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    
    // Hide modal
    modal.classList.remove('show');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Open team member bio modal
function openBioModal(memberId) {
    const modal = document.getElementById('bioModal');
    const modalContent = document.getElementById('bioModalContent');
    
    // Find team member
    const member = teamMembers.find(m => m.id === memberId);
    
    if (member) {
        // Build bio HTML
        const bioArray = Array.isArray(member.bio) ? member.bio : [member.bio];
        const bioHTML = bioArray.map(paragraph => `<p>${paragraph}</p>`).join('');
        
        modalContent.innerHTML = `
            <div class="bio-modal-header">
                <img src="${member.image}" alt="${member.name}" class="bio-modal-image">
                <div class="bio-modal-title">
                    <h2>${member.name}</h2>
                    <p class="bio-modal-role">${member.role}</p>
                </div>
            </div>
            <div class="bio-modal-body">
                ${bioHTML}
            </div>
        `;
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Close bio modal
function closeBioModal() {
    const modal = document.getElementById('bioModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
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

// Handle mobile About and Work section images - REMOVED (no longer needed for multi-page structure)
function handleMobileAboutImages_REMOVED() {
    const aboutSubsections = document.querySelectorAll('.subsection[data-section="about"]');
    const workSubsections = document.querySelectorAll('.subsection[data-section="work"]');
    const allSubsections = [...aboutSubsections, ...workSubsections];
    
    if (allSubsections.length === 0) {
        return;
    }
    
    const isMobile = window.innerWidth <= 700;
    const isTabletOrMobile = window.innerWidth <= 900; // 900px and below should use CSS media query
    
    // Process About subsections
    aboutSubsections.forEach((subsection, index) => {
        const mediaBlock = subsection.querySelector('.media-block');
        const media = subsection.querySelector('.media');
        const img = media ? media.querySelector('img') : null;
        const content = subsection.querySelector('.content');
        
        if (!mediaBlock || !media) {
            return;
        }
        
        if (isMobile) {
            if (index === 0) {
                // First subsection: show image, allow mobile layout (single column, rotated)
                // Only ensure visibility - let CSS handle the layout and rotation
                media.style.setProperty('display', 'flex', 'important');
                media.style.setProperty('visibility', 'visible', 'important');
                media.style.setProperty('opacity', '1', 'important');
                
                if (img) {
                    img.style.setProperty('display', 'block', 'important');
                    img.style.setProperty('visibility', 'visible', 'important');
                    img.style.setProperty('opacity', '1', 'important');
                    // Don't override transform - let CSS rotate it
                    // Don't override max-width - let CSS set it to 60%
                }
                
                // Don't override grid-template-columns - let CSS make it single column (1fr)
                mediaBlock.style.setProperty('display', 'grid', 'important');
                mediaBlock.style.setProperty('visibility', 'visible', 'important');
                // Remove any inline grid-template-columns to let CSS handle it
                mediaBlock.style.removeProperty('grid-template-columns');
            } else {
                // Subsequent subsections: hide image, use single column
                media.style.setProperty('display', 'none', 'important');
                mediaBlock.style.setProperty('grid-template-columns', '1fr', 'important');
                mediaBlock.style.setProperty('display', 'grid', 'important');
            }
        } else if (isTabletOrMobile) {
            // Between 701px and 900px: merge into one section, let CSS media query handle layout (single column)
            // Hide images in subsections 2 and 3, only show first subsection's image
            if (index === 0) {
                media.style.setProperty('display', 'flex', 'important');
                media.style.setProperty('visibility', 'visible', 'important');
                media.style.setProperty('opacity', '1', 'important');
                
                if (img) {
                    img.style.setProperty('display', 'block', 'important');
                    img.style.setProperty('visibility', 'visible', 'important');
                    img.style.setProperty('opacity', '1', 'important');
                }
                
                // Remove inline grid-template-columns to let CSS 900px media query handle it
                mediaBlock.style.removeProperty('grid-template-columns');
                mediaBlock.style.setProperty('display', 'grid', 'important');
                mediaBlock.style.setProperty('visibility', 'visible', 'important');
            } else {
                // Subsequent subsections: hide image, merge into continuous section
                media.style.setProperty('display', 'none', 'important');
                mediaBlock.style.setProperty('grid-template-columns', '1fr', 'important');
                mediaBlock.style.setProperty('display', 'grid', 'important');
            }
        } else {
            // Desktop (> 900px): show all images normally with two-column layout
            media.style.setProperty('display', 'flex', 'important');
            media.style.setProperty('visibility', 'visible', 'important');
            media.style.setProperty('opacity', '1', 'important');
            
            if (img) {
                img.style.setProperty('display', 'block', 'important');
                img.style.setProperty('visibility', 'visible', 'important');
                img.style.setProperty('opacity', '1', 'important');
            }
            
            mediaBlock.style.setProperty('grid-template-columns', '1.1fr 1fr', 'important');
            mediaBlock.style.setProperty('display', 'grid', 'important');
        }
    });
    
    // Process Work subsections
    workSubsections.forEach((subsection, index) => {
        const mediaBlock = subsection.querySelector('.media-block');
        const media = subsection.querySelector('.media');
        const img = media ? media.querySelector('img') : null;
        const content = subsection.querySelector('.content');
        
        // Work-2 doesn't have a media-block, so skip if not found
        if (!mediaBlock || !media) {
            return;
        }
        
        if (isMobile) {
            if (index === 0) {
                // First subsection: show image, allow mobile layout (single column, rotated)
                // Only ensure visibility - let CSS handle the layout and rotation
                media.style.setProperty('display', 'flex', 'important');
                media.style.setProperty('visibility', 'visible', 'important');
                media.style.setProperty('opacity', '1', 'important');
                
                if (img) {
                    img.style.setProperty('display', 'block', 'important');
                    img.style.setProperty('visibility', 'visible', 'important');
                    img.style.setProperty('opacity', '1', 'important');
                    // Don't override transform - let CSS rotate it
                    // Don't override max-width - let CSS set it to 60%
                }
                
                // Don't override grid-template-columns - let CSS make it single column (1fr)
                mediaBlock.style.setProperty('display', 'grid', 'important');
                mediaBlock.style.setProperty('visibility', 'visible', 'important');
                // Remove any inline grid-template-columns to let CSS handle it
                mediaBlock.style.removeProperty('grid-template-columns');
            } else {
                // Subsequent subsections: hide image, use single column
                media.style.setProperty('display', 'none', 'important');
                mediaBlock.style.setProperty('grid-template-columns', '1fr', 'important');
                mediaBlock.style.setProperty('display', 'grid', 'important');
            }
        } else if (isTabletOrMobile) {
            // Between 701px and 900px: merge into one section, let CSS media query handle layout (single column)
            // Hide images in subsections 2+, only show first subsection's image
            if (index === 0) {
                media.style.setProperty('display', 'flex', 'important');
                media.style.setProperty('visibility', 'visible', 'important');
                media.style.setProperty('opacity', '1', 'important');
                
                if (img) {
                    img.style.setProperty('display', 'block', 'important');
                    img.style.setProperty('visibility', 'visible', 'important');
                    img.style.setProperty('opacity', '1', 'important');
                }
                
                // Remove inline grid-template-columns to let CSS 900px media query handle it
                mediaBlock.style.removeProperty('grid-template-columns');
                mediaBlock.style.setProperty('display', 'grid', 'important');
                mediaBlock.style.setProperty('visibility', 'visible', 'important');
            } else {
                // Subsequent subsections: hide image, merge into continuous section
                media.style.setProperty('display', 'none', 'important');
                mediaBlock.style.setProperty('grid-template-columns', '1fr', 'important');
                mediaBlock.style.setProperty('display', 'grid', 'important');
            }
        } else {
            // Desktop (> 900px): show all images normally with two-column layout
            media.style.setProperty('display', 'flex', 'important');
            media.style.setProperty('visibility', 'visible', 'important');
            media.style.setProperty('opacity', '1', 'important');
            
            if (img) {
                img.style.setProperty('display', 'block', 'important');
                img.style.setProperty('visibility', 'visible', 'important');
                img.style.setProperty('opacity', '1', 'important');
            }
            
            mediaBlock.style.setProperty('grid-template-columns', '1.1fr 1fr', 'important');
            mediaBlock.style.setProperty('display', 'grid', 'important');
        }
    });
}

// Subsection Carousel Functionality - REMOVED (no longer needed for multi-page structure)
function initSubsectionCarousel_REMOVED() {
    const carousel = document.getElementById('subsection-carousel');
    const carouselLeft = document.getElementById('carousel-left');
    const carouselRight = document.getElementById('carousel-right');
    const carouselUp = document.getElementById('carousel-up');
    const carouselDown = document.getElementById('carousel-down');
    const sectionNameEl = document.getElementById('carousel-section-name');
    const subsectionNameEl = document.getElementById('carousel-subsection-name');
    
    if (!carousel || !carouselLeft || !carouselRight || !carouselUp || !carouselDown || !sectionNameEl || !subsectionNameEl) {
        return;
    }
    
    // Show/hide carousel based on screen size
    function updateCarouselVisibility() {
        if (window.innerWidth > 900) {
            carousel.style.display = 'flex';
            updateCarouselContent();
        } else {
            carousel.style.display = 'none';
        }
    }
    
    // Get currently visible section
    function getCurrentSection() {
        // First check for subsections in horizontal containers (desktop)
        if (window.innerWidth > 900) {
            const containers = document.querySelectorAll('.subsection-container');
            const viewportMiddle = window.innerHeight / 2;
            
            // Find the container that's most centered vertically
            let bestContainer = null;
            let bestContainerDistance = Infinity;
            
            for (let container of containers) {
                const containerRect = container.getBoundingClientRect();
                // Check if container is substantially in viewport (at least 50% visible)
                // A container is considered "in viewport" if its center is within the viewport
                const containerCenter = containerRect.top + (containerRect.height / 2);
                const isInViewport = containerCenter >= 0 && containerCenter <= window.innerHeight;
                
                if (!isInViewport) {
                    continue; // Container not in viewport
                }
                
                // Calculate how centered this container is vertically
                const distanceFromViewportCenter = Math.abs(viewportMiddle - containerCenter);
                
                // If this container is more centered, it's a better match
                if (distanceFromViewportCenter < bestContainerDistance) {
                    bestContainerDistance = distanceFromViewportCenter;
                    bestContainer = container;
                }
            }
            
            // If we found the best container, get the most centered subsection from it
            if (bestContainer) {
                const wrapper = bestContainer.querySelector('.subsection-wrapper');
                if (wrapper) {
                    const wrapperWidth = wrapper.offsetWidth;
                    const scrollLeft = wrapper.scrollLeft;
                    
                    const subsections = wrapper.querySelectorAll('.subsection');
                    // Find the subsection that's most centered horizontally
                    let bestMatch = null;
                    let bestDistance = Infinity;
                    
                    for (let subsection of subsections) {
                        const subsectionIndex = Array.from(subsections).indexOf(subsection);
                        const subsectionLeft = subsectionIndex * wrapperWidth;
                        const subsectionCenter = subsectionLeft + (wrapperWidth / 2);
                        const currentCenter = scrollLeft + (wrapperWidth / 2);
                        const distance = Math.abs(currentCenter - subsectionCenter);
                        
                        // If this subsection is visible and closer to center, it's a better match
                        if (distance < bestDistance && distance < wrapperWidth * 0.6) {
                            bestDistance = distance;
                            bestMatch = subsection;
                        }
                    }
                    
                    if (bestMatch) {
                        return bestMatch;
                    }
                }
            }
        }
        
        // Fallback: check all regular sections (exclude subsections that are in containers)
        const sections = document.querySelectorAll('.content-section');
        const viewportMiddle = window.innerHeight / 2;
        
        // Find the most centered regular section (not a subsection in a container)
        let bestSection = null;
        let bestDistance = Infinity;
        
        for (let section of sections) {
            // Skip subsections that are inside subsection containers
            if (section.closest('.subsection-container')) {
                continue;
            }
            
            const rect = section.getBoundingClientRect();
            // Check if section is in viewport
            if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
                // Calculate how centered this section is
                const sectionCenter = rect.top + (rect.height / 2);
                const distanceFromViewportCenter = Math.abs(viewportMiddle - sectionCenter);
                
                // If this section is more centered, it's a better match
                if (distanceFromViewportCenter < bestDistance) {
                    bestDistance = distanceFromViewportCenter;
                    bestSection = section;
                }
            }
        }
        
        return bestSection;
    }
    
    // Get all main sections (subsection containers or regular sections)
    function getAllMainSections() {
        const mainSections = [];
        
        // Get all subsection containers (these are the main sections for groups with subsections)
        const containers = document.querySelectorAll('.subsection-container');
        containers.forEach(container => {
            const firstSubsection = container.querySelector('.subsection:first-of-type');
            if (firstSubsection) {
                mainSections.push(firstSubsection);
            }
        });
        
        // Get all regular sections (no subsections)
        const regularSections = document.querySelectorAll('.content-section:not(.subsection)');
        regularSections.forEach(section => {
            // Make sure it's not inside a subsection container
            if (!section.closest('.subsection-container')) {
                mainSections.push(section);
            }
        });
        
        // Sort by document order
        return mainSections.sort((a, b) => {
            const position = a.compareDocumentPosition(b);
            if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
                return -1;
            }
            if (position & Node.DOCUMENT_POSITION_PRECEDING) {
                return 1;
            }
            return 0;
        });
    }
    
    // Get the main section that contains the current section
    function getMainSectionForSection(section) {
        const sectionGroup = section.getAttribute('data-section');
        
        if (sectionGroup) {
            // This is a subsection - find the container and return the first subsection
            const container = section.closest('.subsection-container');
            if (container) {
                const firstSubsection = container.querySelector('.subsection:first-of-type');
                return firstSubsection || section;
            }
            // Fallback: find first subsection of this group
            const firstSubsection = document.querySelector(`.subsection[data-section="${sectionGroup}"]:first-of-type`);
            return firstSubsection || section;
        } else {
            // This is already a main section
            return section;
        }
    }
    
    // Get previous main section
    function getPreviousMainSection(currentSection) {
        const mainSections = getAllMainSections();
        const currentMainSection = getMainSectionForSection(currentSection);
        const currentIndex = mainSections.indexOf(currentMainSection);
        
        if (currentIndex > 0) {
            return mainSections[currentIndex - 1];
        }
        return null;
    }
    
    // Get next main section
    function getNextMainSection(currentSection) {
        const mainSections = getAllMainSections();
        const currentMainSection = getMainSectionForSection(currentSection);
        const currentIndex = mainSections.indexOf(currentMainSection);
        
        if (currentIndex < mainSections.length - 1) {
            return mainSections[currentIndex + 1];
        }
        return null;
    }
    
    // Update carousel content based on current section
    function updateCarouselContent() {
        const currentSection = getCurrentSection();
        if (!currentSection) {
            carousel.style.opacity = '0';
            setTimeout(() => {
                carousel.style.display = 'none';
            }, 300);
            return;
        }
        
        const sectionId = currentSection.id;
        const isSubsection = currentSection.classList.contains('subsection');
        const sectionGroup = currentSection.getAttribute('data-section');
        
        // Fade out text before changing
        sectionNameEl.style.opacity = '0';
        sectionNameEl.style.transform = 'translateY(-5px)';
        subsectionNameEl.style.opacity = '0';
        subsectionNameEl.style.transform = 'translateY(-5px)';
        
        setTimeout(() => {
            // Check if this section has subsections
            if (isSubsection && sectionGroup && subsectionData[sectionGroup]) {
                const sectionInfo = subsectionData[sectionGroup];
                const currentIndex = sectionInfo.subsections.findIndex(sub => sub.id === sectionId);
                
                // Debug logging (can be removed later)
                if (currentIndex === -1) {
                    console.warn('Subsection not found in data:', {
                        sectionId,
                        sectionGroup,
                        availableIds: sectionInfo.subsections.map(s => s.id)
                    });
                }
                
                if (currentIndex !== -1) {
                    // Show carousel with subsection info
                    sectionNameEl.textContent = sectionInfo.name;
                    subsectionNameEl.textContent = sectionInfo.subsections[currentIndex].name;
                    
                    // Enable/disable horizontal arrows
                    carouselLeft.disabled = currentIndex === 0;
                    carouselRight.disabled = currentIndex === sectionInfo.subsections.length - 1;
                    
                    // Enable/disable vertical arrows (navigate between main sections)
                    const prevMainSection = getPreviousMainSection(currentSection);
                    const nextMainSection = getNextMainSection(currentSection);
                    carouselUp.disabled = !prevMainSection;
                    carouselDown.disabled = !nextMainSection;
                    
                    // Show all arrows with transition
                    if (carouselLeft.style.display === 'none') {
                        carouselLeft.style.display = 'flex';
                        setTimeout(() => {
                            carouselLeft.style.opacity = '1';
                        }, 10);
                    }
                    if (carouselRight.style.display === 'none') {
                        carouselRight.style.display = 'flex';
                        setTimeout(() => {
                            carouselRight.style.opacity = '1';
                        }, 10);
                    }
                    carouselUp.style.display = 'flex';
                    carouselDown.style.display = 'flex';
                    
                    carousel.style.display = 'flex';
                    carousel.style.opacity = '1';
                    
                    // Fade in text
                    setTimeout(() => {
                        sectionNameEl.style.opacity = '1';
                        sectionNameEl.style.transform = 'translateY(0)';
                        subsectionNameEl.style.opacity = '1';
                        subsectionNameEl.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    carousel.style.display = 'none';
                }
            } else {
                // No subsections - show only section name, hide arrows
                const sectionTitle = currentSection.querySelector('h2');
                if (sectionTitle) {
                    sectionNameEl.textContent = sectionTitle.textContent || 'Section';
                    subsectionNameEl.textContent = '';
                    
                    // Enable/disable vertical arrows (navigate between main sections)
                    const prevMainSection = getPreviousMainSection(currentSection);
                    const nextMainSection = getNextMainSection(currentSection);
                    carouselUp.disabled = !prevMainSection;
                    carouselDown.disabled = !nextMainSection;
                    
                    // Show vertical arrows, hide horizontal arrows
                    carouselUp.style.display = 'flex';
                    carouselDown.style.display = 'flex';
                    
                    // Hide horizontal arrows with transition
                    carouselLeft.style.opacity = '0';
                    carouselRight.style.opacity = '0';
                    setTimeout(() => {
                        carouselLeft.style.display = 'none';
                        carouselRight.style.display = 'none';
                    }, 300);
                    
                    carousel.style.display = 'flex';
                    carousel.style.opacity = '1';
                    
                    // Fade in text
                    setTimeout(() => {
                        sectionNameEl.style.opacity = '1';
                        sectionNameEl.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    carousel.style.display = 'none';
                }
            }
        }, 150);
    }
    
    // Helper function to scroll subsection horizontally
    function scrollSubsectionHorizontally(targetSubsectionId) {
        if (window.innerWidth <= 900) {
            // Mobile: use normal scrollIntoView
            const targetElement = document.getElementById(targetSubsectionId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }
        
        // Desktop: scroll the wrapper horizontally
        const targetElement = document.getElementById(targetSubsectionId);
        if (!targetElement) return;
        
        const wrapper = targetElement.closest('.subsection-wrapper');
        if (!wrapper) return;
        
        // Calculate scroll position (each subsection is 100vw wide)
        const sectionGroup = targetElement.getAttribute('data-section');
        if (!sectionGroup || !subsectionData[sectionGroup]) return;
        
        const sectionInfo = subsectionData[sectionGroup];
        const targetIndex = sectionInfo.subsections.findIndex(sub => sub.id === targetSubsectionId);
        
        if (targetIndex !== -1) {
            // Calculate scroll position based on wrapper width (not window width, to account for navbar)
            const wrapperWidth = wrapper.offsetWidth;
            const scrollPosition = targetIndex * wrapperWidth;
            wrapper.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Navigate to previous subsection
    carouselLeft.addEventListener('click', function() {
        if (this.disabled) return;
        
        const currentSection = getCurrentSection();
        if (!currentSection) return;
        
        const sectionGroup = currentSection.getAttribute('data-section');
        if (!sectionGroup || !subsectionData[sectionGroup]) return;
        
        const sectionInfo = subsectionData[sectionGroup];
        const currentIndex = sectionInfo.subsections.findIndex(sub => sub.id === currentSection.id);
        
        if (currentIndex > 0) {
            const prevSubsection = sectionInfo.subsections[currentIndex - 1];
            scrollSubsectionHorizontally(prevSubsection.id);
        }
    });
    
    // Navigate to next subsection
    carouselRight.addEventListener('click', function() {
        if (this.disabled) return;
        
        const currentSection = getCurrentSection();
        if (!currentSection) return;
        
        const sectionGroup = currentSection.getAttribute('data-section');
        if (!sectionGroup || !subsectionData[sectionGroup]) return;
        
        const sectionInfo = subsectionData[sectionGroup];
        const currentIndex = sectionInfo.subsections.findIndex(sub => sub.id === currentSection.id);
        
        if (currentIndex < sectionInfo.subsections.length - 1) {
            const nextSubsection = sectionInfo.subsections[currentIndex + 1];
            scrollSubsectionHorizontally(nextSubsection.id);
        }
    });
    
    // Update carousel on scroll (both vertical and horizontal)
    let scrollTimeout;
    function handleScrollUpdate() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            if (window.innerWidth > 900) {
                updateCarouselContent();
            }
        }, 50); // Reduced timeout for more responsive updates
    }
    
    // Listen to vertical scroll
    window.addEventListener('scroll', handleScrollUpdate);
    
    // Listen to horizontal scroll in subsection wrappers (desktop only)
    function attachHorizontalScrollListeners() {
        if (window.innerWidth > 900) {
            const wrappers = document.querySelectorAll('.subsection-wrapper');
            wrappers.forEach(wrapper => {
                wrapper.addEventListener('scroll', handleScrollUpdate);
            });
        }
    }
    
    // Attach listeners on load
    attachHorizontalScrollListeners();
    
    // Navigate to previous main section (up)
    carouselUp.addEventListener('click', function() {
        if (this.disabled) return;
        
        const currentSection = getCurrentSection();
        if (!currentSection) return;
        
        const prevMainSection = getPreviousMainSection(currentSection);
        if (prevMainSection) {
            prevMainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    // Navigate to next main section (down)
    carouselDown.addEventListener('click', function() {
        if (this.disabled) return;
        
        const currentSection = getCurrentSection();
        if (!currentSection) return;
        
        const nextMainSection = getNextMainSection(currentSection);
        if (nextMainSection) {
            nextMainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    // Update carousel on resize
    window.addEventListener('resize', function() {
        updateCarouselVisibility();
        attachHorizontalScrollListeners();
    });
    
    // Initial setup
    updateCarouselVisibility();
}

// Community Events List Functionality
function initCommunityEvents() {
    const eventsList = document.getElementById('events-list');
    const eventDetailsPanel = document.getElementById('event-details-panel');
    const eventDetailsTitle = document.getElementById('event-details-title');
    const eventDetailsDate = document.getElementById('event-details-date');
    const eventDetailsDescription = document.getElementById('event-details-description');
    const arrowUp = document.getElementById('event-arrow-up');
    const arrowDown = document.getElementById('event-arrow-down');
    const eventsListWrapper = document.getElementById('events-list-wrapper');
    
    if (!eventsList || !eventDetailsPanel || !arrowUp || !arrowDown || !eventsListWrapper) {
        console.log('Community events section not found on this page');
        return; // Section not found, exit
    }
    
    console.log('Initializing community events...');
    console.log('Found events:', communityEvents);
    
    let selectedEventId = null;
    
    // Populate events list
    function populateEventsList() {
        console.log('Populating events list...');
        eventsList.innerHTML = '';
        
        communityEvents.forEach((event, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'event-item';
            listItem.setAttribute('data-event-id', event.id);
            if (index === 0) {
                listItem.classList.add('active');
                selectedEventId = event.id;
            }
            
            listItem.innerHTML = `
                <div class="event-item-title">${event.title}</div>
                <div class="event-item-date">${event.date}</div>
            `;
            
            listItem.addEventListener('click', function() {
                selectEvent(event.id);
            });
            
            eventsList.appendChild(listItem);
        });
        
        // Display first event by default
        if (communityEvents.length > 0) {
            displayEventDetails(communityEvents[0]);
        }
    }
    
    // Select event
    function selectEvent(eventId) {
        // Update active state
        document.querySelectorAll('.event-item').forEach(item => {
            item.classList.remove('active');
        });
        const selectedItem = document.querySelector(`.event-item[data-event-id="${eventId}"]`);
        if (selectedItem) {
            selectedItem.classList.add('active');
            selectedEventId = eventId;
            
            // Scroll selected item into view (for mobile horizontal carousel)
            if (window.innerWidth <= 900) {
                selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
        
        // Display event details
        const event = communityEvents.find(e => e.id === eventId);
        if (event) {
            displayEventDetails(event);
        }
        
        // Update arrow states
        updateArrowStates();
    }
    
    // Display event details
    function displayEventDetails(event) {
        eventDetailsTitle.textContent = event.title;
        eventDetailsDate.textContent = event.date;
        eventDetailsDescription.innerHTML = event.description;
    }
    
    // Navigate to next/previous event
    function navigateEvent(direction) {
        const currentIndex = communityEvents.findIndex(e => e.id === selectedEventId);
        if (currentIndex === -1) return;
        
        // On mobile, 'up' means left (previous), 'down' means right (next)
        // On desktop, 'up' means previous, 'down' means next
        const isMobile = window.innerWidth <= 900;
        let newIndex;
        
        if ((isMobile && direction === 'up') || (!isMobile && direction === 'up')) {
            // Previous event (left on mobile, up on desktop)
            newIndex = currentIndex - 1;
            if (newIndex < 0) return; // Already at first event
        } else {
            // Next event (right on mobile, down on desktop)
            newIndex = currentIndex + 1;
            if (newIndex >= communityEvents.length) return; // Already at last event
        }
        
        // Select the new event
        selectEvent(communityEvents[newIndex].id);
        
        // Scroll the selected event into view
        const selectedItem = document.querySelector(`.event-item[data-event-id="${communityEvents[newIndex].id}"]`);
        if (selectedItem) {
            if (isMobile) {
                selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
    
    // Update arrow button states based on selected event
    function updateArrowStates() {
        const currentIndex = communityEvents.findIndex(e => e.id === selectedEventId);
        
        // Disable up arrow if at first event
        arrowUp.disabled = currentIndex <= 0;
        
        // Disable down arrow if at last event
        arrowDown.disabled = currentIndex >= communityEvents.length - 1;
    }
    
    // Event listeners
    arrowUp.addEventListener('click', function() {
        navigateEvent('up');
    });
    
    arrowDown.addEventListener('click', function() {
        navigateEvent('down');
    });
    
    // Update arrow states on resize
    window.addEventListener('resize', function() {
        updateArrowStates();
    });
    
    // Initialize
    populateEventsList();
    updateArrowStates();
}

// Initialize Team Carousel
function initTeamCarousel() {
    const carouselTrack = document.getElementById('team-carousel-track');
    const carouselLeft = document.getElementById('team-carousel-left');
    const carouselRight = document.getElementById('team-carousel-right');
    
    if (!carouselTrack || !carouselLeft || !carouselRight) {
        console.log('Team carousel not found on this page');
        return; // Section not found, exit
    }
    
    console.log('Initializing team carousel...');
    console.log('Found team members:', teamMembers);
    
    let currentIndex = 0;
    const isMobile = window.innerWidth <= 950;
    
    // Create team member cards
    function createTeamCard(member, index, isActive = false) {
        const card = document.createElement('div');
        card.className = `team-member-card ${isActive ? 'active' : ''}`;
        card.dataset.index = index;
        
        if (isActive) {
            // Get bio preview (first paragraph, truncated)
            const bioPreview = Array.isArray(member.bio) 
                ? member.bio[0] 
                : member.bio;
            const truncatedBio = bioPreview.length > 150 
                ? bioPreview.substring(0, 150) + '...' 
                : bioPreview;
            
            // Active card: image on left, name and bio preview on right
            card.innerHTML = `
                <div class="team-member-image active-image">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <div class="team-member-info">
                    <h3 class="team-member-name">${member.name}</h3>
                    <p class="team-member-role">${member.role}</p>
                    <p class="team-member-bio-preview">${truncatedBio}</p>
                    <button class="read-bio-btn" data-member-id="${member.id}">Read Full Bio</button>
                </div>
            `;
        } else {
            // Side card: just thumbnail image
            card.innerHTML = `
                <div class="team-member-image thumbnail-image">
                    <img src="${member.image}" alt="${member.name}">
                </div>
            `;
        }
        
        return card;
    }
    
    // Render carousel
    function renderCarousel() {
        console.log('Rendering carousel, currentIndex:', currentIndex);
        carouselTrack.innerHTML = '';
        const isMobile = window.innerWidth <= 950;
        
        if (isMobile) {
            // Mobile: vertical layout, show one at a time
            teamMembers.forEach((member, index) => {
                const card = createTeamCard(member, index, index === currentIndex);
                carouselTrack.appendChild(card);
            });
        } else {
            // Desktop: horizontal layout, show 7 at a time
            // Calculate which members to show (3 on left, 1 center, 3 on right)
            const total = teamMembers.length;
            const cards = [];
            
            for (let i = -3; i <= 3; i++) {
                let index = ((currentIndex + i) % total + total) % total;
                const isActive = i === 0;
                cards.push(createTeamCard(teamMembers[index], index, isActive));
            }
            
            cards.forEach(card => carouselTrack.appendChild(card));
        }
        
        updateCarouselButtons();
    }
    
    // Update button states
    function updateCarouselButtons() {
        const isMobile = window.innerWidth <= 950;
        if (isMobile) {
            // Mobile: enable/disable based on position
            carouselLeft.disabled = currentIndex === 0;
            carouselRight.disabled = currentIndex === teamMembers.length - 1;
        } else {
            // Desktop: always enabled (infinite loop)
            carouselLeft.disabled = false;
            carouselRight.disabled = false;
        }
    }
    
    // Navigate carousel
    function navigateCarousel(direction) {
        const isMobile = window.innerWidth <= 950;
        
        if (isMobile) {
            if (direction === 'left' && currentIndex > 0) {
                currentIndex--;
            } else if (direction === 'right' && currentIndex < teamMembers.length - 1) {
                currentIndex++;
            }
        } else {
            // Desktop: infinite loop
            if (direction === 'left') {
                currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
            } else {
                currentIndex = (currentIndex + 1) % teamMembers.length;
            }
        }
        
        renderCarousel();
        attachBioButtonListeners();
    }
    
    // Add event listener for "Read Bio" buttons
    function attachBioButtonListeners() {
        document.querySelectorAll('.read-bio-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const memberId = this.getAttribute('data-member-id');
                openBioModal(memberId);
            });
        });
    }
    
    // Event listeners
    carouselLeft.addEventListener('click', () => navigateCarousel('left'));
    carouselRight.addEventListener('click', () => navigateCarousel('right'));
    
    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            renderCarousel();
            attachBioButtonListeners();
        }, 250);
    });
    
    // Initialize
    renderCarousel();
    attachBioButtonListeners();
}