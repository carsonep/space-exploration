self.webpackChunkRemoteClient([116,153],{590:function(e,r,n){!function(e){"use strict";
//! moment.js locale configuration
var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function n(e,r,n,t){var s=e;switch(n){case"s":return t||r?"néhány másodperc":"néhány másodperce";case"ss":return s+(t||r)?" másodperc":" másodperce";case"m":return"egy"+(t||r?" perc":" perce");case"mm":return s+(t||r?" perc":" perce");case"h":return"egy"+(t||r?" óra":" órája");case"hh":return s+(t||r?" óra":" órája");case"d":return"egy"+(t||r?" nap":" napja");case"dd":return s+(t||r?" nap":" napja");case"M":return"egy"+(t||r?" hónap":" hónapja");case"MM":return s+(t||r?" hónap":" hónapja");case"y":return"egy"+(t||r?" év":" éve");case"yy":return s+(t||r?" év":" éve")}return""}function t(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,r,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return t.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return t.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(68))},66:function(e,r){function n(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=66}});