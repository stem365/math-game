(this["webpackJsonpmath-game"]=this["webpackJsonpmath-game"]||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),l=(n(17),n(6)),i=n(7),u=n(10),s=n(8),m=n(11),h=n(22),b=(n(18),n(19),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){n.totalCount++,n.inputValue===n.correctValue?(n.correctCount++,n.correctLabel="Correct!",n.correctLabelColor="green"):(n.correctLabel="Wrong!",n.correctLabelColor="red"),n.setState({inputGiven:!0}),e.preventDefault()},n.handleChange=function(e){n.inputValue=e.target.value},n.handleContinueClick=function(e){n.textInputRef.current.value="",n.setState({inputGiven:!1})},n.getRandomNumber=function(){return Math.floor(10*Math.random())+1},n.showCalculationTask=function(){return n.state.inputGiven||(n.number1=n.getRandomNumber(),n.number2=n.getRandomNumber(),n.correctValue=String(n.number1*n.number2)),r.a.createElement("b",null,n.number1+" \xd7 "+n.number2)},n.state={inputGiven:!1},n.inputValue="",n.textInputRef=r.a.createRef(),n.totalCount=0,n.correctCount=0,n.number1=0,n.number2=0,n.correctValue="",n.correctLabel="",n.correctLabelColor="",n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="",t="",n="";return 1==this.state.inputGiven&&(e=r.a.createElement("div",{style:{lineHeight:4}},r.a.createElement("strong",null,r.a.createElement("font",{color:this.correctLabelColor},this.correctLabel))),this.inputValue!==this.correctValue&&(t=r.a.createElement("div",{style:{lineHeight:2}},"The correct answer is ",this.correctValue)),n=r.a.createElement("div",{style:{lineHeight:2}},r.a.createElement(h.a,{variant:"primary",onClick:this.handleContinueClick},"Continue")," ")),r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{style:{lineHeight:4}},r.a.createElement("strong",null,this.correctCount," of ",this.totalCount," correct!")),r.a.createElement("p",null,"Calculate"),r.a.createElement("p",null,this.showCalculationTask()),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{ref:this.textInputRef,type:"text",onChange:this.handleChange,disabled:this.state.inputGiven}),r.a.createElement("input",{type:"submit",value:"Done",disabled:this.state.inputGiven})),e,t,n))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.62b13994.chunk.js.map