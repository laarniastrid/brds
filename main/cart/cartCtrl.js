angular.module('myApp')

.controller('cartCtrl', function(cartSvc) {
  let vm = this;

  vm.business = cartSvc.getBusiness();

})  // end cartCtrl
