var GetRandomNumbersFactory = function ($http, $q) {
    return function (length) {
        var deferredObject = $q.defer();
        $http.get("https://qrng.anu.edu.au/API/jsonI.php?length=" + $scope.models.randomNumberLength + "&type=uint8")
        .then(function sucessCallback(response) {
            if (response.data['success']){
                console.log("success");
                deferredObject.resolve(response.data['data']);
            }               
            else {
                console.log("not success");
                deferredObject.resolve(response.data['success']);
            }
        }, function errorCallback(error) {
            console.log("error http get in scope.getRandomNumbers method: " + error);
        });

        return deferredObject.promise;
    }
}
GetRandomNumbersFactory.$inject = ['$http', '$q'];