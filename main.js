(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var n,r;return n=t,(r=[{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeUserImage",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardData=t,this._userId=n,this._cardCreatorId=this._cardData.owner._id,this._cardId=this._cardData._id,this._likes=this._cardData.likes,this._isLiked=!1,this._templateSelector=u,this._handleCardClick=r,this._handleRemoveClick=o,this._handleLikeAdd=i,this._handleLikeRemove=a}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"generateCard",value:function(){this._elementItem=this._getTemplate();var e=this._elementItem.querySelector(".elements__title");return this._likeButton=this._elementItem.querySelector(".elements__like"),this._likeCounter=this._elementItem.querySelector(".elements__like-counter"),this._likeCounter.textContent=String(this._likes.length),this.removeButton=this._elementItem.querySelector(".elements__remove"),this._userId===this._cardCreatorId&&this.removeButton.classList.remove("elements__remove_inactive"),this.image=this._elementItem.querySelector(".elements__image"),this.image.src=this._cardData.link,this.image.alt=this._cardData.name,e.textContent=this._cardData.name,this._makeEventListeners(),this._elementItem}},{key:"_removeCard",value:function(){this._elementItem.remove(),this._elementItem=null}},{key:"deleteCard",value:function(){this._removeCard(this._elementItem)}},{key:"getCardId",value:function(){return this._cardId}},{key:"_removelike",value:function(e){this._likeButton.classList.remove("elements__like_active"),this._handleLikeRemove(e)}},{key:"_addlike",value:function(e){this._likeButton.classList.add("elements__like_active"),this._handleLikeAdd(e)}},{key:"setLikeCounter",value:function(e){this._likeCounter.textContent=String(e.likes.length)}},{key:"_makeEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("elements__like_active")?e._removelike(e._cardData):e._addlike(e._cardData)})),this.removeButton.addEventListener("click",(function(){return e._handleRemoveClick()})),this.image.addEventListener("click",(function(){return e._handleCardClick(e._cardData.name,e._cardData.link)}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i.toggleButtonState(),i.inputList.forEach((function(e){e.addEventListener("input",(function(){i._checkInputValidity(e),i.toggleButtonState(i.buttonElement)}))}))},(r="_setEventListeners")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._allClasses=t,this.formElement=n,this.inputList=Array.from(n.querySelectorAll(this._allClasses.inputSelector)),this.buttonElement=this.formElement.querySelector(this._allClasses.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this.formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._allClasses.inputErrorClass),n.textContent=t,n.classList.add(this._allClasses.errorClass)}},{key:"_hideInputError",value:function(e){var t=this.formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._allClasses.inputErrorClass),t.classList.remove(this._allClasses.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"enableValidation",value:function(){this.formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this.inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this.inputList)?(this.buttonElement.setAttribute("disabled","disabled"),this.buttonElement.classList.add(this._allClasses.inactiveButtonClass)):(this.buttonElement.removeAttribute("disabled","disabled"),this.buttonElement.classList.remove(this._allClasses.inactiveButtonClass))}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this.buttonTypeClose=this._popup.querySelector(".button_type_close"),this.overlay=this._popup.querySelector(".popup__overlay"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.buttonTypeClose.addEventListener("click",(function(){return e.close()})),this.overlay.addEventListener("click",(function(){return e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitHandler=t,n._form=n._popup.querySelector(".form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){this._inputList=this._form.querySelectorAll(".form__item");var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;l(_(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues()),e.close()}))}},{key:"close",value:function(){l(_(a.prototype),"close",this).call(this),this._form.reset()}}])&&s(t.prototype,n),a}(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e,t))._submitHandler=t,n._popup=document.querySelector(e),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;m(k(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._element),e.close()}))}},{key:"open",value:function(e){this._element=e,m(k(a.prototype),"open",this).call(this)}}])&&y(t.prototype,n),a}(u);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){C(j(a.prototype),"open",this).call(this),this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupCaption.textContent=e.name}}])&&E(t.prototype,n),a}(u);var q=document.querySelector(".popup_type_image"),I=(q.querySelector(".popup__image"),q.querySelector(".popup__caption"),document.querySelector(".elements__grid"),document.querySelector(".button_type_edit")),P=document.querySelector(".profile__overlay"),R=document.querySelector(".button_type_add"),U=document.querySelector(".form_type_profile"),T=document.querySelector(".form_type_add"),B=document.querySelector(".form_type_edit-avatar"),D=document.querySelector(".popup_type_edit"),x=document.querySelector(".popup_type_add"),A=(document.querySelector(".popup__overlay_edit"),document.querySelector(".popup__overlay_add"),document.querySelector(".popup__overlay_image"),D.querySelector(".button_type_close"),x.querySelector(".button_type_close"),q.querySelector(".button_type_close"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".profile__image"),document.querySelector(".form"),document.querySelector(".form__item_type_name")),V=document.querySelector(".form__item_type_job"),H=document.querySelector(".form__item_type_title"),N=document.querySelector(".form__item_type_link"),J=document.querySelector(".form__item_type_link-avatar");function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._job=document.querySelector(n),this._userPhoto=document.querySelector(r),this._userId=o,this._avatar=document.querySelector(".profile__image")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about,this.setUserAvatar(e),this._avatar.alt="".concat(e.name)}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&G(t.prototype,n),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.reverse().forEach((function(t){e._container.append(e._renderer(t))}))}},{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}}])&&M(t.prototype,n),e}(),K=null,Q=null,W=null,X={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".button_type_submit",inactiveButtonClass:"button_inactive",inputErrorClass:"form__item_type_error",errorClass:"form__input-error_active"},Y=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"a161955b-22e4-44f7-ad97-c36f2565c1c8","Content-Type":"application/json"}}),Z=function(e){var t=new r(e,K,(function(){ee.open(e)}),(function(){W=t,te.open(e)}),(function(e){Y.setLike(e).then((function(e){t.setLikeCounter(e)}))}),(function(e){Y.deleteLike(e).then((function(e){t.setLikeCounter(e)}))}),".element__item-template");return Q=e._id,t};Y.getUserInfo().then((function(e){K=e._id,$.setUserInfo(e)})),Y.getCards().then((function(e){new F({items:e,renderer:function(e){return Z(e).generateCard()}},".elements__grid").renderItems(e)}));var $=new z(".profile__title",".profile__subtitle",".profile__image"),ee=new O(".popup_type_image");ee.setEventListeners();var te=new g(".popup_type_remove",(function(){Y.deleteCard(Q).then((function(){return W.deleteCard()})).then((function(){W=null}))}));te.setEventListeners();var ne=new h(".popup_type_edit",(function(){Y.changeUserInfo({name:A.value,job:V.value}).then((function(e){$.setUserInfo(e)}))}));ne.setEventListeners();var re=new h(".popup_type_add",(function(){Y.addCard({name:H.value,link:N.value}).then((function(e){new F({items:e,renderer:function(e){return Z(e).generateCard()}},".elements__grid").addItem(e),T.reset()}))}));re.setEventListeners();var oe=new h(".popup_type_edit-profile",(function(){Y.changeUserImage(J.value).then((function(e){$.setUserAvatar(e)})),B.reset()}));oe.setEventListeners(),new i(X,U).enableValidation();var ie=new i(X,B);ie.enableValidation();var ae=new i(X,T);ae.enableValidation(),I.addEventListener("click",(function(){var e=$.getUserInfo();A.value=e.name,V.value=e.job,ne.open()})),R.addEventListener("click",(function(){re.open(),ae.toggleButtonState()})),P.addEventListener("click",(function(){oe.open(),ie.toggleButtonState()}))})();
//# sourceMappingURL=main.js.map