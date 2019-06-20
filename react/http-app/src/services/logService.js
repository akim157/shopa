import * as Sentry from "@sentry/browser/dist/index";

function init() {
    Sentry.init({dsn: "https://4243d1b6d7034b7ebe1d90acd4467c0e@sentry.io/1486597"});
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
}