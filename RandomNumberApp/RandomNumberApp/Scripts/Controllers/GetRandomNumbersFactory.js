var GetRandomNumbersFactory = function ($http, $q) {
    return function (length) {
        var deferredObject = $q.defer();
        $http.get("https://qrng.anu.edu.au/API/jsonI.php?length=" + length + "&type=uint8")
        .then(function sucessCallback(response) {
            console.log("success");
            deferredObject.resolve(response.data);

        }, function errorCallback(error) {
            console.log("error http get in scope.getRandomNumbers method: " + error);
        });

        return deferredObject.promise;
    }
}
GetRandomNumbersFactory.$inject = ['$http', '$q'];