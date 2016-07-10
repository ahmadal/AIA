var GetRandomNumbersFactory = function ($http, $q) {
    return function (length) {
        var deferredObject = $q.defer();
        $http({
            method: 'GET',
            url: "https://qrng.anu.edu.au/API/jsonI.php?length=" + length + "&type=uint8"
        })
        .then(function sucessCallback(response) {
            deferredObject.resolve(response.data);

        }, function errorCallback(error) {
            console.log("error http get in scope.getRandomNumbers method: " + error);
        });

        return deferredObject.promise;
    }
}
GetRandomNumbersFactory.$inject = ['$http', '$q'];