import"./assets/styles-efcbad89.js";//!
document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".feedback-form"),t=JSON.parse(localStorage.getItem("feedback-form-state"))||{};//!
t.email&&(e.elements.email.value=t.email),t.message&&(e.elements.message.value=t.message);//!
e.addEventListener("input",function(a){t[a.target.name]=a.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))});//!
e.addEventListener("submit",function(a){a.preventDefault();const m=e.elements.email.value.trim(),s=e.elements.message.value.trim();m&&s?(console.log({email:m,message:s}),localStorage.removeItem("feedback-form-state"),e.reset()):alert("!!!!!")})});
//# sourceMappingURL=commonHelpers2.js.map
