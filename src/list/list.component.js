import template from './list.html';

export const listcomponent = {
    bindings: {
        projects: '=',
    },
    template: template,
    controller: function () {

        this.$onInit = function() {

            // $scope.up = this.update.bind(this)
            console.log(this.projects)
            // console.log('HERE', app.value('project')
          };
    }
};
