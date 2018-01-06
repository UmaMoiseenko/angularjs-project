import angular from 'angular';
import ngMaterial from 'angular-material';
import uirouter from 'angular-ui-router';

import 'angular-material/angular-material.css';

import list from './list';
import edit from './edit';

angular.module('app', [ngMaterial, uirouter, list, edit])
    .config(($urlRouterProvider, $mdThemingProvider) => {
        $urlRouterProvider.otherwise('/');
    });
