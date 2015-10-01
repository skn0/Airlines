(function (app) {

    var flightsController = function ($scope, flightService, $timeout) {
        
        var init = function () {
            $scope.flights = flightService.getFlights();
        };

        $scope.selectFlight = function(flight) {

            for (var i = 0 ; i < $scope.flights.length; i++) {
                $scope.flights[i].approved = false;
            }

            flight.approved = !flight.approved;            
            
            if (flightService.selectFlight(flight.id)) {
                $scope.status = "You have made a great decision!";
                $timeout(function () {
                    $scope.status = null;
                }, 3000
                );
            }            
        };//end method selectflight

        
        init();

        
    };//end controller

    app.controller("flightsController", ["$scope", "flightService", "$timeout", flightsController]);

}
(angular.module("airlineApp")
));