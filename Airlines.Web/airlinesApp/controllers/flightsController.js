(function (app) {

    var flightsController = function ($scope, flightService) {

        $scope.selectFlight = function(flight) {

            for (var i = 0 ; i < $scope.flights.length; i++) {
                $scope.flights[i].approved = false;
            }

            flight.approved = !flight.approved;            
            
        };

        $scope.flights = flightService.getFlights();        

    };

    app.controller("flightsController", ["$scope", "flightService", flightsController]);

}
(angular.module("airlineApp")
));