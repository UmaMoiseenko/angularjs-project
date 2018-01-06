import angular from 'angular';

class Projects {
    constructor() {
        this.projects = [
            {
                id: 1,
                headline: 'Funding Strategic Growth in the Restaurant Sector',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            }
        ];

        // imagine we updating db here
        this.update = function(props) {
            const projectToUpdate = this.projects.map((p) => {
                if (p.id === props.id) {
                    p = Object.assign(p, props)
                }
            })
        }
    }

}

export default angular.module('app.services', [])
    .service('Projects', Projects)
    .name;
