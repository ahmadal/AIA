var LandingPageController = function ($scope, $http, GetRandomNumbersFactory) {
    $scope.models = {
        randomNumberLength: '100',
        results: ''
    };
    $scope.getRandomNumbers = function (length) {
        GetRandomNumbersFactory(length).then(function (success) {
            console.log("it is: " + success.success);
            if (success.success)
                $scope.models.results = success.data;
            else {
                $scope.models.results = '';
                console.log("Something went wrong. The result success state was false.")
            }
        },
        function (error) {
            console.log("error in the landing page controller getRandomeNumbers, GetRandomNumbersFactory: " + error)
        });
    }
    $scope.getRandomNumbers(100);
}

LandingPageController.$inject = ['$scope','$http', 'GetRandomNumbersFactory'];