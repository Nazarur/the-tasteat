const checkpoint = 600;
        let header_bg = '#292e36';
        let opacity = 0;
        
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if(currentScroll <= checkpoint) {
                header_bg = 'sticky';
                opacity = 1 - currentScroll / checkpoint;
            } else {
                header_bg = 'fixed';
                opacity = 0;
            }
        
            document.querySelector(".header-nav").style.position = header_bg;
        });