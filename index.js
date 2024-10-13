import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/";function m(n){return fetch(`${f}?key=46495648-ca89e041c4cf307aa03db9722&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`).then(t=>t.json()).then(t=>t.hits)}const p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function d(n){return n.map(o=>{const{webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:c,downloads:l}=o;return`
            <li class="gallery-item">
                <a class="gallery-link" href="${i}">
                    <img class="gallery-image" src="${t}" data-source="${i}" alt="${e}" loading="lazy" />
                </a>
                <div class="info">
                    <p class="info-item">
                        <b>Likes</b>
                        ${r}
                    </p>
                    <p class="info-item">
                        <b>Views</b>
                        ${s}
                    </p>
                    <p class="info-item">
                        <b>Comments</b>
                        ${c}
                    </p>
                    <p class="info-item">
                        <b>Downloads</b>
                        ${l}
                    </p>
                </div>
            </li>
            `}).join("")}function y(){a.error({message:"Please enter a search query!",position:"topRight",timeout:3e3})}function h(){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}function g(){a.error({message:"Sorry, something went wrong. Please try again!",position:"topRight",timeout:3e3})}function b(){document.querySelector(".loader").style.display="block"}function w(){document.querySelector(".loader").style.display="none"}function L(){document.querySelector(".gallery").innerHTML=""}function S(n){document.querySelector(".gallery").innerHTML=d(n),p.refresh()}const $=document.querySelector(".search-form");$.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#search-box").value;if(o.trim()===""){y();return}b(),m(o).then(t=>{if(L(),t.length===0){h();return}S(t)}).catch(t=>{console.log(t),g()}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
