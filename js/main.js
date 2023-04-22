const swiper = new Swiper('.swiper', {
	// Optional parameters
	// If we need pagination
	// Navigation arrows
	simulateTouch: false,
	slidesPerView: 2.6,
	spaceBetween: 3,
	initialSlide: 0,
	simulateTouch: false,
	allowTouchMove: false,
	loop: true,
	autoplay: {
		reverseDirection: true,
		delay: 5000
	},
	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: false
	}
});

$(document).ready(function() {
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function updateNumber() {
        const randomNumber = generateRandomNumber(150, 250);
        const okElement = $('.ok');

        okElement.css('opacity', 0);

        setTimeout(() => {
            okElement.text(randomNumber);
            okElement.css('opacity', 1);
        }, 500);
    }

    setInterval(updateNumber, 10000);
    updateNumber(); // Initial update
});

document.querySelector('.telep-top').addEventListener('click', function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

const mailWrap = document.querySelector('.mail-wrap');
const mailTxt = document.querySelector('.mail-txt');

mailWrap.addEventListener('click', function() {
// Copy the text
navigator.clipboard.writeText(mailTxt.textContent)
	.then(() => {
	// Change the text and color
	mailTxt.textContent = 'Скопировано';
	mailTxt.style.color = 'green';
	
	// Set a timer to change the text back after 3 seconds
	setTimeout(() => {
		mailTxt.textContent = 'studytoolsup@gmail.com';
		mailTxt.style.color = 'white';
	}, 3000);
	})
	.catch(err => {
	console.error('Failed to copy text: ', err);
	});
});

$(document).ready(function() {
	$('.start-kolo').on('click', function() {
		$('.pop-up-wrap').css('display', 'flex');
	});

	$('.hrest').on('click', function() {
		$('.pop-up-wrap').css('display', 'none');
	});
});


$(document).ready(function() {
    $('.btn-promo').on('click', function() {
        const inputPromo = $('.input-promo');
        const inputValue = inputPromo.val();
        const promoCode = '1234';

        if (inputValue === promoCode) {
            $('.pop-up-wrap').css('display', 'none');
            $('.kol-img').addClass('start-spin');
            setTimeout(() => {
                $('.kol-img').removeClass('start-spin');
            }, 5000);
            inputPromo.removeClass('brred'); // Remove brred class when the promo code is correct

            // Hide nav-main-wrap and show going-game-wrap
            $('.nav-main-wrap').css('display', 'none');
            $('.going-game-wrap').css('display', 'flex');

            // Hide going-game-wrap and show viner-wrap with animation after 5 seconds
            setTimeout(() => {
                $('.going-game-wrap').css('display', 'none');
                $('.viner-wrap').css('display', 'flex').addClass('scale-up-animation');
            }, 5000);
        } else {
            inputPromo.addClass('brred');
        }
    });

    $('.hrest').on('click', function() {
        $('.pop-up-wrap').css('display', 'none');
    });

    // Remove brred class when input value contains "1234"
    $('.input-promo').on('input', function() {
        if ($(this).val().includes('1234')) {
            $(this).removeClass('brred');
        }
    });
});



$(document).ready(function() {
    $('.list-ris-btn').on('click', function() {
        $('.pop-up-wrap-pride').css('display', 'flex');
    });

    $('.hrest').on('click', function() {
        $('.pop-up-wrap-pride').css('display', 'none');
    });
});

$(document).ready(function() {
    $('.get-prise').on('click', function() {
        $('.pop-up-wrap-pay').css('display', 'flex');
    });
    $('.hrest').on('click', function() {
        $('.pop-up-wrap-pay').css('display', 'none');
    });
});


$(document).ready(function() {
    const emailPhoneRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]+|^\d{7,15}$/;

    function validateEmailPhone(input) {
        if (emailPhoneRegex.test(input.val())) {
            input.removeClass("brred");
            return true;
        } else {
            input.addClass("brred");
            return false;
        }
    }

    $(".input-email").on("input", function() {
        validateEmailPhone($(this));
    });

    function validateCodeInput(input) {
        if (input.val().length === 1) {
            input.removeClass("brred");
            return true;
        } else {
            input.addClass("brred");
            return false;
        }
    }

    $(".input-cod").on("input", function() {
        // Allow only digits
        this.value = this.value.replace(/[^\d]/g, '');
    
        validateCodeInput($(this));
    
        if ($(this).val().length === 1) {
            $(this).next(".input-cod").focus();
        }
    });
    
    $(".input-cod").on("keydown", function(e) {
        if (e.key === "Backspace" && $(this).val().length === 0) {
            $(this).prev(".input-cod").focus();
        }
    });
    

    $("#custom-form").on("submit", function(e) {
        e.preventDefault();

        let isValid = true;

        if (!validateEmailPhone($(".input-email"))) {
            isValid = false;
        }

        $(".input-cod").each(function() {
            if (!validateCodeInput($(this))) {
                isValid = false;
            }
        });

        if ($(".checkbox-input:checked").length !== 2) {
            isValid = false;
            $(".checkbox-input").addClass("brred");
        } else {
            $(".checkbox-input").removeClass("brred");
        }

        if (isValid) {
            console.log("Form is valid");
            window.location.href = "exclusive.html";
        } else {
            console.log("Form is invalid");
        }
    });
});
