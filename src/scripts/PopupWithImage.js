import Popup from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._popupImage = this._popup.querySelector('.popup__image')
      this._popupCaption = this._popup.querySelector('.popup__caption')
    }
  
    open(item) {
      super.open();
      this._popupImage.src = item.link;
      this._popupImage.alt = item.name;
      this._popupCaption.textContent = item.name;
    }
}

export default PopupWithImage

