/* ************************************************************************************************************* */
//@TODO: ADD SHARED FOLDER THAT WILL CONTAIN A JSON FILE WITH THE SESSION_TOKEN TO USE FOR OTHER DOCKER CONTAINERS

const settings = require('settings-store');
const fs = require('fs');
require('./globals.js');
settings.init({
    appName:       "MarketKiller.keepalive", //required,
    publisherName: "IgnitionCorp", //optional
    reverseDNS:    "com.marketkiller.keepalive" //required for macOS
});

if (fs.existsSync('C:\\MarketKiller_Shared\\SessionConfig.json')) {
    //file exists....use it for scaling
    sessionConfig = require('C:\\MarketKiller_Shared\\SessionConfig.json');
    session_token = sessionConfig.session_token; 

    console.log("\nLoaded session_token from scalable config: " + session_token + "\n");

    settings.setValue("Profile.PHPSESSID", session_token);
    settings.setValue("Profile.session_token", session_token);

    setTimeout(() => {
        console.log("Sending init....");
        keepalive_f.initialize();
    }, 1500);
    //market_f.MarketRequests();

} else {
    //file doesnt exist...use first run logic
    console.log("Didnt detect scalar config...");
    process.exit(1);
}

/* ************************************************************************************************************* */

//console.log("game and launcher versions ...");
//login_f.VersionRequests();
//login_f.LoginRequests();

/* **** Finished **** */