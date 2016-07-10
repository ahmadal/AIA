﻿var LandingPageController = function ($scope, $http, GetRandomNumbersFactory) {
    $scope.models = {
        randomNumberLength: '',
        results: ''
    };
    var isInt = function (value) {
        return !isNaN(value) && (function (x) { return ((x | 0) === x) && (x > 0); })(parseFloat(value))
    }
    $scope.getRandomNumbers = function (length) {
        if (isInt(length)) {
            GetRandomNumbersFactory(length).then(function (success) {
                if (success.success) {
                    $scope.models.results = success.data;
                    $scope.xAxises = [];
                    for (var i = 0; i < success.length; i++) {
                        $scope.xAxises[i] = i;
                    }
                    $scope.labels = $scope.xAxises;
                    $scope.series = ['Random Numbers'];
                    $scope.data = [
                      success.data
                    ];
                    $scope.onClick = function (points, evt) {
                        console.log(points, evt);
                    };
                    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
                    $scope.options = {
                        scales: {
                            yAxes: [
                              {
                                  id: 'y-axis-1',
                                  type: 'linear',
                                  display: true,
                                  position: 'left'
                              }
                            ]
                        }
                    };
                }
                else {
                    $scope.models.results = '';
                    console.log("Something went wrong. The result success state was false.")
                }
            },
            function (error) {
                console.log("error in the landing page controller getRandomeNumbers, GetRandomNumbersFactory: " + error)
            });
        }
        else {
            $scope.models.results = '';
            alert('Please enter a positive integer!');
        }
    }

    $scope.getRandomNumbers(100);

}

LandingPageController.$inject = ['$scope', '$http', 'GetRandomNumbersFactory'];