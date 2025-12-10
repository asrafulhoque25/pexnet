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