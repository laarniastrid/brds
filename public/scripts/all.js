angular.module('myApp', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './html/home/homeView.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: './html/about/aboutView.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: './html/contact/contactView.html'
  })
  .state('trafficking', {
    url: '/trafficking',
    templateUrl: './html/trafficking/traffickingView.html'
  })
  .state('sellBrds', {
    url: '/sellBrds',
    templateUrl: './html/sellBrds/sellBrdsView.html'
  })
  .state('rentBrds', {
    url: '/rentBrds',
    templateUrl: './html/rentBrds/rentBrdsView.html'
  })
  .state('donateBrds', {
    url: '/donateBrds',
    templateUrl: './html/donateBrds/donateBrdsView.html'
  })
  .state('buyBrds', {
    url: '/buyBrds',
    templateUrl: './html/buyBrds/buyBrdsView.html'
  })
  .state('store', {
    url: '/store',
    templateUrl: './html/store/storeView.html'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './html/cartView.html'
  })

  $urlRouterProvider.otherwise('/');

}]) // end config

angular.module('myApp')

.directive('navDir', function() {
  return {
    restrict: 'E',
    templateUrl: './html/navigation/navTmpl.html'
  }
})
