(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{40:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(1),a=n.n(s),r=n(23),i=n.n(r),u=(n(40),n(12)),o=n(13),h=n(15),l=n(14),d=n(27),j=n(6),b=n(18),p=n(29);n(44),n(46);p.a.initializeApp({apiKey:"AIzaSyBu0yUqdyL63lY672o5tWt_i_81Jv8Yvng",authDomain:"techkaro-c9730.firebaseapp.com",databaseURL:"https://techkaro-c9730.firebaseio.com",projectId:"techkaro-c9730",storageBucket:"techkaro-c9730.appspot.com",messagingSenderId:"257407748843",appId:"1:257407748843:web:c63f14a2695ef1500b4cae",measurementId:"G-LC1588VS44"});var f=p.a,m=(n(49),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)("img",{src:"../../assets/chatImg.png",alt:""}),Object(c.jsx)("h1",{children:"Chat-App"}),Object(c.jsx)("button",{onClick:function(){return e.props.facebook_login(e.props.history)},children:"Facebook LogIn"})]})}}]),n}(a.a.Component)),O=Object(b.b)((function(e){return{users:e.users}}),(function(e){return{facebook_login:function(t){return e(function(e){return function(t){var n=new f.auth.FacebookAuthProvider;f.auth().signInWithPopup(n).then((function(n){n.credential.accessToken;var c=n.user,s={name:c.displayName,email:c.email,profile:c.photoURL,uid:c.uid};f.database().ref("/").child("users/".concat(c.uid)).set(s).then((function(){t({type:"SETUSER",payload:s}),alert("user login successful"),e.push("/chat")}))})).catch((function(e){e.code,e.message,e.email,e.credential}))}}(t))}}}))(m),g=(n(50),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).chat=function(t){e.setState({chat_user:t});var n=e.props.current_user,c=e.uid_merge(n.uid,t.uid);e.get_messages(c)},e.get_messages=function(t){f.database().ref("/").child("chats/".concat(t)).on("child_added",(function(t){e.state.chats.push(t.val()),e.setState({chats:e.state.chats})}))},e.send_message=function(){var t=e.props.current_user,n=e.state.chat_user,c=e.uid_merge(t.uid,n.uid);f.database().ref("/").child("chats/".concat(c)).push({message:e.state.message,name:t.name,uid:t.uid}),e.setState({message:""})},e.state={chat_user:{},chats:[],message:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.get_users()}},{key:"uid_merge",value:function(e,t){return e<t?e+t:t+e}},{key:"render",value:function(){var e=this,t=this.props.current_user;return Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("h4",{children:["Welcome ",t.name]}),Object(c.jsx)("img",{src:t.profile,alt:""}),Object(c.jsxs)("h6",{children:["Email: ",t.email]}),Object(c.jsxs)("div",{className:"chat_user-box",children:[Object(c.jsxs)("div",{className:"chat_user-sub-box1",style:{width:400},children:[Object(c.jsx)("h4",{children:"Chat users:"}),Object(c.jsx)("ul",{children:this.props.users.map((function(n,s){return n.uid!==t.uid&&Object(c.jsxs)("li",{children:[Object(c.jsx)("img",{src:n.profile,alt:"",width:"20"}),n.name,Object(c.jsx)("button",{onClick:function(){return e.chat(n)},children:"Chat"})]},s)}))})]}),Object(c.jsxs)("div",{className:"chat_user-sub-box2",style:{width:400},children:[Object(c.jsx)("h4",{children:"Chat "}),Object.keys(this.state.chat_user).length?Object(c.jsxs)("div",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("img",{src:this.state.chat_user.profile,alt:"",width:"20"}),this.state.chat_user.name]}),Object(c.jsx)("ul",{children:this.state.chats.map((function(e,n){return Object(c.jsx)("li",{style:{color:e.uid===t.uid?"coral":"lightblue"},children:e.message},n)}))}),Object(c.jsx)("input",{value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})},type:"text",placeholder:"enter your messege"}),Object(c.jsx)("button",{onClick:function(){return e.send_message()},children:"Send"})]}):Object(c.jsx)("h4",{children:"No User"})]})]})]})}}]),n}(a.a.Component)),v=Object(b.b)((function(e){return{current_user:e.current_user,users:e.users}}),(function(e){return{get_users:function(){return e(function(){var e=[];return function(t){f.database().ref("/").child("users").on("child_added",(function(t){e.push(t.val())})),t({type:"SETFIREBASEUSERS",payload:e})}}())}}}))(g),x=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(d.a,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:O}),Object(c.jsx)(j.a,{exact:!0,path:"/chat",component:v})]})}}]),n}(a.a.Component),_=(n(52),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(x,{})})}}]),n}(a.a.Component)),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},k=n(21),S={users:[],current_user:{}},C=n(20),E=n(34),I=Object(C.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETUSER":return Object(k.a)(Object(k.a)({},e),{},{current_user:t.payload});case"SETFIREBASEUSERS":return Object(k.a)(Object(k.a)({},e),{},{users:t.payload})}return e}),Object(C.a)(E.a));i.a.render(Object(c.jsx)(b.a,{store:I,children:Object(c.jsx)(_,{})}),document.getElementById("root")),y()}},[[53,1,2]]]);
//# sourceMappingURL=main.3d0c8c70.chunk.js.map