(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.f9d3ec8a.png"},,function(e,t,a){e.exports=a.p+"static/media/health.dcdd071c.png"},function(e,t,a){e.exports=a.p+"static/media/economic.05ed9839.png"},function(e,t,a){e.exports=a.p+"static/media/environmental.882b8f4c.png"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t),a.d(t,"countries",function(){return n});var n=[{id:1,name:"Poland",code:"PL"},{id:2,name:"Germany",code:"DE"},{id:3,name:"Spain",code:"ES"},{id:4,name:"France",code:"FR"},{id:5,name:"Albania",code:""},{id:6,name:"Andorra",code:"AD"},{id:7,name:"Austria",code:""},{id:8,name:"Belarus",code:""},{id:9,name:"Belgium",code:"BE"},{id:10,name:"Bosnia and Herzegovina",code:"BA"},{id:11,name:"Bulgaria",code:""},{id:12,name:"Croatia",code:"HR"},{id:13,name:"Czech Republic",code:"CZ"},{id:14,name:"Denmark",code:"DK"},{id:15,name:"Estonia",code:""},{id:16,name:"Finland",code:"FI"},{id:17,name:"Georgia",code:""},{id:18,name:"Greece",code:""},{id:19,name:"Hungary",code:"HU"},{id:20,name:"Iceland",code:""},{id:21,name:"Ireland",code:"IE"},{id:22,name:"Italy",code:"IT"},{id:23,name:"Latvia",code:"LV"},{id:24,name:"Lithuania",code:"LT"},{id:25,name:"Luxembourg",code:"LU"},{id:26,name:"Malta",code:"MT"},{id:27,name:"Moldova",code:""},{id:28,name:"Montenegro",code:""},{id:29,name:"Netherlands",code:"NL"},{id:30,name:"North Macedonia",code:"MK"},{id:31,name:"Norway",code:"NO"},{id:32,name:"Portugal",code:"PT"},{id:33,name:"Romania",code:""},{id:34,name:"Serbia",code:"RS"},{id:35,name:"Slovakia",code:"SK"},{id:36,name:"Slovenia",code:"SI"},{id:37,name:"Sweden",code:""},{id:38,name:"Switzerland",code:"CH"},{id:39,name:"Turkey",code:""},{id:40,name:"Ukraine",code:""},{id:41,name:"United Kingdom",code:"GB"},{id:42,name:"Kosovo",code:"XK"}]},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),i=(a(19),a(20),a(21),a(22),a(9)),c=a.n(i),s=function(){return o.a.createElement("nav",{className:"navbar navbar-dark bg-primary box-shadow mb-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("img",{src:c.a,width:"45",height:"45",className:"d-inline-block align-top inverted mt-1",alt:"logo"}),o.a.createElement("span",{className:"navbarTitle ml-2"},"AirTab"))))},u=function(){return o.a.createElement("footer",{className:"navbar navbar-dark bg-primary mt-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row left"},o.a.createElement("div",{className:"col"},o.a.createElement("span",null,"\xa9 2019 copyright by AirTab")))))},d=a(1),m=a(2),h=a(3),p=a(5),f=a(4),y=a(6),g=function(e){return o.a.createElement("option",{value:e.name,id:e.id},e.name)},v=a(23),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={inputValue:"",selectedCountry:[],selectedCountryCode:"",inputSize:0,groupOfCountries:"",tableSize:0},a.resetInputState=function(){a.setState({inputValue:"",selectedCountry:[],selectedCountryCode:"",inputSize:0,groupOfCountries:"",tableSize:0})},a.handleChangeInput=function(e){var t=e.target.value.toUpperCase();a.setState({inputValue:t})},a.handleSelectCountry=function(e){var t=e.target.value,n=e.target.id;a.setState({inputValue:t,selectedCountryCode:n}),a.props.onHandleInputValue(t,n)},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.inputValue,o=a.selectedCountryCode,r=Object(d.a)(v.countries),l="",i=0,c=this.state.selectedCountryCode,s="",u=0;""!==t.inputValue&&""===n&&(this.resetInputState(),this.props.handleResetState()),t.inputValue!==this.state.inputValue&&(i=1===(l=r.filter(function(e){return e.name.toUpperCase().includes(n)})).length?2:l.length>5?5:l.length,this.setState({selectedCountry:l,inputSize:i})),t.inputValue.length>1&&""===this.state.inputValue&&this.setState({inputValue:"",selectedCountry:[],selectedCountryCode:"",inputSize:0}),t.selectedCountryCode!==o&&("DE"===c||"ES"===c||"FR"===c||"PL"===c||"GB"===c?(s="A",u=10):"BE"===c||"HR"===c||"CZ"===c||"HU"===c||"IE"===c||"MK"===c||"PT"===c||"CH"===c||"FI"===c||"NL"===c||"NO"===c?(s="B",u=5):(s="C",u=1),this.setState({groupOfCountries:s,tableSize:u}),this.props.onHandleInputValue2(u,s))}},{key:"render",value:function(){var e=this.state,t=e.selectedCountry,a=e.inputSize,n=e.inputValue,r=t.map(function(e){return o.a.createElement(g,{key:e.id,id:e.code,name:e.name})}),l=!1;return t.length>=1&&(l=!0),""===n&&(l=!1),o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{className:"form-control form-control-lg mt-3 text-center",type:"text",placeholder:"enter the name of the country",value:n,onChange:this.handleChangeInput}),o.a.createElement("div",{className:"form-group mt-3"},l&&o.a.createElement("select",{className:"custom-select custom-select-lg text-center",size:a,onClick:this.handleSelectCountry},r)))}}]),t}(n.Component),b=a(10),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).changeColorSo2=function(e){var t="";return e>125?t="red":e<=125&&e>=62?t="yellow":e<62&&(t="green"),t},a.changeColorNo2=function(e){var t="";return e>40?t="red":e<=40&&e>=20?t="yellow":e<20&&(t="green"),t},a.changeColorPm25=function(e){var t="";return e>20?t="red":e<=20&&e>=10?t="yellow":e<10&&(t="green"),t},a.changeColorPm10=function(e){var t="";return e>40?t="red":e<=40&&e>=20?t="yellow":e<20&&(t="green"),t},a.changeColorO3=function(e){var t="";return e>120?t="red":e<=120&&e>=60?t="yellow":e<60&&(t="green"),t},a.changeColorCo=function(e){var t="";return e>1e3?t="red":e<=1e3&&e>=500?t="yellow":e<500&&(t="green"),t},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=[],a=this.props.tableSize;t=1===a?[["-","-","-","-","-","-","-"]]:5===a?[["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"]]:[["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"],["-","-","-","-","-","-","-"]];for(var n=this.props.data,r=0;r<n.length;r++){var l=n[r][0].city;t[r][0]=l;for(var i=0;i<n[r].length;i++){var c="",s="",u="",d="",m="",h="";"so2"===n[r][i].parameter&&(u=n[r][i].value.toFixed(2),t[r][1]=u),"no2"===n[r][i].parameter&&(s=n[r][i].value.toFixed(2),t[r][2]=s),"pm25"===n[r][i].parameter&&(m=n[r][i].value.toFixed(2),t[r][3]=m),"pm10"===n[r][i].parameter&&(h=n[r][i].value.toFixed(2),t[r][4]=h),"o3"===n[r][i].parameter&&(d=n[r][i].value.toFixed(2),t[r][5]=d),"co"===n[r][i].parameter&&(c=n[r][i].value.toFixed(2),t[r][6]=c)}}var p=t.map(function(t){return o.a.createElement("tr",null,o.a.createElement("td",Object(b.a)({key:t[0],scope:"row"},"key",t[0][0]),t[0]),o.a.createElement("td",{className:e.changeColorSo2(t[1])},t[1]),o.a.createElement("td",{className:e.changeColorNo2(t[2])},t[2]),o.a.createElement("td",{className:e.changeColorPm25(t[3])},t[3]),o.a.createElement("td",{className:e.changeColorPm10(t[4])},t[4]),o.a.createElement("td",{className:e.changeColorO3(t[5])},t[5]),o.a.createElement("td",{className:e.changeColorCo(t[6])},t[6]))});return o.a.createElement("table",{className:"table table-striped text-center"},o.a.createElement("thead",{className:"bg-primary text-white"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"city"),o.a.createElement("th",{scope:"col"},"so2"),o.a.createElement("th",{scope:"col"},"no2"),o.a.createElement("th",{scope:"col"},"pm25"),o.a.createElement("th",{scope:"col"},"pm10"),o.a.createElement("th",{scope:"col"},"o3"),o.a.createElement("th",{scope:"col"},"co"))),o.a.createElement("tbody",null,p))}}]),t}(n.Component),S=function(e){var t=e.data,a=e.tableSize;return o.a.createElement("div",{className:"container mt-5"},o.a.createElement(C,{data:t,tableSize:a}))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={selectedCountry:"",selectedCountryCode:"",informationAboutPollution:[],cityPollutionArray:[],topCityPollutionList:[],tableSize:0,groupOfCountries:"",show_listOfTheCityPollution:!1,show_LoadingDataButton:!1,show_searchButton:!0,buttonClicked:!1,downloadedData:!1,dataPollutionReady:!1,dataCityReady:!1,resetState:!1},a.hideTable=function(){a.setState({show_listOfTheCityPollution:!1})},a.handleResetState=function(){a.setState({resetState:!0})},a.handleInputValue=function(e,t){a.setState({selectedCountry:e,selectedCountryCode:t})},a.onHandleInputValue2=function(e,t){a.setState({groupOfCountries:t,tableSize:e})},a.changeButtonStatus=function(){a.setState({show_LoadingDataButton:!0,show_searchButton:!1})},a.changeButtonStatus2=function(){a.setState({show_LoadingDataButton:!1,show_searchButton:!0})},a.buttonClicked=function(){a.setState({buttonClicked:!0})},a.resetState=function(){a.setState({selectedCountry:"",selectedCountryCode:"",informationAboutPollution:[],cityPollutionArray:[],topCityPollutionList:[],tableSize:0,groupOfCountries:"",show_listOfTheCityPollution:!0,show_LoadingDataButton:!1,show_searchButton:!0,buttonClicked:!1,downloadedData:!1,dataPollutionReady:!1,dataCityReady:!1,resetState:!1})},a.resetState2=function(){a.setState({informationAboutPollution:[],cityPollutionArray:[],topCityPollutionList:[],show_listOfTheCityPollution:!1})},a.downloadInformationAboutPollution=function(){var e=a.state.selectedCountryCode,t=a.state.groupOfCountries,n="";n="https://api.openaq.org/v1/measurements?country=".concat(e,"A"===t?"&limit=2500":"B"===t?"&limit=1500":"&limit=1000"),fetch(n).then(function(e){if(e.ok)return e;throw Error(e.status)}).catch(function(e){return alert("\n Easy, it's just a error \n  Error number ".concat(e," \n Refresh the page "))}).then(function(e){return e.json()}).then(function(e){var t=e.results;t.length>1&&a.setState({informationAboutPollution:t,downloadedData:!0})})},a.createCityPollutionArray=function(){var e=a.state.informationAboutPollution,t=a.state.selectedCountryCode,n=a.state.downloadedData,o=Object(d.a)(e),r=[],l=[],i=a.state.tableSize;if(o&&n){r=o.filter(function(e){return"so2"===e.parameter}).sort(function(e,t){return t.value-e.value}).map(function(e){return e.city});for(var c=Object(d.a)(r),s=new Set,u=0;u<c.length;u++)s.add(c[u]);var m=Object(d.a)(s).splice(0,i);r=m}if("SI"===t||"HR"===t||"IE"===t){r=o.filter(function(e){return"pm10"===e.parameter}).sort(function(e,t){return t.value-e.value}).map(function(e){return e.city});for(var h=Object(d.a)(r),p=new Set,f=0;f<h.length;f++)p.add(h[f]);var y=Object(d.a)(p).splice(0,i);r=y}for(var g=function(e){var t=o.filter(function(t){return t.city===r[e]});l.push(t)},v=0;v<i;v++)g(v);setTimeout(function(){0===a.state.cityPollutionArray.length&&0!==a.state.informationAboutPollution.length&&a.setState({cityPollutionArray:l,topCityPollutionList:r,dataPollutionReady:!0})},500)},a.handleButton=function(){a.buttonClicked(),a.changeButtonStatus(),a.downloadInformationAboutPollution()},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,o=n.informationAboutPollution,r=n.dataPollutionReady,l=n.downloadedData,i=n.resetState;t.selectedCountry!==this.state.selectedCountry&&this.resetState2(),i&&(this.resetState(),this.hideTable()),o.length>1&&this.createCityPollutionArray(),l&&r&&setTimeout(function(){a.setState({show_listOfTheCityPollution:!0})},10),r&&setTimeout(function(){a.changeButtonStatus2(),a.setState({dataPollutionReady:!1,buttonClicked:!1})},10)}},{key:"render",value:function(){var e=this.state,t=e.show_LoadingDataButton,a=e.show_searchButton,n=e.selectedCountry,r=e.selectedCountryCode,l=e.show_listOfTheCityPollution,i=e.tableSize,c=!1;return c=""!==n&&""===r,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-around"},o.a.createElement("div",{className:"col-10"},o.a.createElement("h2",{className:"mt-5 mb-4"},"Check the air quality in Europe"))),o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col-5"},o.a.createElement(E,{onHandleInputValue:this.handleInputValue,onHandleInputValue2:this.onHandleInputValue2,handleResetState:this.handleResetState})),o.a.createElement("div",{className:"col-5"},a&&o.a.createElement("button",{type:"button",className:"btn btn-outline-light btn-lg btn-block mt-3",onClick:this.handleButton},"Search"),t&&o.a.createElement("button",{className:"btn btn-outline-light btn-lg btn-block mt-3",type:"button",disabled:!0},o.a.createElement("span",{className:"spinner-border spinner-border-sm mb-1",role:"status","aria-hidden":"true"}),o.a.createElement("span",null," Loading data...")))),o.a.createElement("div",{className:"row justify-content-around"},c&&o.a.createElement("h5",{className:"mt-5"},"No data for this country. Please choose other.")),o.a.createElement("div",{className:"row mt-4"},l&&o.a.createElement(S,{data:this.state.cityPollutionArray,tableSize:i})))}}]),t}(n.Component),N=a(11),P=a.n(N),O=a(12),k=a.n(O),A=a(13),B=a.n(A),T=function(){return o.a.createElement("div",{className:"container marketing"},o.a.createElement("h1",{className:"text-center featurette-divider"},"Why air quality is important?"),o.a.createElement("div",{className:"row featurette middle"},o.a.createElement("div",{className:"col-md-7"},o.a.createElement("h2",{className:"featurette-heading"},"Health Effects of Air Pollution",o.a.createElement("span",{className:"text-muted"})),o.a.createElement("p",{className:"lead"},"Air pollution causes many negative health effects. It is associated with the respiratory system, cardiovascular system and premature death."),o.a.createElement("p",{className:"lead"},"SHORT-TERM EFFECTS: eye, nose, and throat irritation, upper respiratory infections, headaches, nausea, allergic reactions, worsen asthma and emphysema, aggravate exiting heart disease."),o.a.createElement("p",{className:"lead"},"LONG-TERM EFFECTS: chronic respiratory disease, lung cancer, heart disease, damage to lungs, brain, and nerves, birth defects, skin cancer, cataracts.")),o.a.createElement("div",{className:"col-md-5"},o.a.createElement("img",{src:P.a,alt:"health",width:"400"}))),o.a.createElement("hr",{className:"featurette-divider"}),o.a.createElement("div",{className:"row featurette middle"},o.a.createElement("div",{className:"col-md-7 order-md-2"},o.a.createElement("h2",{className:"featurette-heading"},"The economic effects of air pollution ",o.a.createElement("span",{className:"text-muted"})),o.a.createElement("p",{className:"lead"},"Air pollution has a negative impact on human health, it also affects our economy by illness of people, absenteeism at work and school, and expenses on medicines. Agricultural crops, crops and forests are damaged, which results in a loss of income for these sectors of the economy and an increase in prices for consumers. Air pollution reduces visibility and even disrupts air transport. Air pollution can also damage buildings.")),o.a.createElement("div",{className:"col-md-5 order-md-1"},o.a.createElement("img",{src:k.a,alt:"health",width:"400"}))),o.a.createElement("hr",{className:"featurette-divider"}),o.a.createElement("div",{className:"row featurette middle"},o.a.createElement("div",{className:"col-md-7"},o.a.createElement("h2",{className:"featurette-heading"},"Environmental effects of air pollution. ",o.a.createElement("span",{className:"text-muted"})),o.a.createElement("p",{className:"lead"},"Too much ozone in the atmosphere can have a detrimental effect on plants and ecosystems. These effects include:"),o.a.createElement("p",{className:"lead"},o.a.createElement("ul",null,o.a.createElement("li",null,"interfering with the ability of plants to produce and store food, making them more susceptible to certain diseases, insects, other pollutants, competition and harsh weather"),o.a.createElement("li",null,"damage to the leaves of trees and other plants"),o.a.createElement("li",null,"reducing the growth of forests and yields, potentially affecting the diversity of species in ecosystems")))),o.a.createElement("div",{className:"col-md-5"},o.a.createElement("img",{src:B.a,className:"mobile",alt:"health",width:"600"}))))};var j=function(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(w,null),o.a.createElement(T,null),o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.5f64be90.chunk.js.map