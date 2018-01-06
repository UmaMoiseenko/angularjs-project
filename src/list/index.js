import angular from 'angular';
import uirouter from 'angular-ui-router';

import Projects from '../services/projects.service';
import {listcomponent} from './list.component';

export default angular.module('app.list', [uirouter, Projects])
    .config(($stateProvider) => {
        $stateProvider.state({
            name: 'list',
            url: '/',
            component: 'list',
            resolve: {
                projects: (Projects) => {
                    return Projects.projects;
                }
            }
        })
    })
    .name;

angular.module('app.list')
    .component('list', listcomponent);
