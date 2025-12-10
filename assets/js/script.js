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





        //brand slider    
        document.addEventListener('DOMContentLoaded', function () {
            new Splide('#brand-slider', {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 6,
                autoScroll: {
                    speed: 0.5, // Continuous scroll speed (adjust korte paren)
                    pauseOnHover: true,
                    pauseOnFocus: false,
                },
                gap: '2rem',
                pagination: false,
                arrows: false,
                breakpoints: {
                    1280: {
                        perPage: 5,
                        gap: '1.5rem',
                    },
                    1024: {
                        perPage: 4,
                        gap: '1.5rem',
                    },
                    768: {
                        perPage: 3,
                        gap: '1rem',
                    },
                    640: {
                        perPage: 2,
                        gap: '1rem',
                    }
                }
            }).mount(window.splide.Extensions);
        });








        //case study slider 

        
        document.addEventListener('DOMContentLoaded', function () {
    const caseStudySlider = new Splide('#caseStudySlider', {
        type: 'loop',
        drag   : 'free',
        focus  : 'center',
        autoScroll: {
            speed: 0.8,         // Speed adjust করো (0.5 = slow, 1.5 = fast)
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,      // Continuous loop
        },
        arrows: false,
        pagination: true,
        gap: '1.5rem',
        perPage: 2.5,           // Desktop: 2 full + 3rd card এর 1/3 part
        perMove: 1,
        autoWidth: false,
        breakpoints: {
            1400: {
                perPage: 2.2,   // Large desktop: 2.2 cards
                gap: '1.5rem',
                autoScroll: {
                    speed: 0.8,
                },
            },
            1280: {
                perPage: 2,     // Medium desktop: 2 full cards
                gap: '1.25rem',
                padding: {
                    right: '12%', // 3rd card peek
                },
                autoScroll: {
                    speed: 0.7,
                },
            },
            1024: {
                perPage: 1.5,   // Tablet: 1.5 cards
                gap: '1rem',
                autoScroll: {
                    speed: 0.6,
                },
            },
            768: {
                perPage: 1.2,   // Small tablet: 1.2 cards
                gap: '1rem',
                autoScroll: {
                    speed: 0.5,
                },
            },
            640: {
                perPage: 1,     // Mobile: 1 card
                gap: '0.75rem',
                padding: {
                    right: '10%', // Small peek
                },
                autoScroll: {
                    speed: 0.4,
                },
            }
        }
    });

    // AutoScroll extension mount করো
    caseStudySlider.mount(window.splide.Extensions);
});






//video popup slider 

   document.addEventListener('DOMContentLoaded', function() {

      const videoslider = new Splide('#video-testimonial-slider', {
        type: 'loop',
        drag   : 'free',
        focus  : 'center',
        autoScroll: {
            speed: 0.9,         // Speed adjust করো (0.5 = slow, 1.5 = fast)
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,      // Continuous loop
        },
        arrows: false,
        pagination: true,
        gap: '1.5rem',
        perPage: 4,           // Desktop: 2 full + 3rd card এর 1/3 part
        perMove: 1,
        autoWidth: false,
        breakpoints: {
            1400: {
                perPage: 4,   // Large desktop: 2.2 cards
                gap: '1.5rem',
                autoScroll: {
                    speed: 0.8,
                },
            },
            1280: {
                perPage: 4,     // Medium desktop: 2 full cards
                gap: '1.25rem',
                padding: {
                    right: '12%', // 3rd card peek
                },
                autoScroll: {
                    speed: 0.7,
                },
            },
            1024: {
                perPage: 3,   // Tablet: 1.5 cards
                gap: '1rem',
                autoScroll: {
                    speed: 0.6,
                },
            },
            768: {
                perPage:2,   // Small tablet: 1.2 cards
                gap: '1rem',
                autoScroll: {
                    speed: 0.5,
                },
            },
            640: {
                perPage: 1,     // Mobile: 1 card
                gap: '0.75rem',
                padding: {
                    right: '10%', // Small peek
                },
                autoScroll: {
                    speed: 0.4,
                },
            }
        }
    });

    // AutoScroll extension mount 
    videoslider.mount(window.splide.Extensions);


          

            // Video Popup Functionality
            const popup = document.getElementById('videoPopup');
            const popupVideo = document.getElementById('popupVideo');
            const closeBtn = document.getElementById('closePopup');
            const playButtons = document.querySelectorAll('.play-btn');

            // Open popup on play button click
            playButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const videoSrc = this.getAttribute('data-video');
                    popupVideo.src = videoSrc;
                    popup.classList.add('active');
                    popupVideo.play();
                    
                    // Pause slider when popup opens
                    splide.Components.Autoplay.pause();
                });
            });

            // Close popup
            function closePopup() {
                popup.classList.remove('active');
                popupVideo.pause();
                popupVideo.src = '';
                
                // Resume slider when popup closes
                splide.Components.Autoplay.play();
            }

            closeBtn.addEventListener('click', closePopup);

            // Close popup on background click
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    closePopup();
                }
            });

            // Close popup on ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && popup.classList.contains('active')) {
                    closePopup();
                }
            });
        });



        //counter start on scroll 


        // Counter Animation Function
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

        // Intersection Observer for scroll trigger
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start counter animation
                    const counters = document.querySelectorAll('.counter-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        animateCounter(counter, target);
                    });
                    
                    // Unobserve after animation starts (animate only once)
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe the counter section
        const counterSection = document.getElementById('counter-section');
        observer.observe(counterSection);