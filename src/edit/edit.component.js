import template from './edit.html';
import styles from './edit.css';
import angular from 'angular';

export const editcomponent = {
  bindings: {
    project: '=',
    update: '&'
  },
  template: template,
  styles: styles,
  bindToController: true,
  controller:  function($scope, $filter, $location, Projects) {

    this.$onInit = function() {
      $scope.formData = angular.copy(this.project);
    };

    // check numeric inputs syntax
    // acceptable inputs:
    //  [number], -[number], [number][shortcutLetter]
    $scope.isValidSyntax = (input) => {
      const regexp = /^-$|^-?[0-9]+$|^-?[0-9]+[m|k]$|^\s*$/;
      const isValid = regexp.test(input.$modelValue)

      $scope.projectForm.$error.isInValidSyntax = !isValid;
      return isValid;
    }

    // require user to enter none or both values in a min/max range
    $scope.minMaxValidate = (name) => {
      const minModel = $scope.projectForm[`${name}_min`];
      const maxModel = $scope.projectForm[`${name}_max`];
      let isValid;

      if ((angular.isNumber(minModel.$$rawModelValue) &&  !angular.isNumber(maxModel.$$rawModelValue)) ||
        !angular.isNumber(minModel.$$rawModelValue) && angular.isNumber(maxModel.$$rawModelValue)) {
        isValid = false;

      } else {
        isValid = (maxModel.$$rawModelValue >= minModel.$$rawModelValue);
      }
      $scope.projectForm.$error.wrongMinMax = !isValid;
      return isValid;
    }

    // update project and redirect to home page
    $scope.updateProject = function() {
      if ($scope.projectForm.$error.isInValidSyntax || $scope.projectForm.$error.wrongMinMax) return;
      Projects.update($scope.formData);
      $location.path('/');

    };
  }
};
