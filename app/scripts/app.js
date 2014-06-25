/**
 * Created by Sh0rti on 6/25/2014.
 */
"use strict";

var drawNakovApp = angular
    .module('drawNakovApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/something', {
            templateUrl: 'app/templates/some.html'
        })
    });