function floatPrice(e){return parseFloat(e).toFixed(2).replace(".",",")}$((function(){var e,t;miniCart=(e=Array.prototype.slice.call(document.querySelectorAll(".count_cart")),{change:function(t){e.forEach((function(e){e.innerHTML=t}))}}),cart_data=(t=0,{get_full_cost:function(){return t},set_full_cost:function(e){t=e},update_full_cost:function(e){e=e||function(e){console.log(e)};var n=new XMLHttpRequest;n.open("GET","/shtrih/cart/ajax/get_full_cost/"),n.send(),n.onload=function(){var e=JSON.parse(n.responseText);1===e.status&&(t=e.full_cost,miniCart.change(e.full_count))}}}),cart_data.update_full_cost()}));var observer=function(){var e=[];return{signal:function(t,n){e.forEach((function(e){e(t,n)}))},addListener:function(t){e.push(t)}}}();$((function(){observer.addListener((function(e){"add_to_cart"===e.action&&($.fancybox.open("Товар успешно добавлен в корзину"),setTimeout((function(){$.fancybox.close("all")}),1500),miniCart.change(e.full_count))})),$("#order-steps").load("/shtrih/cart/ajax/",(function(){var e;(e=Element.prototype).matches=e.matches||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector,e.closest=e.closest||function(e){return this?this.matches(e)?this:this.parentElement?this.parentElement.closest(e):null:null};var t,n,o=(t=document.querySelectorAll(".js-cart-item"),n=document.querySelector(".js-cart-full-cost"),t=Array.prototype.slice.call(t),{removeItem:function(e){t.forEach((function(n){parseInt(n.dataset.id,10)===e&&(n.remove(),t.splice(t.indexOf(n),t.indexOf(n)+1))}))},changeItem:function(e,n){t.forEach((function(t){parseInt(t.dataset.id,10)===e&&(t.querySelector(".js-cart-item-cost").innerHTML=floatPrice(n))}))},changeFullCost:function(e){n.innerHTML=floatPrice(e)},length:function(){return t.length}}),r=function(){var e=document.querySelector(".js-open-step-2");return{get_step:function(){return e},update:function(t){t>15e3?e.classList.remove("btn_disabled"):e.classList.add("btn_disabled")},test:function(e){return e>15e3}}}();cart_data.update_full_cost(),observer.addListener((function(e){"remove_item"==e.action&&(o.removeItem(e.id),0==o.length()&&window.location.reload())})),observer.addListener((function(e){"change_count"==e.action&&o.changeItem(e.id,e.cost)})),observer.addListener((function(e){"change_count"!==e.action&&"remove_item"!==e.action||o.changeFullCost(e.full_cost)})),observer.addListener((function(e){"order_submit"===e.action&&($(".js-step-2").hide(),$(".js-step-3").show())})),observer.addListener((function(e){"change_count"!=e.action&&"remove_item"!=e.action||miniCart.change(e.full_count)})),observer.addListener((function(e){"order_submit"===e.action&&miniCart.change(0)})),observer.addListener((function(e,t){"hard"!==e.action&&"subscribe"!==e.action||1===e.status&&(t.reset(),$.fancybox.open(e.message),setTimeout((function(){$.fancybox.close("all")}),1500))})),observer.addListener((function(e,t){"add_mockup"===e.action&&(t.reset(),$.fancybox.open("Макет успешно добавлен"),document.querySelector(".js-layout-text").innerHTML="Макет добавлен",document.querySelector(".js-layout-icon").classList.remove("sprite"),document.querySelector(".js-layout-icon").classList.remove("sprite-chain"),document.querySelector(".js-layout-icon").classList.add("sprite-ok"),setTimeout((function(){$.fancybox.close("all"),$.fancybox.close()}),1500))})),observer.addListener((function(e){"clear_cart"===e.action&&window.location.reload()})),observer.addListener((function(e){"change_count"!==e.action&&"remove_item"!==e.action||cart_data.set_full_cost(e.full_cost)})),observer.addListener((function(e){"change_count"!==e.action&&"remove_item"!==e.action||r.update(e.full_cost)}));var c=document.querySelectorAll(".js-ajax-form");Array.prototype.forEach.call(c,(function(e){var t=!0;e.addEventListener("submit",(function(n){if(n.preventDefault(),t){var o=new XMLHttpRequest,r=new FormData(e),c=e.querySelector("input[name=action]").value;o.open("POST",c,!0),o.onload=function(){var n=JSON.parse(o.responseText);observer.signal(n,e),t=!0},o.send(r),t=!1}}))}));var a=document.querySelectorAll(".js-ajax-input-change");Array.prototype.forEach.call(a,(function(e){e.addEventListener("change",(function(t){var n=e.closest(".js-ajax-form"),o=new XMLHttpRequest,r=new FormData(n),c=n.querySelector("input[name=action]").value;o.open("POST",c,!0),o.onload=function(){var e=JSON.parse(o.responseText);observer.signal(e)},console.log(r),o.send(r)}))})),$(".js-read-more-block").each((function(e,t){var n=parseInt(t.dataset["rm-max-height"])||250;if(t.clientHeight>n){t.classList.add("read-more-closed");var o=document.createElement("div");o.innerHTML="Читать далее",o.classList.add("read-more-btn"),o.addEventListener("click",(function(e){t.classList.contains("read-more-closed")?(o.innerHTML="Свернуть",t.classList.remove("read-more-closed")):(o.innerHTML="Читать далее",t.classList.add("read-more-closed"))})),t.parentNode.insertBefore(o,t.nextSibling)}}));var s=document.querySelectorAll(".js-step"),i=r.get_step(),l=document.querySelector(".js-open-step-1");s.length&&i&&l&&(i.addEventListener("click",(function(e){e.preventDefault(),r.test(cart_data.get_full_cost())&&($(".js-step-1").hide(),$(".js-step-2").show())})),l.addEventListener("click",(function(e){e.preventDefault(),$(".js-step-2").hide(),$(".js-step-1").show()}))),$((function(){var e=document.querySelector("input[name=address]"),t=document.querySelector("input[name=city]"),n=document.querySelectorAll("input[name=tp]"),o=function(){var e=document.createElement("select");return e.name="city",["Москва","Самара","Тольятти"].forEach((function(t){var n=document.createElement("option");n.value=t,n.innerHTML=t,e.appendChild(n)})),e}(),r=function(){var e=document.createElement("input");return e.name="city",e}();if(e){var c=o.cloneNode(!0),a=t.parentNode;a.innerHTML="",a.appendChild(c),$(c).selectric(),Array.prototype.forEach.call(n,(function(t){t.addEventListener("change",(function(n){var c=t.value;if(a.innerHTML="","1"===c){var s=o.cloneNode(!0);a.appendChild(s),$(s).selectric()}if("2"===c){var i=r.cloneNode(!0);e.value=null,a.appendChild(i),$(i).kladr({type:$.kladr.type.city}),$(e).kladr({type:$.kladr.type.street,parentType:$.kladr.type.city,parentInput:i,select:function(t){console.info(t),e.value=t.type+" "+t.name}})}}))}))}})),$((function(){var e=document.querySelectorAll(".js-tp-checkbox input"),t=document.querySelector(".js-order-form-address");Array.prototype.forEach.call(e,(function(n){n.addEventListener("change",(function(n){Array.prototype.forEach.call(e,(function(e){e.checked&&("2"===e.value?t.classList.add("order-form__address_active"):t.classList.remove("order-form__address_active"))}))}))}))})),jQuery((function(e){e(".tel-mask").mask("+7(999)-999-99-99")}))}))}));