/* jshint node: true */
var contentSecurityPolicy = {
  'default-src': "'none'",
  'script-src': "'self' www.google-analytics.com:*",
  'font-src': "'self'",
  'connect-src': "'self' localhost:* json-api.rockandrollwithemberjs.com:*",
  'img-src': "'self' www.google-analytics.com:*",
  'style-src': "'self' 'unsafe-inline'",
  'media-src': "'self'"
};

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rarwe',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: contentSecurityPolicy
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = contentSecurityPolicy;
    ENV.contentSecurityPolicy['script-src'] = ENV.contentSecurityPolicy['script-src'] + " 'unsafe-inline'";
    ENV.apiHost = 'http://json-api.rockandrollwithemberjs.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
