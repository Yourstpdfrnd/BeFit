$(function(){

    $('.header__slider').slick({
      infinite: true,
      speed: 3000,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      asNavFor: '.slider-dots',
      arrows:false
    });
    
    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    
    $('.header-btn').on('click', function(){
      $('.menu').addClass('active');
     });
     
     $('.close-btn').on('click', function(){
      $('.menu').removeClass('active');
     });
     
     
    
    $('.courses__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            arrows: false,
            
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
      
    });
    
    
    $('.special__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,  
      autoplay: true,  
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
    
      
    });