import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let o={email:"",message:""};const a=document.querySelector(".feedback-form"),n=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));for(const t in e)a.elements[t].value=e[t];o=e}catch(e){console.log(e)}};n();const s=e=>{const t=e.target.value,r=e.target.name;o[r]=t,localStorage.setItem("feedback-form-state",JSON.stringify(o))};a.addEventListener("change",s);const c=e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),a.reset()};a.addEventListener("submit",c);
//# sourceMappingURL=2-form.js.map
