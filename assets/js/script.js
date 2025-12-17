//navbar with responsive here
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

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

function toggleMobileDropdown() {
    const dropdownContent = document.getElementById('mobileDropdownContent');
    const arrow = document.getElementById('mobileDropdownArrow');
    
    if (dropdownContent.style.maxHeight && dropdownContent.style.maxHeight !== '0px') {
        dropdownContent.style.maxHeight = '0px';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
    }
}

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

document.addEventListener('DOMContentLoaded', function () {
    
    // ========== BRAND SLIDER ==========
    if (document.getElementById('brand-slider')) {
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
    if (document.getElementById('caseStudySlider')) {
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
    if (document.getElementById('video-testimonial-slider')) {
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
    }

    // ========== CONTENT TESTIMONIAL SLIDER ==========
    if (document.getElementById('testimonialSlider')) {
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
    if (document.getElementById('blogSlider')) {
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
});

// ========== COUNTER ANIMATION ==========
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
if (counterSection) {
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
document.addEventListener('DOMContentLoaded', () => {
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
});


//faq

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        const border = item.querySelector('.faq-border');
        const iconClose = item.querySelector('.icon-close');
        const iconOpen = item.querySelector('.icon-open');
        
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
                    
                    otherContent.style.maxHeight = '0';
                    otherBorder.classList.add('hidden');
                    otherIconClose.classList.remove('hidden');
                    otherIconOpen.classList.add('hidden');
                }
            });
            
            // Toggle current item
            if (isOpen) {
                item.classList.remove('active');
                content.style.maxHeight = '0';
                border.classList.add('hidden');
                iconClose.classList.remove('hidden');
                iconOpen.classList.add('hidden');
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                border.classList.remove('hidden');
                iconClose.classList.add('hidden');
                iconOpen.classList.remove('hidden');
            }
        });
    });
});