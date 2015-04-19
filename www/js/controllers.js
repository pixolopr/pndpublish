angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPlatform) {

    $ionicPlatform.ready(function () {

    });
    
})


.controller('menuCtrl', function ($scope, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
        $scope.togglemenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.goback = function () {
            $ionicNavBarDelegate.back();
        };
    })
    .controller('PlaylistsCtrl', function ($scope) {
       
    })

.controller('PlaylistCtrl', function ($scope, $stateParams, $ionicModal) {


        $(".productpagemargin").css("margin-bottom", $(".footerbuttons").height());

        //BUY MODAL
        $ionicModal.fromTemplateUrl('templates/buy.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.buymodal = modal;
        });
        $scope.closebuymodal = function () {
            $scope.buymodal.hide();
        };
        $scope.openbuymodal = function () {
            $scope.buymodal.show();
        };
        //ADD TO CART MODAL
        $ionicModal.fromTemplateUrl('templates/addtocart.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.cartmodal = modal;
        });
        $scope.closecartmodal = function () {
            $scope.cartmodal.hide();
        };
        $scope.opencartmodal = function () {
            $scope.cartmodal.show();
        };

    })
    .controller('productsCtrl', function ($scope, $stateParams, MyServices) {
       
    })
    .controller('loginCtrl', function ($scope, $stateParams, MyServices, $location) {
        
    })
    .controller('signupCtrl', function ($scope, $stateParams) {})
    .controller('helpCtrl', function ($scope, $stateParams, $ionicTabsDelegate) {
        
    })
    .controller('useraccountCtrl', function ($scope, $stateParams) {})
    .controller('editprofileCtrl', function ($scope, $stateParams) {});