const PASSWORD="14082008";
const music=document.getElementById("music");
const error=document.getElementById("error");

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

document.getElementById("unlockForm").addEventListener("submit",e=>{
  e.preventDefault();
  if(document.getElementById("password").value===PASSWORD){
    show("welcome");
    music.play().catch(()=>{});
  }else{
    error.textContent="That password isn't right — try again ❤️";
  }
});

document.querySelectorAll(".next").forEach(btn=>{
  btn.addEventListener("click",()=>{
    show(btn.dataset.next);
    music.play().catch(()=>{});
  });
});

document.getElementById("wish").addEventListener("click",()=>{
  document.getElementById("finalMessage").classList.add("show");
  burst();
});

function burst(){
  for(let i=0;i<70;i++){
    const p=document.createElement("span");
    p.textContent=["❤","✨","💖","✦"][Math.floor(Math.random()*4)];
    p.style.position="fixed";
    p.style.left="50%"; p.style.top="50%";
    p.style.zIndex="99"; p.style.pointerEvents="none";
    p.style.fontSize=(12+Math.random()*20)+"px";
    document.body.appendChild(p);
    const x=(Math.random()-.5)*innerWidth*1.2;
    const y=(Math.random()-.5)*innerHeight*1.2;
    p.animate([{transform:"translate(-50%,-50%) scale(.3)",opacity:1},
               {transform:`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) scale(1.4)`,opacity:0}],
              {duration:1300+Math.random()*900,easing:"cubic-bezier(.2,.8,.2,1)"});
    setTimeout(()=>p.remove(),2300);
  }
}
