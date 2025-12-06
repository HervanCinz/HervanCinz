const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Tutup menu mobile saat link diklik
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan menghubungi Anda segera.');
            this.reset();
        });
        
        // Smooth scroll untuk navigasi
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animasi untuk skill bars
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-level-bar');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-in-out';
                    bar.style.width = width;
                }, 300);
            });
        }
        
        // Animasikan skill bars saat halaman dimuat
        window.addEventListener('load', animateSkillBars);
        
        // Efek parallax sederhana untuk home section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const homePhoto = document.querySelector('.home-photo');
            if (homePhoto && scrolled < window.innerHeight) {
                homePhoto.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        });