const checkpoint = 600;
        let header_bg = 'transparent';
        let opacity = 1;
        
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if(currentScroll <= checkpoint) {
                header_bg = 'transparent';
                opacity = 1 - currentScroll / checkpoint;
            } else {
                header_bg = '#000';
                opacity = 0;
            }
        
            document.querySelector(".header-nav").style.background = header_bg;
            slides.forEach(slide => slide.getElementsByTagName('img')[0].style.opacity = opacity);
        });