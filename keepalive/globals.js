const settings = require('settings-store');

settings.init({
    appName:       "MarketKiller", //required,
    publisherName: "IgnitionCorp", //optional
    reverseDNS:    "com.marketkiller" //required for macOS
});
//=====================================================

//=====================================================
// initialize settings
settings.setValue("Profile.username", "dk1ng88"); //username
settings.setValue("Profile.password", "1f0c9f3f66fbf184967d89395b4d36f0"); //MD5 of password
settings.setValue("Profile.hwCode", "hwCode=#1-04c03b481cc8b36d25f5b316ff527c2903f14e8a:b1faa03020ed5add8c77c77b9c9c8ec51692ce62:e0989ea520b1f441eeb96a094fdb2bbd9d6c16d8-cc48a73281ec89fc7ae0a85086f1e2c621fb6ed9-46200bc7f3bfa24d93110563ea6344790b537426-f800ee775222fb452f54fb6eaf2e0b837cc19e89-a4861623f038997315f42658894026081c2b2e95-aaf5be44870675054f34d4febfc3fd54"); //HWID
settings.setValue("Profile.uid", "5e41a914f1f97f2b8e2940fd"); //profile UID
//settings.setValue("Profile.PHPSESSID", ""); //setValue dynamically
settings.setValue("Profile.access_token", ""); //setValue dynamically
settings.setValue("Profile.session_token", ""); //setValue dynamically

//initialize game constants
settings.setValue('GameConstants.GameMajor', "0.12.3.6090");
settings.setValue('GameConstants.UnityPlayerVersion', "UnityPlayer/2018.4.13f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)");
settings.setValue('GameConstants.LauncherVersion', "0.9.3.1057");
settings.setValue('GameConstants.XUnityVersion', "2018.4.13f1");
settings.setValue('GameConstants.AppVersion', "EFT Client 0.12.3.6090");
//=====================================================
// main libraries
global.request 	= require('request');
global.fs		= require('fs');
global.zlib 	= require('zlib');
global.http 	= require('https');
//=====================================================
// global variables to change
global.gameVersion 		= ''; // should be auto updated
global.launcherVersion 	= ''; // should be auto updated
global.PHPSESSID 		= settings.value("Profile.PHPSESSID"); // this need to be empty it will updated by script
global.launcher_url 	= "launcher.escapefromtarkov.com"; 	// launcher backend
global.url 				= "prod.escapefromtarkov.com";	// game backend
global.url_trade 		= "trading.escapefromtarkov.com";	// trading backend
global.url_ragfair 		= "ragfair.escapefromtarkov.com";	// ragfair backend (not sure if im not done any typo there)
global.userAgent 		= settings.value("GameConstants.UnityPlayerVersion"); // take that in mind to update it from time to time
global.backendVersion 	= '6';
global.taxonomyVersion 	= '341';
// profile settings
global.hwCode = settings.value("Profile.hwCode");
global.access_token = '';
global.session_token = settings.value("Profile.session_token");
////////// 
global.integer = 0; 		// incrementor used to not get banned ? who fucking knows
global.cookieString = ''; 	// not use ?
global.L_TOKEN = ''; 		// not use ?
global.profileID = settings.value("Profile.uid"); 		// your profile ID you should update it after login to game
global.language = 'en'; 	// not use ?
//=====================================================
// Local Script files
global.util 	= require('./utility.js');
global.keepalive_f = require('./_keepalive.js');