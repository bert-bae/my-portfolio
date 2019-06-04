(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a){e.exports={education:[{title:"Lighthouse Labs",duration:"Oct 2018 - Jan 2019",responsibilities:["Fullstack Web Development"]},{title:"Simon Fraser University",duration:"Sept 2012 - Dec 2015",responsibilities:["B.A. Psychology, Minor in Business Administrations"]}],devSkills:[{name:"REST",pieData:[{value:95,color:"#F7464A"},{value:5,color:"black"}]},{name:"MVC",pieData:[{value:95,color:"#F7464A"},{value:5,color:"black"}]},{name:"HTML/CSS/SASS",pieData:[{value:80,color:"#F7464A"},{value:20,color:"black"}]},{name:"Bootstrap",pieData:[{value:80,color:"#F7464A"},{value:20,color:"black"}]},{name:"Javascript",pieData:[{value:75,color:"#F7464A"},{value:25,color:"black"}]},{name:"jQuery",pieData:[{value:75,color:"#F7464A"},{value:25,color:"black"}]},{name:"AJAX",pieData:[{value:75,color:"#F7464A"},{value:25,color:"black"}]},{name:"SQL",pieData:[{value:70,color:"#F7464A"},{value:30,color:"black"}]},{name:"Nodejs",pieData:[{value:60,color:"#F7464A"},{value:40,color:"black"}]},{name:"React",pieData:[{value:40,color:"#F7464A"},{value:60,color:"black"}]},{name:"UI/UX",pieData:[{value:40,color:"#F7464A"},{value:60,color:"black"}]},{name:"Ruby",pieData:[{value:20,color:"#F7464A"},{value:80,color:"black"}]},{name:"Rails",pieData:[{value:15,color:"#F7464A"},{value:85,color:"black"}]},{name:"WebSockets",pieData:[{value:15,color:"#F7464A"},{value:85,color:"black"}]}],otherSkills:["Management","Problem Solving","Data analysis","Training & Development","Sales"],workExperience:[{title:"Software Developer",company:"Colinkz Media",address:"610 - 610 Granville Street, Vancouver, BC",duration:"Jan 2019 - Current",responsibilities:["Working with UI/UX designer wireframes to develop website designs and features.","Participating in business development discussions with the team for future development direction.","Interacting remotely or in-person with team members on daily Agile scrums.","Fullstack development of the company site and maintaining bug fixes, style revisions, and future development."]},{title:"Service & Sales Trainer",company:"Self-Employed",address:"Lower Mainland",duration:"Feb 2018 - Current",responsibilities:["Presenting training on core skills the participants can use to succeed in their future roles working in service, sales, and team environments.","Workshops include training and guidance around problem solving, sales strategies, and soft skills such as: effective communication, professionalism, and working with teams."]},{title:"Membership Experience Manager",company:"YMCA of Greater Vancouver",address:"282 West 49th Avenue, Vancouver, BC",duration:"Feb 2017 - Oct 2018",responsibilities:["Managing and delivering daily operation of the customer service and sales team to improve customer engagement.","Engaging across departments to improve satisfaction rating from 65-70% to 85-90% over 10 months.","Increasing average monthly membership aquisition and retention consistently in 2017 - 2018.","Planning and delivering on-going customer service and conflict resolution training, improving conflict resolution with customers","Developing spreadsheet tools to automate accurate scheduling, expense tracking, and sales goal generation to generate catered sales targets for team members","Active problem solving to resolve issues across the facility with staff, customers, and other departments."]}],volunteerExperience:[{title:"YAC Council",company:"YMCA of Greater Vancouver",address:"Vancouver, BC",duration:"Apr 2016 \u2013 Oct 2018",responsibilities:[]},{title:"Peer Health Educator",company:"Simon Fraser University",address:"Burnaby, BC",duration:"Sep 2014 \u2013 Mar 2016",responsibilities:[]},{title:"Wildlife Conservation",company:"International Volunteer HQ (NPO)",address:"Ambalangoda, Sri Lanka",duration:"Jul 2014 \u2013 Aug 2014  ",responsibilities:[]},{title:"Tutor",company:"International Volunteer HQ (NPO)",address:"Faridabad, India",duration:"Jun 2014 \u2013 Jul 2014",responsibilities:[]}],interests:["Rock climbing","Hiking","Camping","Swimming","Travelling","Learning"]}},41:function(e,a,t){},57:function(e,a,t){e.exports=t(98)},98:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),i=t.n(r),s=(t(41),t(9)),c=t(10),l=t(12),m=t(11),u=t(13),d=t(24),p=t(21),g=t(103),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",function(){var e,a=document.getElementById("main-nav"),t=!0;t&&(t=!1,e=document.body.scrollTop||document.documentElement.scrollTop,setTimeout(function(){t=!0},100)),e>100?a.classList.add("scrolled"):a.classList.remove("scrolled")},!0),document.getElementById("collapse-toggle").addEventListener("click",function(){var e=document.getElementById("menu-btns"),a=document.getElementById("collapse-toggle");e.classList.contains("css-show")?(e.classList.remove("css-show"),a.classList.remove("toggled")):(e.classList.add("css-show"),a.classList.add("toggled"))},!0)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(g.a,{id:"main-nav",className:"nav-container",sticky:"top",expand:"lg",variant:"light",bg:"light"},o.a.createElement(g.a.Brand,{className:"nav-logo",href:"#"},"CODEBERT"),o.a.createElement("div",{id:"menu-btns",className:"navigation"},o.a.createElement(d.b,{className:"nav-button",exact:!0,activeClassName:"active",to:"/"},"Home"),o.a.createElement(d.b,{className:"nav-button",activeClassName:"active",to:"/projects"},"Projects"),o.a.createElement(d.b,{className:"nav-button",activeClassName:"active",to:"/resume"},"Resume")),o.a.createElement("i",{id:"collapse-toggle",className:"fas fa-bars fa-lg"}))}}]),a}(n.Component),v={jumboPhotos:{homeJumbo:{photographer:"Nate Grant",filepath:"images/home-jumbo.jpg",link:"https://unsplash.com/@nateggrant"},projectJumbo:{photographer:"Galymzhan Abdugalimov",filepath:"images/project-jumbo.jpg",link:"https://unsplash.com/@naffiq"},resumeJumbo:{photographer:"Clark Young",filepath:"images/resume-jumbo.jpg",link:"https://unsplash.com/@cbyoung"}},projects:[{title:"HapyHr",description:"HapyHr is a mock site that helps users identify happy hour deals near them. It is a simple API, website, and future mobile application. Restaurants, bars, and pubs can easily list themselves for users to locate amazing deals nearby.\n\nThis is my current project.",techStack:["React","NextJS","MySql","Objection","SaSS","Express","Knex"],imgSrc:[],projectUrl:"https://github.com/bert-bae/hapy_hr"},{title:"NuBrew",description:"NuBrew is an application that allows users to vote on their craft beer drinks and keep track of favorited drinks over time. As users expand their set of craft beers tried over time, the application will provide recommendations based on their previous likes based on IBU and category/style of drink. Of course, users need to be able to take that plunge and explore uncharted territories by trying something new by random as well, even if they really don't like that one style, taste changes over time!\n\nWe want to make it as easy as possible, so for those that bought their drinks with labels, the application was created while experimenting machine learning and label recognition using Google AutoML Vision.\n\nIn collaboration with Adam Romeo (https://adamromeo.dev/)",techStack:["React-Native","PostgreSql","Knex","NodeJS","Express","SaSS","Google AutoML"],imgSrc:["images/projects/nubrew.png","images/projects/nubrewExample.gif","images/projects/nubrewExample2.gif"],projectUrl:"https://github.com/bert-bae/nubrew"},{title:"ChattyApp",description:"This is a Chat application that was created as a part of Lighthouse Lab's program while learning and experimenting with React and Websockets. You can connect with others on the local network via websockets to have a conversation! Domain specific languages were implemented as experimentation as well as logic to allow emojis, images, and username modification.\n\nNot crazy, but interesting first step learning React with Websockets!",techStack:["NodeJS","Javascript","React","Websockets","Express","SaSS"],imgSrc:["images/projects/chatty1.png","images/projects/chatty2.png","images/projects/chatty3.png","images/projects/chatty4.png"],projectUrl:"https://github.com/bert-bae/chattyapp"},{title:"Red Square",description:"As a rushed one week challenge, a group of us created an event creation platform for users to share their events by link for users to vote on their available times (copy of doodle).\n\nIn partnership with Dawson Ley (https://github.com/Anarchonist7) and Mark Barlescu.",techStack:["Javascript","jQuery","PostgreSql","Knex","EJS","Express","Ajax","SaSS"],imgSrc:["images/projects/rs1.png","images/projects/rs2.png","images/projects/rs3.png","images/projects/rs4.png","images/projects/rs5.png"],projectUrl:"https://github.com/bert-bae/outdoodle"},{title:"Layer-CSS",description:"Easy to use client-side Javascript and CSS package for applying overlay effects to your elements. Layer-CSS gives you a quick insight into creating overlays, gradients, and shadows on your containers. Specific class names apply the overlays you want or it can be initiated by client-side Javascript to quickly apply Layer-CSS styles to a target Element. \n\nSimply load index.css to your stylesheet assets and layer-css.js to your Javascript files which contains global functions to apply styling to target elements and call them in your client-side Javascript.",techStack:["Javascript","jQuery","SaSS"],imgSrc:["images/projects/layer0.png","images/projects/layer1.png","images/projects/layer2.png","images/projects/layer3.png"],projectUrl:"https://github.com/bert-bae/layer-css"},{title:"Colinkz Media",description:"Colinkz is founded by Noi Soudarack. It is intended to be a platform for communities to connect with other cultural groups by providing access to events, restaurants, and directories to local organizations for many cultural groups. As a software developer for Colinkz, I work closely with the founder, CTO, and designers to develop and maintain existing and new features for the company website.\n\nIf interested, learn more about what we do and support our goal of increasing multicultural diversity across the world!\n\n Link:  https://www.colinkz.com",techStack:["Unfortunately this information cannot be released as it is the intellectual property of the organization!"],imgSrc:["images/projects/colinkz1.jpg","images/projects/colinkz2.jpg","images/projects/colinkz3.jpg","images/projects/colinkz-logo.png"],projectUrl:"https://www.colinkz.com"}]},b=t(100);function f(e){var a=e.imageSrc,t=e.photoBy,n=e.imgUrl;return o.a.createElement(b.a,{className:"home-images",fluid:!0},o.a.createElement("div",{className:"img-overflow"},o.a.createElement(b.a,{className:"home-jumbo",fluid:!0,style:{backgroundImage:"url(".concat(a,")")}}),o.a.createElement("a",{href:n},o.a.createElement("div",{className:"photo-credit"},o.a.createElement("p",{className:"miniheader"},"Photo by: ",t),o.a.createElement("p",{className:"miniheader"},"Unsplashed Link")))))}var E=t(101),y=t(104);function k(){var e=o.a.createElement(E.a,{id:"contact-popover",title:"Contact Information"},o.a.createElement(b.a,{className:"contact-container"},o.a.createElement(b.a,{className:"section-container container-column"},o.a.createElement("p",{className:"sectionheader"},"Personal Email"),o.a.createElement("a",{className:"content-text",href:"mailto:elbert.bae@gmail.com?Subject=Mail%20from%20CodeBert"},"elbert.bae@gmail.com")),o.a.createElement(b.a,{className:"section-container container-column"},o.a.createElement("p",{className:"sectionheader"},"Work Email"),o.a.createElement("a",{className:"content-text",href:"mailto:elbert@colinkz.com?Subject=Tell%20me%20about%20Colinkz!"},"elbert@colinkz.com")),o.a.createElement(b.a,{className:"section-container container-column"},o.a.createElement("p",{className:"sectionheader"},"Phone"),o.a.createElement("p",{className:"content-text"},"(778)-908-0350"))));return o.a.createElement("div",{className:"contact-container"},o.a.createElement("div",{className:"center contact-icon"},o.a.createElement("a",{className:"profile-icons",href:"https://github.com/bert-bae"},o.a.createElement("span",{className:"fa-stack"},o.a.createElement("i",{className:"circle-rotate fas fa-circle-notch fa-stack-2x"}),o.a.createElement("i",{className:"circle-rotate-slow fab fa-github fa-stack-1x"})))),o.a.createElement("div",{className:"center contact-icon"},o.a.createElement("a",{className:"profile-icons",href:"https://www.linkedin.com/in/bert92/"},o.a.createElement("span",{className:"fa-stack"},o.a.createElement("i",{className:"circle-rotate fas fa-circle-notch fa-stack-2x"}),o.a.createElement("i",{className:"circle-rotate-slow fab fa-linkedin-in fa-stack-1x"})))),o.a.createElement("div",{className:"center contact-icon contact-card"},o.a.createElement(y.a,{trigger:"click",placement:"top",overlay:e},o.a.createElement("span",{className:"fa-stack profile-icons contact-info"},o.a.createElement("i",{className:"circle-rotate fas fa-circle-notch fa-stack-2x"}),o.a.createElement("i",{className:"circle-rotate-slow fas fa-user-circle fa-stack-1x"})))))}function N(){return o.a.createElement("div",{className:"about-me-container"},o.a.createElement("div",{className:"highlight-container"},o.a.createElement("div",{className:"highlight-image odd",style:{backgroundImage:"url(images/home-1.jpg)"}}),o.a.createElement("div",{className:"highlight-content"},o.a.createElement("p",{className:"subheader"},"About Me"),o.a.createElement("p",{className:"content"},"My name is Elbert Bae and I am a currently full-stack NodeJS developer, but experimenting with other languages on the side. I have a particular interest in user experience and responsive design, but find it fascinating how data can be analyzed to meet the user and client needs. Having worked in customer service, sales, training, and management in the past, my experience drives me towards creating efficient workflows that improve the experience of organizations and customers. Achievable through simple, elegant designs, and intuitive user experiences!"))),o.a.createElement("div",{className:"highlight-container"},o.a.createElement("div",{className:"highlight-content"},o.a.createElement("p",{className:"subheader"},"My Journey"),o.a.createElement("p",{className:"content"},"I too was once a child... And thought coding was magic. My most notable experience prior to development is management with the YMCA's customer service and sales teams. Having lead and worked in a challenging and fulfilling role motivated me to continue learning about the tools that can and will improve the challenges of a chaotic day-to-day operation. With a background in Psychology and Business from Simon Fraser University, I focus on the experience of users and customers on driving business growth and development. Something that is a core driver in why I began my path into software development.")),o.a.createElement("div",{className:"highlight-image even",style:{backgroundImage:"url(images/home-2.jpg)"}})),o.a.createElement("div",{className:"highlight-container"},o.a.createElement("div",{className:"highlight-image odd",style:{backgroundImage:"url(images/home-3.jpg)"}}),o.a.createElement("div",{className:"highlight-content"},o.a.createElement("p",{className:"subheader"},"Present Role"),o.a.createElement("p",{className:"content"},"Community, Connection, Culture ",o.a.createElement("br",null),o.a.createElement("br",null)," As the main software developer for Colinkz Media, I am responsible for the full-stack maintenance and development of our organization's website. Our team works together to create a cultural platform that will be the future gateway used to improving our understanding of diverse cultures and our community. To learn more about the organization:",o.a.createElement("a",{href:"https://www.colinkz.com/story",alt:"Link to Colinkz Media"},"visit our site!"),"."))))}var w=function(e){function a(e){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=v.jumboPhotos.homeJumbo;return o.a.createElement("div",{className:"home-container"},o.a.createElement(f,{imageSrc:e.filepath,photoBy:e.photographer,imgUrl:e.link}),o.a.createElement(N,{imgSrc:"/images/home-img1.jpg"}))}}]),a}(n.Component);function j(e){var a=e.title,t=e.description,n=e.imgSrc,r=e.viewProject,i=e.index;return o.a.createElement("div",{className:"view-project",onClick:function(){r(i)},alt:"View project details"},o.a.createElement("div",{className:"card-container"},o.a.createElement("div",{className:"card-overflow"},o.a.createElement("div",{className:"card-image",style:{backgroundImage:"url(".concat(n,")")}})),o.a.createElement("div",{className:"card-content"},o.a.createElement("p",{className:"card-title"},a),o.a.createElement("p",{className:"card-description"},t))))}function S(e){var a=e.title,t=e.description,n=e.techStack,r=e.projectImages;return o.a.createElement("div",{className:"project-details section-container container-column"},o.a.createElement("div",{className:"inner-container"},o.a.createElement("div",{className:"content-description"},o.a.createElement("h1",{className:"mainheader"},a),o.a.createElement("p",{className:"content-text"},t)),o.a.createElement("div",{className:"content-tech"},o.a.createElement("h1",{className:"mainheader"},"Tech Stack"),o.a.createElement("ul",{className:"content-text"},n))),o.a.createElement("div",{className:"content-images"},o.a.createElement("h1",{className:"mainheader"},"Images"),o.a.createElement("div",{className:"images-container"},r)))}var C=function(e){function a(e){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){document.getElementsByClassName("modal-photo")[0];return o.a.createElement("div",{id:"photo-modal",className:"modal modal-background"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-photo","data-image-index":"null",style:{backgroundImage:'url("'.concat(this.props.imageSrc,")")}},o.a.createElement("div",{className:"modal-close",onClick:function(e){document.getElementById("photo-modal").style.display="none"}},"Close"))))}}]),a}(n.Component),x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={title:null,description:null,techStack:null,projectImages:null},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=o.a.createRef(),t=v.jumboPhotos.projectJumbo;var n=function(a){var t=v.projects[a].techStack.map(function(e,a){return o.a.createElement("li",{key:a},e)}),n=v.projects[a].imgSrc.map(function(e,a){return o.a.createElement("div",{className:"project-image","data-image-src":e,style:{backgroundImage:"url(".concat(e,")")},key:a,onClick:function(e){!function(e){var a=e.target.dataset.imageSrc;document.getElementsByClassName("modal-photo")[0].style.backgroundImage='url("'.concat(a,'")'),document.getElementById("photo-modal").style.display="block"}(e)}})});e.setState({title:v.projects[a].title,description:v.projects[a].description,techStack:t,projectImages:n})},r=function(e,a){a.scrollLeft+=e},i=v.projects.map(function(e,a){var t;return e.description.length>100&&(t=e.description.slice(0,100)+"..."),o.a.createElement(j,{title:e.title,description:t,imgSrc:e.imgSrc[0],viewProject:n,index:a,key:a})});return o.a.createElement("div",{className:"projects-container"},o.a.createElement(f,{imageSrc:t.filepath,photoBy:t.photographer,imgUrl:t.link}),o.a.createElement(C,null),o.a.createElement("div",{className:"project-cards"},o.a.createElement("div",{className:"scroll-container",ref:a},i),o.a.createElement("div",{className:"control right-container",onClick:function(){r(258,a.current)}},o.a.createElement("i",{className:"arrow right-control"})),o.a.createElement("div",{className:"control left-container",onClick:function(){r(-258,a.current)}},o.a.createElement("i",{className:"arrow left-control"}))),!this.state.title&&o.a.createElement("div",{className:"project-details section-container container-column"},o.a.createElement("h3",{style:{textAlign:"center"}},"Click a card to view project details.")),this.state.title&&o.a.createElement(S,{title:this.state.title,description:this.state.description,techStack:this.state.techStack,projectImages:this.state.projectImages}))}}]),a}(n.Component),A=t(102),I=t(56);function O(e){var a=e.devSkill;return o.a.createElement("div",{className:"dev-skill"},o.a.createElement(I.Pie,{data:a.pieData,options:{segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:0,animationSteps:75,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'},width:"50",height:"50"}),o.a.createElement("p",{className:"miniheader"},a.name))}function B(e){var a=e.job,t=a.responsibilities.map(function(e,a){return o.a.createElement("li",{key:"res"+a},e)});return o.a.createElement("div",{className:"resume-content"},o.a.createElement("div",{className:"resume-header"},o.a.createElement("p",{className:"job-title"},a.title,o.a.createElement("span",{className:"company-name"},a.company&&", "+a.company)),o.a.createElement("p",{className:"job-duration"},a.duration)),a.organization||a.address&&o.a.createElement("p",{className:"job-organization"},a.organization,o.a.createElement("span",{className:"city"},a.address)),o.a.createElement("div",{className:"responsibilities-container"},o.a.createElement("ul",null,t)))}var L=t(25),z=function(e){function a(e){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=v.jumboPhotos.resumeJumbo,a=L.workExperience.map(function(e,a){return o.a.createElement(B,{job:e,key:"exp"+a})}),t=L.volunteerExperience.map(function(e,a){return o.a.createElement(B,{job:e,key:"vol"+a})}),n=L.devSkills.map(function(e,a){return o.a.createElement(O,{devSkill:e,key:"skill"+a})}),r=L.education.map(function(e,a){return o.a.createElement(B,{job:e,key:"school"+a})}),i=L.interests.map(function(e,a){return o.a.createElement("li",{key:"interest"+a},e)});return o.a.createElement("div",{className:"resume-container"},o.a.createElement(f,{imageSrc:e.filepath,photoBy:e.photographer,imgUrl:e.link}),o.a.createElement("div",{className:"section-container container-column"},o.a.createElement("h1",{className:"mainheader"},"RESUME"),o.a.createElement(A.a,{className:"subsection bs-column"},o.a.createElement("h1",{className:"subheader"},"Developer Skills"),o.a.createElement(A.a,{className:"chartjs-graph skills-container"},n)),o.a.createElement(A.a,{className:"subsection bs-column",lg:12,sm:12},o.a.createElement("h1",{className:"subheader"},"Experiences"),a),o.a.createElement(A.a,{className:"subsection bs-column",lg:12,sm:12},o.a.createElement("h1",{className:"subheader"},"Volunteer Experience"),t),o.a.createElement(A.a,{className:"subsection bs-column",lg:12,sm:12},o.a.createElement("h1",{className:"subheader"},"Education"),r),o.a.createElement(A.a,{className:"subsection  bs-column",lg:12,sm:12},o.a.createElement("h1",{className:"subheader"},"Interests"),o.a.createElement("ul",null,i))))}}]),a}(n.Component);function J(){return o.a.createElement("div",{className:"footer-section"},o.a.createElement("div",{className:"footer-content"},o.a.createElement("p",{className:"owner"},"\xa9 2019 Elbert Bae"),o.a.createElement("p",{className:"content"},"Contact information can be found in the following links.")),o.a.createElement(k,null))}var M=function(e){function a(e){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(d.a,{basename:"/my-portfolio"},o.a.createElement(h,null),o.a.createElement(p.a,{exact:!0,path:"/",component:w}),o.a.createElement(p.a,{path:"/projects",component:x}),o.a.createElement(p.a,{path:"/resume",component:z}),o.a.createElement(J,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[57,1,2]]]);
//# sourceMappingURL=main.4b4b8c4b.chunk.js.map