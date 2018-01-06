import angular from 'angular';
import uirouter from 'angular-ui-router';
import Projects from '../services/projects.service';
import { editcomponent } from './edit.component';

export default angular.module('app.edit', [uirouter, Projects])
  .config(($stateProvider) => {
    $stateProvider.state({
      name: 'edit',
      url: '/edit/:project_id',
      component: 'edit',
      resolve: {
        project: ($transition$, Projects) => {
          let project_id = $transition$.params().project_id;
          return Projects.projects.find((p) => p.id === parseInt(project_id));
        },
      }
    });
  })
  .name;

angular.module('app.edit')
  .component('edit', editcomponent)
  .directive('numberFormatter', ['$filter', function ($filter, Projects) {
    const shortcuts = {
      'm': 1000000,
      'k': 1000
    }

    var modelVal = function (newVal) {
      const letterRegex = newVal.match(/[a-z]$/g);
      const numberMatch = newVal.match(/^-?[0-9]+/g)

      if (checkSyntax(newVal)) {
        const interpretedLetter = letterRegex ? shortcuts[letterRegex[0]] : 1
        const matchedNumber = numberMatch ? Number(numberMatch[0]) : 0
        newVal = numberMatch * interpretedLetter;
      }
      return newVal;
    };

    var displayVal = function (num) {
      if (angular.isNumber(num)) {
        return $filter('number')(num);
      } else {
        return num;
      }
    };

    var checkSyntax = (input) => {
      const regexp = /^-$|^-?[0-9]+$|^-?[0-9]+[m|k]$|^\s*$/;
      const isValid = regexp.test(input)
      return isValid;
    };

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attr, ngModel) {
        ngModel.$parsers.push(modelVal);
        ngModel.$formatters.push(displayVal);

        element.bind('blur', function () {
          if (ngModel.$valid) {
            element.val(displayVal(ngModel.$modelValue))
          }
        });

        element.bind('focus', function () {
          if (ngModel.$valid) {
            element.val(ngModel.$modelValue );
          }
        });
      }
    }
}]);
