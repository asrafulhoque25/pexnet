// ========== GLOBAL INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function () {
    
    // Initialize all components
    initNavbar();
    initBrandSlider();
    initCaseStudySlider();
    initVideoTestimonialSlider();
    initContentTestimonialSlider();
    initBlogSlider();
    initCounterAnimation();
    initTimelineProgress();
    initFAQ();
    initWaveAnimation();
    initServicesTab(); // Tab initialization moved inside DOMContentLoaded
});

// ========== NAVBAR WITH RESPONSIVE ==========
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (!hamburger || !mobileMenu || !mobileOverlay) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        
        if (mobileMenu.classList.contains('right-0')) {
            mobileMenu.classList.remove('right-0');
            mobileMenu.classList.add('-right-full');
            mobileOverlay.classList.remove('opacity-100', 'visible');
            mobileOverlay.classList.add('opacity-0', 'invisible');
        } else {
            mobileMenu.classList.remove('-right-full');
            mobileMenu.classList.add('right-0');
            mobileOverlay.classList.remove('opacity-0', 'invisible');
            mobileOverlay.classList.add('opacity-100', 'visible');
        }
    });

    mobileOverlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('right-0');
        mobileMenu.classList.add('-right-full');
        mobileOverlay.classList.remove('opacity-100', 'visible');
        mobileOverlay.classList.add('opacity-0', 'invisible');
    });

    // Mobile dropdown toggle
    window.toggleMobileDropdown = function() {
        const dropdownContent = document.getElementById('mobileDropdownContent');
        const arrow = document.getElementById('mobileDropdownArrow');
        
        if (!dropdownContent || !arrow) return;
        
        if (dropdownContent.style.maxHeight && dropdownContent.style.maxHeight !== '0px') {
            dropdownContent.style.maxHeight = '0px';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
        }
    };

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('right-0');
            mobileMenu.classList.add('-right-full');
            mobileOverlay.classList.remove('opacity-100', 'visible');
            mobileOverlay.classList.add('opacity-0', 'invisible');
        });
    });
}

// ========== BRAND SLIDER ==========
function initBrandSlider() {
    if (!document.getElementById('brand-slider')) return;
    
    new Splide('#brand-slider', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 6,
        autoScroll: {
            speed: 0.5,
            pauseOnHover: true,
            pauseOnFocus: false,
        },
        gap: '2rem',
        pagination: false,
        arrows: false,
        breakpoints: {
            1280: { perPage: 5, gap: '1.5rem' },
            1024: { perPage: 4, gap: '1.5rem' },
            768: { perPage: 4, gap: '1rem' },
            640: { perPage: 3, gap: '1rem' }
        }
    }).mount(window.splide.Extensions);
}

// ========== CASE STUDY SLIDER ==========
function initCaseStudySlider() {
    if (!document.getElementById('caseStudySlider')) return;
    
    const caseStudySlider = new Splide('#caseStudySlider', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoScroll: {
            speed: 0.8,
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
        },
        arrows: false,
        pagination: true,
        gap: '1.5rem',
        perPage: 2.5,
        perMove: 1,
        autoWidth: false,
        breakpoints: {
            1400: { perPage: 2.2, gap: '1.5rem', autoScroll: { speed: 0.8 } },
            1280: { perPage: 2, gap: '1.25rem', padding: { right: '12%' }, autoScroll: { speed: 0.7 } },
            1024: { perPage: 1.5, gap: '1rem', autoScroll: { speed: 0.6 } },
            768: { perPage: 1.2, gap: '1rem', autoScroll: { speed: 0.5 } },
            640: { perPage: 1, gap: '0.75rem', padding: { right: '10%' }, autoScroll: { speed: 0.4 } }
        }
    });
    caseStudySlider.mount(window.splide.Extensions);
}

// ========== VIDEO TESTIMONIAL SLIDER ==========
function initVideoTestimonialSlider() {
    if (!document.getElementById('video-testimonial-slider')) return;
    
    const videoslider = new Splide('#video-testimonial-slider', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoScroll: {
            speed: 0.9,
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
        },
        arrows: false,
        pagination: true,
        gap: '1.5rem',
        perPage: 4,
        perMove: 1,
        autoWidth: false,
        breakpoints: {
            1400: { perPage: 4, gap: '1.5rem', autoScroll: { speed: 0.8 } },
            1280: { perPage: 4, gap: '1.25rem', padding: { right: '12%' }, autoScroll: { speed: 0.7 } },
            1024: { perPage: 3, gap: '1rem', autoScroll: { speed: 0.6 } },
            768: { perPage: 2, gap: '1rem', autoScroll: { speed: 0.5 } },
            640: { perPage: 1, gap: '0.75rem', padding: { right: '10%' }, autoScroll: { speed: 0.4 } }
        }
    });
    videoslider.mount(window.splide.Extensions);

    
}

  // Video Popup Functionality
    const popup = document.getElementById('videoPopup');
    const popupVideo = document.getElementById('popupVideo');
    const closeBtn = document.getElementById('closePopup');
    const playButtons = document.querySelectorAll('.play-btn');

    if (popup && popupVideo && closeBtn) {
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                const videoSrc = this.getAttribute('data-video');
                popupVideo.src = videoSrc;
                popup.classList.add('active');
                popupVideo.play();
                videoslider.Components.Autoplay.pause();
            });
        });

        function closePopup() {
            popup.classList.remove('active');
            popupVideo.pause();
            popupVideo.src = '';
            videoslider.Components.Autoplay.play();
        }

        closeBtn.addEventListener('click', closePopup);
        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('active')) {
                closePopup();
            }
        });
    }

// ========== CONTENT TESTIMONIAL SLIDER ==========
function initContentTestimonialSlider() {
    if (!document.getElementById('testimonialSlider')) return;
    
    const arrowSVG = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50004 5C7.50004 5 12.5 8.68242 12.5 10C12.5 11.3177 7.5 15 7.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    const testimonialSplide = new Splide('#testimonialSlider', {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        arrows: true,
        pagination: false,
        breakpoints: {
            1024: { perPage: 1, gap: '1.5rem' }
        }
    });
    
    testimonialSplide.mount();

    // Setup custom arrows for testimonial
    const testimonialWrapper = document.getElementById('testimonialSlider').closest('.content-our-testimonial');
    if (testimonialWrapper) {
        const originalArrows = testimonialWrapper.querySelector('.splide__arrows');
        const testimonialArrowsDesktop = testimonialWrapper.querySelector('.testimonial-real-content-slider-arrows-desktop');
        const testimonialArrowsMobile = testimonialWrapper.querySelector('.testimonial-real-content-slider-arrows-mobile');

        if (originalArrows && testimonialArrowsDesktop && testimonialArrowsMobile) {
            testimonialArrowsDesktop.innerHTML = originalArrows.innerHTML;
            testimonialArrowsMobile.innerHTML = originalArrows.innerHTML;

            // Replace arrows
            function replaceTestimonialArrows(container) {
                const arrows = container.querySelectorAll('.splide__arrow');
                arrows.forEach(arrow => {
                    arrow.innerHTML = arrowSVG;
                });
            }

            replaceTestimonialArrows(testimonialArrowsDesktop);
            replaceTestimonialArrows(testimonialArrowsMobile);

            // Setup listeners
            [testimonialArrowsDesktop, testimonialArrowsMobile].forEach(container => {
                const prevBtn = container.querySelector('.splide__arrow--prev');
                const nextBtn = container.querySelector('.splide__arrow--next');

                if (prevBtn) prevBtn.addEventListener('click', () => testimonialSplide.go('<'));
                if (nextBtn) nextBtn.addEventListener('click', () => testimonialSplide.go('>'));
            });

            originalArrows.style.display = 'none';
        }
    }
}

// ========== BLOG SLIDER ==========
function initBlogSlider() {
    if (!document.getElementById('blogSlider')) return;
    
    const arrowSVG = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50004 5C7.50004 5 12.5 8.68242 12.5 10C12.5 11.3177 7.5 15 7.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    const blogSplide = new Splide('#blogSlider', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        arrows: true,
        pagination: false,
        breakpoints: {
            1280: { perPage: 2, gap: '1.5rem' },
            991: { perPage: 2, gap: '1.5rem' },
            767: { perPage: 1, gap: '1.5rem' }
        }
    });
    
    blogSplide.mount();

    // Setup custom arrows for blog
    const blogSection = document.querySelector('section.blog');
    if (blogSection) {
        const blogWrapper = document.getElementById('blogSlider').closest('.latest-blog-slider');
        const originalArrows = blogWrapper.querySelector('.splide__arrows');
        const blogArrowsDesktop = blogSection.querySelector('.latest-blog-slider-arrows-desktop');
        const blogArrowsMobile = blogSection.querySelector('.latest-blog-slider-arrows-mobile');

        if (originalArrows && blogArrowsDesktop && blogArrowsMobile) {
            blogArrowsDesktop.innerHTML = originalArrows.innerHTML;
            blogArrowsMobile.innerHTML = originalArrows.innerHTML;

            // Replace arrows
            function replaceBlogArrows(container) {
                const arrows = container.querySelectorAll('.splide__arrow');
                arrows.forEach(arrow => {
                    arrow.innerHTML = arrowSVG;
                });
            }

            replaceBlogArrows(blogArrowsDesktop);
            replaceBlogArrows(blogArrowsMobile);

            // Setup listeners
            [blogArrowsDesktop, blogArrowsMobile].forEach(container => {
                const prevBtn = container.querySelector('.splide__arrow--prev');
                const nextBtn = container.querySelector('.splide__arrow--next');

                if (prevBtn) prevBtn.addEventListener('click', () => blogSplide.go('<'));
                if (nextBtn) nextBtn.addEventListener('click', () => blogSplide.go('>'));
            });

            originalArrows.style.display = 'none';
        }
    }
}

// ========== COUNTER ANIMATION ==========
function initCounterAnimation() {
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    const counterSection = document.getElementById('counter-section');
    if (!counterSection) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = document.querySelectorAll('.counter-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(counterSection);
}

// ========== TIMELINE PROGRESS BAR ==========
function initTimelineProgress() {
    const progressBar = document.getElementById('progress-bar');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (!progressBar || timelineItems.length === 0) return;

    function updateProgressBar() {
        const firstStep = timelineItems[0];
        const lastStep = timelineItems[timelineItems.length - 1];
        
        const firstStepTop = firstStep.getBoundingClientRect().top + window.scrollY;
        const lastStepTop = lastStep.getBoundingClientRect().top + window.scrollY;
        
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollCenter = scrollTop + (windowHeight / 2);
        
        const startPoint = firstStepTop;
        const endPoint = lastStepTop;
        const totalDistance = endPoint - startPoint;
        
        const scrolledDistance = scrollCenter - startPoint;
        
        let progress = scrolledDistance / totalDistance;
        progress = Math.max(0, Math.min(1, progress));
        
        const progressHeight = progress * totalDistance;
        progressBar.style.height = progressHeight + 'px';
    }

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);
    updateProgressBar();
}

// ========== FAQ ==========
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;
    
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        const border = item.querySelector('.faq-border');
        const iconClose = item.querySelector('.icon-close');
        const iconOpen = item.querySelector('.icon-open');
        
        if (!trigger) return;
        
        trigger.addEventListener('click', function() {
            const isOpen = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherBorder = otherItem.querySelector('.faq-border');
                    const otherIconClose = otherItem.querySelector('.icon-close');
                    const otherIconOpen = otherItem.querySelector('.icon-open');
                    
                    if (otherContent) otherContent.style.maxHeight = '0';
                    if (otherBorder) otherBorder.classList.add('hidden');
                    if (otherIconClose) otherIconClose.classList.remove('hidden');
                    if (otherIconOpen) otherIconOpen.classList.add('hidden');
                }
            });
            
            // Toggle current item
            if (isOpen) {
                item.classList.remove('active');
                if (content) content.style.maxHeight = '0';
                if (border) border.classList.add('hidden');
                if (iconClose) iconClose.classList.remove('hidden');
                if (iconOpen) iconOpen.classList.add('hidden');
            } else {
                item.classList.add('active');
                if (content) content.style.maxHeight = content.scrollHeight + 'px';
                if (border) border.classList.remove('hidden');
                if (iconClose) iconClose.classList.add('hidden');
                if (iconOpen) iconOpen.classList.remove('hidden');
            }
        });
    });
}

// ========== WAVE ANIMATION ==========
function initWaveAnimation() {
    const wave = document.getElementById('waveImage');
    if (!wave) return;

    let time = 0;

    function animateWave() {
        time += 0.01;
        
        // Calculate wave movements
        const yMovement = Math.sin(time * 2) * 30;
        const xMovement = Math.cos(time * 1.5) * 15;
        const rotation = Math.sin(time * 1.2) * 3;
        const scale = 1 + Math.sin(time * 1.8) * 0.05;
        const rotationY = Math.sin(time * 0.8) * 10;
        const rotationX = Math.cos(time * 0.6) * 5;
        const opacity = 0.6 + Math.sin(time * 1.5) * 0.15;
        
        // Apply 3D transforms
        wave.style.transform = `
            translate(${xMovement}px, ${yMovement}px) 
            rotate(${rotation}deg) 
            scale(${scale})
            rotateY(${rotationY}deg)
            rotateX(${rotationX}deg)
        `;
        wave.style.opacity = opacity;
        
        requestAnimationFrame(animateWave);
    }

    // Start animation
    animateWave();
}

// ========== SERVICES TAB ==========
function initServicesTab() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length === 0 || tabPanes.length === 0) return;

    function switchTab(tabId) {
        // Remove active class from all buttons
        tabButtons.forEach(button => {
            button.classList.remove('active');
            button.classList.add('inactive');
        });

        // Remove active class from all panes
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
        });

        // Add active class to clicked button
        const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeButton) {
            activeButton.classList.remove('inactive');
            activeButton.classList.add('active');
        }

        // Show corresponding tab pane
        const activePane = document.getElementById(tabId);
        if (activePane) {
            activePane.classList.add('active');
        }
    }

    // Add click event listeners to all buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            if (tabId) {
                switchTab(tabId);
            }
        });
    });
}



//logo animaion

 // Animation control variables
        const fillRect = document.getElementById('fillRect');
        const totalHeight = 40; // SVG height
        const animationDuration = 1500; // 1.5 seconds for fill
        const delayBeforeStart = 2000; // 2 seconds initial delay
        const delayBetweenCycles = 500; // 0.5 second delay between fill and empty

        let animationFrame;
        let startTime;
        let isFillingUp = true;
        let hasStarted = false;

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            
            const elapsed = currentTime - startTime;
            let progress = Math.min(elapsed / animationDuration, 1);
            
            // Apply easing
            progress = easeInOutCubic(progress);

            if (isFillingUp) {
                // Bottom theke upor e fill hobe
                const currentHeight = totalHeight * progress;
                const yPosition = totalHeight - currentHeight;
                
                fillRect.setAttribute('y', yPosition);
                fillRect.setAttribute('height', currentHeight);
            } else {
                // Upor theke bottom e empty hobe (reverse)
                const currentHeight = totalHeight * (1 - progress);
                const yPosition = totalHeight - currentHeight;
                
                fillRect.setAttribute('y', yPosition);
                fillRect.setAttribute('height', currentHeight);
            }

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                // Animation cycle complete
                setTimeout(() => {
                    isFillingUp = !isFillingUp;
                    startTime = null;
                    animationFrame = requestAnimationFrame(animate);
                }, delayBetweenCycles);
            }
        }

        // Initial delay then start animation
        setTimeout(() => {
            hasStarted = true;
            animationFrame = requestAnimationFrame(animate);
        }, delayBeforeStart);