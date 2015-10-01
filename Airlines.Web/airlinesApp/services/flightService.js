(function (app) {

    var testData = [{
                        airline: "United",
                        flightNumber: 207,
                        startTime: "13:00",
                        endTime: "15:00",
                        totalDuration: 2,
                        price: 500,
                        date: "12/1/2014",
                        cities: ["ORD", "LAS"],
                        approved: false
                    },
                    {
                        airline: "United",
                        flightNumber: 207,
                        startTime: "13:00",
                        endTime: "15:00",
                        totalDuration: 2,
                        price: 500,
                        date: "12/1/2014",
                        cities: ["SFO", "LAS"],
                        approved: false
                    }
                    ];


    var flightService = function () {
        var flightFactory = {};

        flightFactory.getFlights = function () {            
            return testData;
        };


        flightFactory.selectFlight = function (id) {
            //http.put("/flights/select/3", id)
            //then deselect the rest of the items
            return true;
        };


        return flightFactory;
    };

    app.factory("flightService", flightService);


}(angular.module("airlineApp"))
);