$(document).ready(function () {
    svg4everybody({});

    $('.language-choice').on('click', function() {
        $('.language-choice.active').removeClass('active');
        $(this).addClass('active');
    });
    
    isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        $('.contacts').on('touchstart', function() {
            $(this).toggleClass('show-contacts');
        });
    } 
    else {
        $('.contacts').on('mouseenter mouseleave', function() {
            $(this).toggleClass('show-contacts');
        });
    }

    //Add nav-link hover animation
    const triggers = $('.nav-menu__link');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    $('body').append(highlight);

    triggers.on('mouseenter', function() {
        highlight.style.opacity = '1';
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords);

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    });

    triggers.on('mouseleave', function() {
        highlight.style.opacity = '0';
    });

    //Menu-toggle animation
    $('.toggle-menu').on('click', function() {
        $(this).toggleClass('opened');
    });

    //Show/close toggle-menu
    $('.toggle-menu').on('click', function() {
        $('.toggle').toggleClass('show-menu');
    });

    //Show/close dropdown-submenu
    $('.toggle-dropdown__link').next().hide();
            
    $('.toggle-dropdown__link').click(function() {
        $('.toggle-dropdown__link.active').removeClass('active');
        $(this).addClass('active');
        $(this).next().slideToggle();
        $('.toggle-dropdown__link').not(this).next().stop(true,true).slideUp();
    });

    $('.nav-menu__item').on('mouseenter mouseleave', function() {
        $(this).toggleClass('show-menu');
    }); 


    $('.banner-slider').slick({
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
        vertical: true,
        // verticalSwiping: true,
        prevArrow: '.slider-nav__btn--prev',
        nextArrow: '.slider-nav__btn--next',
        asNavFor: '.slider-nav__dots'
    });

    $('.slider-nav__dots').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.banner-slider',
        vertical: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      });

    $('.partners-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
        prevArrow: '.partners-nav__btn--prev',
        nextArrow: '.partners-nav__btn--next',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    //Subscribe button effect
    $(".subscribeBtn").each(function(index, subscribeBtn) {
		$(".subscribeBtn").append("<span class='glow'/>");
		$(".subscribeBtn")
			.on("mousemove", function(event) {
			$(".subscribeBtn").find(".glow").css({
				left:event.pageX - $(this).position().left,
				top:event.pageY - $(this).position().top,
				transform: "scale(10)"
			});
		}).on("mouseout", function() {
			$(".subscribeBtn").find(".glow").css({
				transform: "scale(0)"
			});
		});
    });

    $(window).on('load resize orientationchange', function() {
        if($(window).width() < 577) {
            $('.footer-block__title').next().hide();
            
            $('.footer-block__title').on('click', function() {

                $(this).next().slideToggle();
                $('.footer-block__title').not(this).next().stop(true,true).slideUp();
            });
        }
        else {
            $('.footer-block__title').next().show();
        }
    });

    $('.invitation-slider').slick({
        arrows: false,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
        asNavFor: '.invitation-nav'
    });
    
    $('.invitation-nav').slick({
        slidesToShow: 6,
        variableWidth: true,
        slidesToScroll: 1,
        asNavFor: '.invitation-slider',
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      });

      $('.samples-slider').slick({
        arrows: false,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
        asNavFor: '.samples-nav'
    });
    
    $('.samples-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        asNavFor: '.samples-slider',
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      });
      
});