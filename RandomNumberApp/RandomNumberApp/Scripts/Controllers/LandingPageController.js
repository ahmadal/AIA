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
    //Code for Line Chart
    $scope.labels = ["x-axis label", "x-axis label", "x-axis label", "x-axis label", "x-axis label", "x-axis label", "x-axis label", "x-axis label"];
    $scope.series = ['Random Numbers'];
    $scope.data = [
      [89,65, 59, 80, 81, 56, 55, 40]
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
    //end of line chart code
}

LandingPageController.$inject = ['$scope','$http', 'GetRandomNumbersFactory'];