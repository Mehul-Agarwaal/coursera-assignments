(function () {
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";  // Initialize lunchItems
        $scope.message = "";      // Initialize message

        $scope.checkLunch = function () {
            var items = $scope.lunchItems.split(','); // Split string by commas
            items = items.filter(function(item) {
                return item.trim() !== '';  // Filter out empty strings
            });

            if ($scope.lunchItems === "") {
                $scope.message = "Please enter data first";  // Empty input message
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";  // 3 or fewer items
            } else {
                $scope.message = "Too much!";  // More than 3 items
            }
        };
    }
})();
