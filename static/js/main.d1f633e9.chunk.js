(this.webpackJsonpshowcase=this.webpackJsonpshowcase||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/avatar.43b83825.jpg"},,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/forest.3f77e99f.jpg"},function(e,t,a){e.exports=a.p+"static/media/patients_hub.8f909dfb.png"},function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),_=a(20),r=a.n(_),i=(a(29),a(3)),c=a(4),o=a(6),s=a(5),m=a(10),u=(a(18),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.b,{to:"/",exact:!0,className:"link"},"Home"),l.a.createElement(m.b,{to:"/Rhtaylor",exact:!0,className:"link"},"About Author"),l.a.createElement(m.b,{to:"/Portfolio",exact:!0,className:"link"},"Projects"),l.a.createElement(m.b,{to:"/Resume",exact:!0,className:"link"},"Resume"))}}]),a}(n.Component)),h=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("a",{href:"https://software-for-humanity.medium.com/",target:"_blank"},l.a.createElement("i",{className:"fab fa-medium"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/randallhtaylor/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"https://github.com/rhtaylor",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"}))))}}]),a}(n.Component),p=(n.Component,a(13)),d=a.n(p),E=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement("img",{height:"80px",src:d.a,alt:"Randall Taylor"}),"Randall Taylor"),l.a.createElement("span",null,l.a.createElement("a",{href:"https://software-for-humanity.medium.com/",target:"_blank"},l.a.createElement("i",{className:"fab fa-medium"}))),l.a.createElement("p",null,"We all have trials and tribulations. I just see my hardships as a fire to forge myself within harder, stronger, and smarter. I have a science degree from the University of Arizona in Physiology with minors in Biochemistry and Business Administration.  After working within Emergency Medical Services as a 911 response EMT I learned to implement High Reliability Organization and teamwork to achieve the best outcomes for the sick and injured. EMS was the beginning of my nascent professional career."),l.a.createElement("p",null,"Later I moved into Behavioral Health, worked as a BHT, and Case Manager. I was largely unfulfilled in these roles as they had little opportunity to really make differences in people's lives."),l.a.createElement("p",null,"A multifacited mix of life experences lead me to want to pursue Software Development. I then taught myself JavaScript from codecademy and really enjoyed functional programming. Two years from the date I decided software was the correct choice and I enrolled in a coding bootcamp. Flatiron taught me the fundamentals of Software Design, debugging, and how to teach myself computer languages professionally. While enrolled I build Two Applications I was extremely proud of: Boiling Forest and PatiensHub. These are detailed on my Projects page."))}}]),a}(n.Component),f=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={visible:"box",i:0},n.i=0,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"setInter",value:function(){var e=this;this.state.i>=3&&this.setState({i:0});this.props.history.push(["/Rhtaylor","/Portfolio","/Resume"][this.state.i]),++this.state.i,this._inter=setInterval((function(){return e.setInter()}),4*this.props.delay)}},{key:"setTimer",value:function(){this.setInter(),this._timer=setTimeout(function(){this.setState({visible:"none"}),this._timer=null}.bind(this),this.props.delay)}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"box"}},l.a.createElement("pre",null,l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"WELCOME"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"TO"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"MY PORTFOLIO"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"SITE"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"HOSTED"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"BY"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"GITHUB"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"PLEASE"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"FOLLOW THE LINKS"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"TO EXPLORE MY SKILLS"))),l.a.createElement("p",{style:{display:"".concat(this.state.visible)}},l.a.createElement("i",null,l.a.createElement("b",null,"AND ABILITIES"))))))}}]),a}(n.Component),b=(a(35),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(u,null),l.a.createElement(h,null),l.a.createElement(f,{history:this.props.history,delay:7e3})))}}]),a}(n.Component)),y=a(22),g=a.n(y),v=(a(36),a(23)),w=a.n(v),k=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"portfolio"},l.a.createElement("div",null,l.a.createElement("h1",null,"PatientsHub "),l.a.createElement("span",{className:"span_space"},l.a.createElement("a",{href:"https://github.com/rhtaylor/PatientsHubClient",target:"_blank"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://www.youtube.com/watch?v=JfEsV0Wla7w&t=3s",target:"_blank"},l.a.createElement("img",{width:"138px",height:"80px",src:w.a}))),l.a.createElement("p",null,"Application designed for Healthcare Providers to make charting easier"),l.a.createElement("p",null,"React-Redux Front-End || Rails-API Back-End application"),l.a.createElement("p",null,"Allows Providers to Chart on their Patients")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"BoilingForest"),l.a.createElement("span",{className:"span_space"},l.a.createElement("a",{href:"https://github.com/rhtaylor/tempGradientRailsJsonAPIJS",target:"_blank"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"_https://www.youtube.com/watch?v=3RqLMTvG2Tk",target:"_blank"},l.a.createElement("img",{height:"80px",src:g.a}))),l.a.createElement("p",null,"A proof of Global Warming attributed to green house gas"),l.a.createElement("p",null,"Utilizes a third party API openweathermap for real data"),l.a.createElement("p",null,"JavaScript Front-End || Ruby on Rails Back-End"),l.a.createElement("p",null,"Calculates rate of cooling from afternoon to temp past midnight"))))}}]),a}(n.Component),O=(a(37),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"SOFTWARE ENGINEER"),l.a.createElement("p",null,"Full stack software engineer experienced in Ruby on Rails, JavaScript, React, and Redux. Previous employment in EMS and behavioral health with a new focus on writing stellar software programs. I have passion for solving problems and building functional applications. Possess strong skills in learning new computer languages, creativity, emotional intelligence, delivering clean code in a timely manner, and effective communication."),l.a.createElement("p",null,"________________________________________________________________________________________________________________________________________________________________________________"),l.a.createElement("h3",null,"TECHNICAL SKILLS"),l.a.createElement("p",null," Active Record, Bootstrap, CRUD API, CSS, ES6, Github, HTML, JavaScript, JQuery, JSON, MVC, PostgreSQL, React, Redux, Rest API,  Ruby, Ruby On Rails, SCSS, SQL, SQLite, Sinatra "),l.a.createElement("p",null,"________________________________________________________________________________________________________________________________________________________________________________"),l.a.createElement("h3",null,"TECHNICAL PROJECTS"),l.a.createElement("h4",null,"PatientsHub -  Github ",l.a.createElement("a",{href:"https://github.com/rhtaylor/PatientsHubClient",target:"_blank"},"Front-End")," | ",l.a.createElement("a",{href:"https://github.com/rhtaylor/PatientsHub",target:"_blank"},"Back-End")),l.a.createElement("p",null,"An app that allows healthcare providers to virtually chart on their patients."),l.a.createElement("ul",null,l.a.createElement("li",null,"Selected Bcrypt for secured password creation/validation/authentication/login."),l.a.createElement("li",null,"Utilized PostgreSQL database to achieve data persistence."),l.a.createElement("li",null,"Wrote React-Redux front-end and Rails back-end allowing seamless dataflow for users."),l.a.createElement("li",null,"Incorporated Rails API for table relationships to organize data based on associations.")),l.a.createElement("h4",null,"Boiling Forest - Github ",l.a.createElement("a",{href:"https://github.com/rhtaylor/tempGradientRailsJsonAPIJS/tree/master/modules/front",target:"_blank"},"Front-End")," | ",l.a.createElement("a",{href:"https://github.com/rhtaylor/tempGradientRailsJsonAPIJS",target:"_blank"},"Back-End")),l.a.createElement("p",null,"As a proof of Global Warming an application that tracks rate of global cooling after sunset."),l.a.createElement("ul",null,l.a.createElement("li",null,"Centralizes real weather stations API data in JSON format to track actual global warming."),l.a.createElement("li",null,"Calculates temperature rate changes of area cooling past sunset over time as a proof of global warming."),l.a.createElement("li",null,"Personalizes the application by enabling users to check for a weather station via city and then add/track it from their database.")),l.a.createElement("p",null,"________________________________________________________________________________________________________________________________________________________________________________"))}}]),a}(n.Component)),R=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"resume"},l.a.createElement("h1",null,l.a.createElement("img",{height:"80px",src:d.a,alt:"Randall Taylor"}),"Randall Taylor"),l.a.createElement("p",null,"Phoenix, AZ | 602-999-7756 | ",l.a.createElement("a",{href:"rhtaylorgithub@gmail.com",target:"blank"},"rhtaylorgithub@gmail.com")),l.a.createElement(O,null))}}]),a}(n.Component),j=a(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(m.a,{basename:"/showcase",getUserConfirmation:function(e,t){t(window.confirm(e))}},l.a.createElement(j.a,{path:"/",component:b}),l.a.createElement(j.a,{exact:!0,path:"/Rhtaylor",render:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return l.a.createElement(E,t)}}),l.a.createElement(j.a,{exact:!0,path:"/Portfolio",render:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return l.a.createElement(k,t)}}),l.a.createElement(j.a,{exact:!0,path:"/Resume",render:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return l.a.createElement(R,t)}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.d1f633e9.chunk.js.map