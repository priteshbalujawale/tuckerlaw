//-------------------for form-----------------
// disclaimer pop up
const disclaimer = document.querySelector('.disclaimer');
const discPop = document.querySelector('.disclaimer-popup');
disclaimer.addEventListener('click',function(e){
    e.preventDefault();
    discPop.classList.toggle('active');
});
const close=document.getElementById('fl-disclaimer__close');
close.addEventListener('click',function(e){
    e.preventDefault();
    discPop.classList.toggle('active');
});




// email error msg


const emailField=document.getElementById('email');
const nfErro=document.querySelector('.nf-error-msg');
const nfErrorReq=document.querySelector('.nf-error-field-errors');
const checkBox=document.getElementById('checkbox');
const checkBoxError=document.querySelector('.nf-error-msg-check-box');


//Submit Button Clickable
(function myFunction(){
//for email field value
emailField.addEventListener('blur',function(e){
// checkBox.addEventListener('blur',function(e){
    e.preventDefault();


    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        nfErro.classList.add('active');
        nfErrorReq.classList.add('active');
        emailField.classList.remove('enable-input-btn');
       
    }
    else{
        nfErro.classList.remove('active');
        nfErrorReq.classList.remove('active'); 
        emailField.classList.add('enable-input-btn'); 
    }
    submitButton();
});


//  for check box


checkBox.addEventListener('click',function() {
    if (checkBox.checked == false){
      checkBoxError.classList.add('active')
      checkBox.classList.remove('enable-input-btn');
    } 
    else {
        checkBoxError.classList.remove('active')
        checkBox.classList.add('enable-input-btn');
    }
    submitButton();
  });
 
})();


function submitButton(){
    const emailStat = emailField.classList.contains('enable-input-btn')
    const checkBxStat = checkBox.classList.contains('enable-input-btn')
    if(emailStat && checkBxStat){
        document.querySelector('.input-btn').removeAttribute('disabled');
        }
     if(!emailStat || !checkBxStat){
            document.querySelector('.input-btn').setAttribute('disabled','');
        }
}


//-------------------for mobile menu and practice menu-----------------


//Mobile Menu DropDown
const mobMenuBtn = document.getElementById('mobile-menu-bars');
const mobList = document.getElementById('mobile-menu');


mobMenuBtn.addEventListener('click', function(e){
    e.preventDefault();
    mobList.classList.toggle('active');
});


//Mobile Practice area dropdown
const pracBtn = document.getElementById('practice-menu-bars');
const pracList = document.querySelector('.fl-prac-area-mob-sec');
const pracClose = document.querySelector('.fl-prac-list-close');
pracBtn.addEventListener('click',function(e){
    e.preventDefault();
    pracList.classList.toggle('active');
});
pracClose.addEventListener('click',function(e){
    e.preventDefault();
    pracList.classList.toggle('active');
});


//-------------------for banner slider section-----------------
// banner Slider section
let a=1;


setInterval(function() {
    // console.log(`${a++} `);
   
    document.querySelectorAll(`.fl-banner-slider`).forEach(function(users){
        users.classList.remove('active');
  }) 
  a++;
    if(a>4){
        a=1;
    }


   
    document.querySelector(`.fl-banner-slider-0${a}`).classList.add('active');
  
}, 4000);
// banner slider section end




//-------------------for footer section slider-----------------


// footer section slider start
let b = 1;
const imgContainer = document.querySelectorAll('.fl-img-container');
const imgBtn    =   document.querySelectorAll('.fl-img-slider-btn-link')
setInterval(function() {
    imgContainer.forEach(function(element){
        element.classList.remove('active')
    })
    imgBtn.forEach(function(element){
        element.classList.remove('active');
    });     
    if(b>5){
        b=1
    }
    document.querySelector(`.fl-img-slider-0${b}`).classList.add('active');
    document.querySelector(`.fl-img-slider-link-0${b}`).classList.add('active');
    b++;
    
}, 4000);
//appear slide on dot click
    imgBtn.forEach(function(element){
    element.addEventListener('click',function(e){


        imgBtn.forEach(function(element){
        element.classList.remove('active');
        });
            imgContainer.forEach(function(element){
            element.classList.remove('active')
            });


        e.preventDefault();
       const dataAttribute = element.getAttribute('data-tab');
       document.querySelector(`.fl-img-slider-0${dataAttribute}`).classList.add('active');
       document.querySelector(`.fl-img-slider-link-0${dataAttribute}`).classList.add('active');
    });


});
// footer slider section end


//-------------------- scroll to top---------------------
const scrollbtn = document.querySelector('.fl-scroll-top');
const scrollTop = document.querySelector('.fl-sec-2');


window.onscroll = function()
{
    if(pageYOffset >= 1000)
    {
        scrollbtn.style.visibility="visible"
    }else
    {
        scrollbtn.style.visibility="hidden";
    }
};


scrollbtn.addEventListener('click',function(){
    scrollTop.scrollIntoView({behavior:"smooth"});
})




// ------------------animation on first time scroll---------------------


// practice area section


const pracContainer = document.querySelectorAll('.fl-prac-container');
const vdoSec = document.querySelector('.fl-sec7-row .fl-content');
const sec6 = document.querySelector('.fl-sec-6-row');
const sec8 = document.querySelector('.fl-sec8-row');
const sec9 = document.querySelector('.fl-sec9-row');
const sec9btn = document.querySelector('.sec9-btn');
function firstScroll(){
    let windowHeight = window.innerHeight;
    let elementVisible = 0;
    pracContainer.forEach(function(element){
        
        let elementTop = element.getBoundingClientRect().top;
       
        if (elementTop < windowHeight - elementVisible) {
                    element.classList.add("transition-prac-section");
                    // element.style.transform='scale(1.5)';
                  }
                   else {
                    // element.classList.remove("transition-prac-section");
                  }
                });
                // video section
        const vdoSecTop = vdoSec.getBoundingClientRect().top;
        if (vdoSecTop < windowHeight - elementVisible) {
            vdoSec.classList.add("transition-vdo-section");


          }


        //   section 6
          const sec6Top = sec6.getBoundingClientRect().top;
        if (sec6Top < windowHeight - elementVisible) {
            sec6.classList.add("transition-sec6-section");
          }


        //   section 8
          const sec8Top = sec8.getBoundingClientRect().top;
          if(sec8Top < windowHeight - elementVisible){
              sec8.classList.add("transition-sec8-section");
          }
        
        //   section 9
        const sec9Top = sec9.getBoundingClientRect().top;
        if(sec9Top < windowHeight -elementVisible){
            sec9.classList.add("transition-sec9-section");
            sec9btn.classList.add("transition-sec9-section")
        }
        }


        
         window.addEventListener("scroll", firstScroll);




    document.querySelectorAll('a').forEach(function(anchor){
        anchor.addEventListener('click',function(e){
            e.preventDefault();
        })
    })


    // const liHasChild = document.querySelector('.fl-menu-item-has-child a');
    // const liHasChildA = document.querySelector('.fl-menu-item-has-child .fl-menu-item a')
    // const subMenu = document.querySelector('.fl-sub-menu');
    // liHasChild.addEventListener('focus',function(){
    //     subMenu.style.display='block';
    // })
    // liHasChild.addEventListener('blur',function(){
    //     subMenu.style.display='none';
    // })
    // liHasChildA.addEventListener('blur',function(){
    //     subMenu.style.display='none';
    // })


// ------------------------------------------A11Y-----------------------------------------------------------------------------------------------------------------------------------------------------


/* Main navigation children are missing VFIs. */
jQuery(document).ready(function($) {
    $( ".fl-menu-item-has-child a" ).attr( "tabindex", "0" );
    $(".fl-menu-item a").focus(function(e){
                const vfiFocused =e.target.classList.contains('da11y-submenu') || e.target.parentElement.classList.contains('fl-sub-menu-items');
                // console.log(e.target.parentElement.classList.contains('fl-sub-menu-items'))
        if(vfiFocused){
            // console.log(abcd)
        $(this).parent().addClass("fl-show-dropdown fl-hover"); 
        }
        if(!vfiFocused){
            // console.log(e.target);


            $('.fl-menu-item-has-child').removeClass("fl-show-dropdown fl-hover");
        }
        })


    
    $(".fl-menu-item li a").focusout(function(){
        $(this).closest(".fl-show-dropdown.fl-hover").removeClass('fl-show-dropdown fl-hover'); 
     })
     
}); 
    
// ---------// ------------------------------


//  wrapping the span inside anchor tag
//  $(function(){
//  // [ADA] Fix tabbing on "back to top" element
//     let scrollBtn = $('.fl-scroll-top');
//  scrollBtn.wrap(`<a href="#" aria-label="Go to Top" class=${scrollBtn.attr('class')}"></a>`);


//     console.log(scrollBtn.attr('class'))
// });


$(function(){
    // [ADA] Fix tabbing on "back to top" element
    $('.fl-scroll-top').replaceWith(function(){
        return '<a href="#" aria-label="Go to Top" class="'+this.className+' scroll-smooth-top">'+this.innerHTML+'</a>';
        
    });
});





