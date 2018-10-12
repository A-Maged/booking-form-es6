export default class Modal {
	constructor() {
		let self = this;

		this.closeModalBtn = document.querySelector('[data-hook=close-modal]');
		this.openModalBtn = document.querySelector(
			'[data-hook=form-field-check-in-out]'
		);
		this.modal = document.getElementsByClassName('modal-wrapper')[0];

		this.close = this.close.bind(this);
		this.open = this.open.bind(this);

		this.closeModalBtn
			? this.closeModalBtn.addEventListener('click', this.close)
			: null;

		this.openModalBtn
			? this.openModalBtn.addEventListener('click', this.open)
			: null;

		window.addEventListener('click', e => {
			if (e.target == self.modal) {
				self.close();
			}
		});
	}

	open() {
		this.modal.style.display = 'block';
	}
	close() {
		this.modal.style.display = 'none';
	}
}
