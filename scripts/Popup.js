class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this.buttonTypeClose = this._popup.querySelector('.button_type_close');
      this.overlay = this._popup.querySelector('.popup__overlay');
      this._handleEscClose = this._handleEscClose.bind(this)
      console.log (this.buttonTypeClose);
    }
  
    open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keyup', this._handleEscClose)
    }
  
    close() {
      this._popup.classList.remove("popup_opened")
      document.removeEventListener('keyup', this._handleEscClose)
  }
  
    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
          this.close()
      }
  }
  
    setEventListeners() {
      this.buttonTypeClose.addEventListener('click', () => this.close());
      this.overlay.addEventListener('click', () => this.close());
    }
    
}

export default Popup