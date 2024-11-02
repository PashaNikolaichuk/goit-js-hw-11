import{S as l,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="46831416-189b424aaa4e35cb9d06aecea",u="https://pixabay.com/api/";async function d(s=""){const e=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${e}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function h(s){return s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="info">
        <div class="info-item">
        <h3>Likes</h3>
        <p> ${e.likes}</p>
        </div>
        <div class="info-item">
        <h3>Views</h3>
        <p>  ${e.views}</p>
        </div>
        <div class="info-item">
        <h3>Comments</h3>
        <p> ${e.comments}</p>
        </div>
        <div class="info-item">
        <h3>Downloads</h3>
        <p> ${e.downloads}</p>
        </div>   
        </div>
      </li>
    `).join("")}const m=document.querySelector(".form-send-js"),c=document.querySelector(".list-js"),p=new l(".gallery-item a");m.addEventListener("submit",y);function y(s){s.preventDefault();const e=s.target.elements.search.value.trim();if(!e){n.error({title:"Error",message:"Please enter a search query."});return}c.innerHTML="",d(e).then(o=>{o.hits.length===0?n.info({title:"No results",position:"topRight",backgroundColor:"#ff4d4f",message:"Sorry, there are no images matching your search query. Please, try again!"}):(c.innerHTML=h(o.hits),p.refresh())}).catch(o=>{n.error({title:"Error",message:"Failed to fetch images. Try again."})})}
//# sourceMappingURL=index.js.map
