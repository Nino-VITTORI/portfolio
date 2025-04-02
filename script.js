// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Loader
    window.addEventListener('load', () => {
        // Hide loader when page is fully loaded
        const loaderContainer = document.querySelector('.loader-container');
        loaderContainer.style.opacity = '0';
        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 500);
    });

    // Navigation
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Scroll animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }
    
    // Initial check on page load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);

    // Timeline interaction
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            timelineItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
        });
    });

    // Formation specialization interaction
    const specialisations = document.querySelectorAll('.specialisation');
    
    specialisations.forEach(spec => {
        spec.addEventListener('click', () => {
            // Remove active class from all specialisations
            specialisations.forEach(s => s.classList.remove('active'));
            // Add active class to clicked specialisation
            spec.classList.add('active');
        });
    });

    // Immersion items interaction
    const immersionItems = document.querySelectorAll('.immersion-item');
    
    immersionItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            immersionItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
        });
    });

    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projetCards = document.querySelectorAll('.projet-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter projects
            projetCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 100);
                } else {
                    card.classList.remove('show');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Tab switching for associative projects
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const tabId = btn.dataset.tab;
            
            // Switch tabs
            tabPanes.forEach(pane => {
                if (pane.id === tabId) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Display success message (since we're just simulating)
            alert(`Merci ${name} ! Votre message a bien été envoyé.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: offsetTop - 80, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animated project details (on hover)
    projetCards.forEach(card => {
        const details = card.querySelector('.projet-details');
        
        if (details) {
            // Set initial height to 0
            details.style.maxHeight = '0px';
            
            card.addEventListener('mouseenter', () => {
                // Calculate the full height of the details
                details.style.maxHeight = details.scrollHeight + 'px';
            });
            
            card.addEventListener('mouseleave', () => {
                // Reset height to 0
                details.style.maxHeight = '0px';
            });
        }
    });

    // Initialize everything as if page just loaded
    checkScroll();
    
    // Apply show class to elements already in viewport
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
            element.classList.add('show');
        }
    });
});