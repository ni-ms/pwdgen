import"https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";import"https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js";const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};l();function a(s){s.value=window.crypto.getRandomValues(new BigUint64Array(1))[0].toString(36)}document.querySelector("#app").innerHTML=`
<!--BACKGROUND-->

<!-- END BACKGROUND -->
    <div class="mx-auto" >
    <h1 class="pb-3"> The secure password generator!</h1>
   
   <!-- TEXT BOX -->
    <div class="form-group">
    <label for="passwordText1">Password:</label>
    <input type="text" class="form-control" id="passwordText1">
    <small id="passwordText2" class="form-text text-muted">Don't worry, we won't see your password!</small>

    <div class="py-5">
   <button type="button" id="generateButton" class="btn btn-success px-3">Generate!</button>
   </div>
   </div>
 
    </div>
`;document.getElementById("generateButton").addEventListener("click",function(){a(passwordText1)});VANTA.RINGS({el:"body",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1});
