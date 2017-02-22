// вкладки в сервисах
var servicesButs = document.querySelectorAll('.services-nav-item'),
	servicesDeliveryBut = document.getElementById('services-delivery-but'),
	servicesGuaranteeBut = document.getElementById('services-guarantee-but'),
	servicesCreditBut = document.getElementById('services-credit-but'),
	servicesArticles = document.querySelectorAll('.services-article'),
	servicesDelivery = document.querySelector('.is-delivery'),
	servicesGuarantee = document.querySelector('.is-guarantee'),
	servicesCredit = document.querySelector('.is-credit');


servicesCreditBut.addEventListener('click', function () {
	servicesDeliveryBut.classList.remove('active');
	servicesGuaranteeBut.classList.remove('active');
	servicesCreditBut.classList.add('active');

	servicesDelivery.classList.remove('active');
	servicesGuarantee.classList.remove('active');
	servicesCredit.classList.add('active');
});

servicesDeliveryBut.addEventListener('click', function () {
	servicesDeliveryBut.classList.add('active');
	servicesGuaranteeBut.classList.remove('active');
	servicesCreditBut.classList.remove('active');

	servicesDelivery.classList.add('active');
	servicesGuarantee.classList.remove('active');
	servicesCredit.classList.remove('active');
});

servicesGuaranteeBut.addEventListener('click', function () {
	servicesDeliveryBut.classList.remove('active');
	servicesGuaranteeBut.classList.add('active');
	servicesCreditBut.classList.remove('active');

	servicesDelivery.classList.remove('active');
	servicesGuarantee.classList.add('active');
	servicesCredit.classList.remove('active');
});



var modalOverlay = document.querySelector('.modal-overlay');

// добавление в корзину
var modalAddCart = document.querySelector('.modal-add-cart');
if (modalAddCart) {
	var buttonBuy = document.querySelectorAll('.product-item-buy'),
		buttonCloseAC = modalAddCart.querySelector('.modal-close'),
		buttonCancel = modalAddCart.querySelector('.button-cancel');

	for (var i = 0; i < buttonBuy.length; i++) {
		buttonBuy[i].addEventListener('click', function(event) {
			event.preventDefault();
			modalOverlay.classList.add('modal-show');
			modalAddCart.classList.add('modal-show');
		});
	}

	buttonCloseAC.addEventListener('click', function(event) {
		event.preventDefault();
		modalOverlay.classList.remove('modal-show');
		modalAddCart.classList.remove('modal-show');
	});

	buttonCancel.addEventListener('click', function(event) {
		event.preventDefault();
		modalOverlay.classList.remove('modal-show');
		modalAddCart.classList.remove('modal-show');
	});
}



// форма обратной связи
var modalWriteUs = document.querySelector(".modal-write-us");
if (modalWriteUs) {
	var buttonWriteUs = document.querySelector(".button-write-us");
		buttonCloseWS = modalWriteUs.querySelector(".modal-close");
		yourNameField = modalWriteUs.querySelector("#your-name-id");
		emailField = modalWriteUs.querySelector("#email-id");
		messageField = modalWriteUs.querySelector("#message-id");
		formWriteUs = modalWriteUs.querySelector("form");
		storageUsername = localStorage.getItem("username");
		storageEmail = localStorage.getItem("email");

	buttonWriteUs.addEventListener("click", function(event) {
		event.preventDefault();
		modalOverlay.classList.add("modal-show");
		modalWriteUs.classList.add("modal-show");

		if (storageUsername && storageEmail) {
			yourNameField.value = storageUsername;
			emailField.value = storageEmail;
			messageField.focus();
		} else {
			yourNameField.focus();
		}
	});

	buttonCloseWS.addEventListener("click", function(event) {
		event.preventDefault();
		modalOverlay.classList.remove("modal-show");
		modalWriteUs.classList.remove("modal-show");
		modalWriteUs.classList.remove("modal-error");
	});

	formWriteUs.addEventListener("submit", function(event) {
		if (!yourNameField.value || !emailField.value) {
			event.preventDefault();
			modalWriteUs.classList.remove("modal-error");
			modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
			modalWriteUs.classList.add("modal-error");
		} else {
			localStorage.setItem("username", yourNameField.value);
			localStorage.setItem("email", emailField.value);
		}
	});
}





// карта
var modalMap = document.querySelector(".modal-map");
if (modalMap) {
	var buttonMap = document.querySelector(".map-link"),
		buttonCloseMap = modalMap.querySelector(".modal-close");

	buttonMap.addEventListener("click", function(event) {
		event.preventDefault();
		modalOverlay.classList.add("modal-show");
		modalMap.classList.add("modal-show");
	});

	buttonCloseMap.addEventListener("click", function(event) {
		event.preventDefault();
		modalOverlay.classList.remove("modal-show");
		modalMap.classList.remove("modal-show");
	});
}