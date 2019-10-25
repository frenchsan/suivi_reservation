var HttpsProxyAgent = require('https-proxy-agent');
var proxyConfig = [{
  context: '/api/*',
  target: 'https://api.bureau401.fr',
  secure: false
}];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.https_proxy || process.env.HTTPS_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
