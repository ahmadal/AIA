var LandingPageController = function ($scope, $http) {
    $scope.models = {
        randomNumberLength: '100',
        results: ''
    };
    $scope.getRandomNumbers = function () {
        $http.get("https://qrng.anu.edu.au/API/jsonI.php?length=" + $scope.models.randomNumberLength + "&type=uint8")
        .then(function sucessCallback(response) {

            if (response.data['success'])
                $scope.models.results = response.data['data'];
            else {
                $scope.models.results = '';
                alert('Something wasn\'t quite right.\n' + response);

            }
                
        }, function errorCallback(error) {

            console.log("error http get in scope.getRandomNumbers method: " + error);
            

        });
    }
}

LandingPageController.$inject = ['$scope','$http'];