$(document).ready(function () {
    setTimeout(function () {
        $('header a.scroll').addClass('shake');
    }, 2000);

    $('a[href*="#"]:not([href="#"]):not(".terms-popup-link")').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    var currentForm = null;
    $('.terms-popup-link').fancybox({
        beforeShow: function () {
        },
        tpl: {
            closeBtn: '<a title="Close" class="fancybox-close fancybox-close-word" href="javascript:;"></a>'
        }
    });
    /**
     * Форма 1: FORM_REG
     * @type {RegistrationModel}
     */
    var registrationModel2P1 = new RegistrationModel(RegistrationModel.FORM_2_P);
    registrationModel2P1.addEmailInput('.form-1 .login').addPasswordInput('.form-1 .pass').addRulesInput('#register-checkbox-1').setCurrency('usd');
    registrationModel2P1.setErrorHandler(function (errors) {
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM, GA_EVENT_ACTIONS.ERROR);
        alert(errors);
    });
    registrationModel2P1.setBehaviorAfterRegistration(function () {
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM, GA_EVENT_ACTIONS.SEND_FORM);
        window.top.location.href = 'https://olymptrade.com/platform/tutorial';
    });

    $('.form-1 .login').on('blur', function (event) {
        if ($(event.currentTarget).is(":visible")) {
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM, GA_EVENT_ACTIONS.CHANGE_FIELD, GA_EVENT_LABELS.EMAIL);
        }
    });

    $('.form-1 .pass').on('blur', function (event) {
        if ($(event.currentTarget).is(":visible")) {
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM, GA_EVENT_ACTIONS.CHANGE_FIELD, GA_EVENT_LABELS.PASSWORD);
        }
    });

    $('.form-1').on('submit', function (event) {
        event.preventDefault();
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM, GA_EVENT_ACTIONS.CLICK_BUTTON, GA_EVENT_LABELS.REGISTRATION);
        registrationModel2P1.execute();
    });

    /**
     * Форма 2: FORM_DOUBLE
     * @type {RegistrationModel}
     */
    var registrationModel2P2 = new RegistrationModel(RegistrationModel.FORM_2_P);
    registrationModel2P2.addEmailInput('.form-2 .login').addPasswordInput('.form-2 .pass').addRulesInput('#register-checkbox-2').setCurrency('usd');
    registrationModel2P2.setErrorHandler(function (errors) {
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_DOUBLE, GA_EVENT_ACTIONS.ERROR);
        alert(errors);
    });
    registrationModel2P2.setBehaviorAfterRegistration(function () {
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_DOUBLE, GA_EVENT_ACTIONS.SEND_FORM);
        window.top.location.href = 'https://olymptrade.com/platform/tutorial';
    });

    $('.form-2 .login').on('blur', function () {
        if ($(event.currentTarget).is(":visible")) {
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_DOUBLE, GA_EVENT_ACTIONS.CHANGE_FIELD, GA_EVENT_LABELS.EMAIL);
        }
    });

    $('.form-2 .pass').on('blur', function () {
        if ($(event.currentTarget).is(":visible")) {
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_DOUBLE, GA_EVENT_ACTIONS.CHANGE_FIELD, GA_EVENT_LABELS.PASSWORD);
        }
    });

    $('.form-2').on('submit', function (event) {
        event.preventDefault();
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_DOUBLE, GA_EVENT_ACTIONS.CLICK_BUTTON, GA_EVENT_LABELS.REGISTRATION);
        registrationModel2P2.execute();
    });

    /**
     * Форма 3: FORM_WIN
     * @type {RegistrationModel}
     */
    var registrationModel2P3 = new RegistrationModel(RegistrationModel.FORM_2_P);
    registrationModel2P3.addEmailInput('.form-3 .login').addPasswordInput('.form-3 .pass').addRulesInput('#register-checkbox-3').setCurrency('usd');
    registrationModel2P3.setErrorHandler(function (errors) {
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_WIN, GA_EVENT_ACTIONS.ERROR);
        alert(errors);
    });
    registrationModel2P3.setBehaviorAfterRegistration(function () {
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_WIN, GA_EVENT_ACTIONS.SEND_FORM);
        window.top.location.href = 'https://olymptrade.com/platform/tutorial';
    });

    $('.form-3 .login').on('blur', function () {
        if ($(event.currentTarget).is(":visible")) {
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_WIN, GA_EVENT_ACTIONS.CHANGE_FIELD, GA_EVENT_LABELS.EMAIL);
        }
    });

    $('.form-3 .pass').on('blur', function () {
        if ($(event.currentTarget).is(":visible")) {
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_WIN, GA_EVENT_ACTIONS.CHANGE_FIELD, GA_EVENT_LABELS.PASSWORD);
        }
    });

    $('.form-3').on('submit', function (event) {
        event.preventDefault();
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_WIN, GA_EVENT_ACTIONS.CLICK_BUTTON, GA_EVENT_LABELS.REGISTRATION);
        registrationModel2P3.execute();
    });

    /**
     * Форма 4: FORM_LOOSE
     * @type {RegistrationModel}
     */
    var registrationModel2P4 = new RegistrationModel(RegistrationModel.FORM_2_P);
    registrationModel2P4.addEmailInput('.form-4 .login').addPasswordInput('.form-4 .pass').addRulesInput('#register-checkbox-4').setCurrency('usd');
    registrationModel2P4.setErrorHandler(function (errors) {
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_LOOSE, GA_EVENT_ACTIONS.ERROR);
        alert(errors);
    });
    registrationModel2P4.setBehaviorAfterRegistration(function () {
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_LOOSE, GA_EVENT_ACTIONS.SEND_FORM);
        window.top.location.href = 'https://olymptrade.com/platform/tutorial';
    });

    $('.form-4 .login').on('blur', function () {
        if ($(event.currentTarget).is(":visible")) {
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_LOOSE, GA_EVENT_ACTIONS.CHANGE_FIELD, GA_EVENT_LABELS.EMAIL);
        }
    });

    $('.form-4 .pass').on('blur', function () {
        if ($(event.currentTarget).is(":visible")) {
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_LOOSE, GA_EVENT_ACTIONS.CHANGE_FIELD, GA_EVENT_LABELS.PASSWORD);
        }
    });

    $('.form-4').on('submit', function (event) {
        event.preventDefault();
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, GA_EVENT_CATEGORIES.REGISTRATION_FORM_LOOSE, GA_EVENT_ACTIONS.CLICK_BUTTON, GA_EVENT_LABELS.REGISTRATION);
        registrationModel2P4.execute();
    });

    //МОДАЛЬНЫЕ ОКНА
    var buttonsLeanModal = $("a[rel*=leanModal]");
    buttonsLeanModal.leanModal({overlay: 0.6, closeButton: ".modal-close"});
    buttonsLeanModal.data('isOpen', false);
    var statusOpen = false;
    buttonsLeanModal.on('click', function (event) {
        buttonsLeanModal.each(function (index, element) {
            if ($(element).data('isOpen') === true) {
                statusOpen = true;
            }
        });
        if (statusOpen === true) {
            event.preventDefault()
        } else {
            statusOpen = true;
            currentForm = GA_EVENT_CATEGORIES.REGISTRATION_FORM;
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS_NON_INTERACT, currentForm, GA_EVENT_ACTIONS.OPEN);
        }
    });

    var popupDelay = 60000;
    var isDelay = false;
    setTimeout(function () {
        $(window).on('mousemove', function (e) {
            if ((e.clientY <= 5) && ($(window).width() >= 1000) && !statusOpen) {
                if (!isDelay) {
                    isDelay = true;
                    setTimeout(function () {
                        isDelay = false;
                    }, popupDelay);

                    $('#lean_overlay').fadeIn(400);
                    $('#x2-form').fadeIn(400);
                    statusOpen = true;
                    currentForm = GA_EVENT_CATEGORIES.REGISTRATION_FORM_DOUBLE;
                    sendGAEvent(GA_EVENTS.UA_GTM_EVENTS_NON_INTERACT, currentForm, GA_EVENT_ACTIONS.OPEN);
                }
            }
        });
    }, 30000);


    $('.modal-close').on('click', function () {
        statusOpen = false;
        $('.form').fadeOut();
        $('#lean_overlay').fadeOut();
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, currentForm, GA_EVENT_ACTIONS.CLOSE, GA_EVENT_LABELS.X);
    });

    $('#lean_overlay').on('click', function () {
        statusOpen = false;
        $('.form').fadeOut();
        $(this).fadeOut();
        sendGAEvent(GA_EVENTS.UA_GTM_EVENTS, currentForm, GA_EVENT_ACTIONS.CLOSE, GA_EVENT_LABELS.OUTSIDE);
    });

    function win() {
        if (statusOpen === false) {
            statusOpen = true;
            $('#win-form').fadeIn();
            $('#lean_overlay').show();
            currentForm = GA_EVENT_CATEGORIES.REGISTRATION_FORM_WIN;
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS_NON_INTERACT, currentForm, GA_EVENT_ACTIONS.OPEN);
        }
    }

    function loose() {
        if (statusOpen === false) {
            statusOpen = true;
            $('#lose-form').fadeIn();
            $('#lean_overlay').show();
            currentForm = GA_EVENT_CATEGORIES.REGISTRATION_FORM_LOOSE;
            sendGAEvent(GA_EVENTS.UA_GTM_EVENTS_NON_INTERACT, currentForm, GA_EVENT_ACTIONS.OPEN);
        }
    }

    window._globalsLandingGameConfig = {
        pair        : 'EURUSD',
        dealDuration: 8,
        winPercent  : 70,
        dealEvets   : {
            start   : function (deal) {
                if ($('.block-platform .trade-time').length) {
                    $('.block-platform .trade-time').removeClass('hide');
                    $('.block-platform .trade').addClass('hide');
                }
            },
            finish  : function (deal) {

                if ($('.block-platform .trade-time').length) {
                    $('.block-platform .trade-time').addClass('hide');
                    $('.block-platform .trade').removeClass('hide');
                }

                if (deal.dir === 'up') {
                    if (deal.curs_open < deal.curs_close) {
                        win();
                    } else {
                        loose();
                    }
                } else {
                    if (deal.curs_open > deal.curs_close) {
                        win();
                    } else {
                        loose();
                    }
                }
            },
            progress: function (time) {
                $('.trade-time .time').html(time);
            }
        }
    }
});
