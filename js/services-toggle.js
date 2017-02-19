var servicesButs = document.querySelectorAll('.services-nav-item');

var servicesDeliveryBut = document.getElementById('services-delivery-but');
var servicesGuaranteeBut = document.getElementById('services-guarantee-but');
var servicesCreditBut = document.getElementById('services-credit-but');

var servicesArticles = document.querySelectorAll('.services-article');

var servicesDelivery = document.querySelector('.is-delivery');
var servicesGuarantee = document.querySelector('.is-guarantee');
var servicesCredit = document.querySelector('.is-credit');


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