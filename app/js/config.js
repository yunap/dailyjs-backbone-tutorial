define([], function() {
  var config = {};
  config.apiKey = '';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '244684865093-1ia8d9no6a68ndtce7flb76cbprdut3f.apps.googleusercontent.com';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});
