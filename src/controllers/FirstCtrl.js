module.exports = function (ngModule) {
    ngModule.controller('CartCtrl', ['$scope', 'CartService', function ($scope, CartService) {

        $scope.cart = CartService.getCart();

        $scope.products = CartService.getProducts();

        $scope.cartProducts = CartService.getCartProducts();

        $scope.removeFromCart = function (id) {
            CartService.removeCart(id);

            $scope.cartProducts.splice(this.$index, 1);
        };

        $scope.updateCount = function (id, quantity) {
            CartService.updateCartProductCount(id, quantity);
        };

        $scope.total = function () {
            var total = 0;

            $scope.cartProducts.forEach(function (elem, idx) {

                total+= elem.price * elem.quantity;
            });

            return total;
        };

    }])
};