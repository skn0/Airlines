(function (app) {

    var flightsController = function ($scope, flightService) {
        
        var init = function () {
            $scope.flights = flightService.getFlights();
        };

        $scope.selectFlight = function(flight) {

            for (var i = 0 ; i < $scope.flights.length; i++) {
                $scope.flights[i].approved = false;
            }

            flight.approved = !flight.approved;            
            
            if (flightService.selectFlight(flight.id)) {
                $scope.status = "you have made a great decision";
            }            
        };//end method selectflight

        
        init();

        
    };//end controller

    app.controller("flightsController", ["$scope", "flightService", flightsController]);

}
(angular.module("airlineApp")
));