var GA_EVENTS = {
    UA_GTM_EVENTS_NON_INTERACT: 'uaGtmEventsNonInteract',
    UA_GTM_EVENTS             : 'uaGtmEvents'
};

var GA_EVENT_CATEGORIES = {
    REGISTRATION_FORM_DOUBLE: 'registrationFormDouble',
    REGISTRATION_FORM_WIN   : 'registrationFormWin',
    REGISTRATION_FORM_LOOSE : 'registrationFormLoose',
    REGISTRATION_FORM       : 'registrationForm'
};

var GA_EVENT_ACTIONS = {
    OPEN        : 'open',
    CLOSE       : 'close',
    CHANGE_FIELD: 'changeField',
    CLICK_BUTTON: 'clickButton',
    SEND_FORM   : 'sendForm',
    ERROR       : 'error'
};

var GA_EVENT_LABELS = {
    X           : 'x',
    OUTSIDE     : 'outside',
    EMAIL       : 'email',
    PASSWORD    : 'password',
    REGISTRATION: 'registration'
};

function sendGAEvent(event, eventCategory, eventAction, eventLabel) {
    if (!event) {
        event = '';
    }
    if (!eventCategory) {
        eventCategory = '';
    }
    if (!eventAction) {
        eventAction = '';
    }
    if (!eventLabel) {
        eventLabel = '';
    }
    window.dataLayer.push({
        'event'        : event,
        'eventCategory': eventCategory,
        'eventAction'  : eventAction,
        'eventLabel'   : eventLabel
    });
}
