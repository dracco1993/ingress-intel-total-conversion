// ==UserScript==
// @id             iitc-plugin-ap-heat-map
// @name           IITC plugin: AP Heat Map
// @category       Tweaks
// @version        0.1.0.@@DATETIMEVERSION@@
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      @@UPDATEURL@@
// @downloadURL    @@DOWNLOADURL@@
// @description    Displays a heat map of available AP.
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @include        https://www.ingress.com/mission/*
// @include        http://www.ingress.com/mission/*
// @match          https://www.ingress.com/mission/*
// @match          http://www.ingress.com/mission/*
// @grant          none
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////

window.plugin.apHeatMap = function() {};

window.plugin.apHeatMap.wakeup = function() {
  console.log('apHeatMap: timer fired - leaving idle mode');
}


window.plugin.apHeatMap.setup = function() {

  console.log("apHeatMap:setup()");

};

var setup = window.plugin.apHeatMap.setup;

// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
