const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "Cloths app",
  pushApiKey: "7fefe2d8-d755-4d63-8ebb-9251495ac79a",
});
