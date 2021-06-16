/* ************************************************************************************************************* */
//@TODO: ADD SHARED FOLDER THAT WILL CONTAIN A JSON FILE WITH THE SESSION_TOKEN TO USE FOR OTHER DOCKER CONTAINERS

const settings = require('settings-store');
const fs = require('fs');
require('./globals.js');
settings.init({
    appName:       "MarketKiller", //required,
    publisherName: "IgnitionCorp", //optional
    reverseDNS:    "com.marketkiller" //required for macOS
});

/* ************************************************************************************************************* */

//console.log("game and launcher versions ...");
scaling.checkScale();
//login_f.VersionRequests();
//login_f.LoginRequests();

/* **** Finished **** */