'use strict';

import module from './<%= nameKebab %>.module';

const ctrlName = '<%= nameCap %>';

const deps = [
	'$scope'
];


/**
 * <%= nameKebab %> component controller.
 */
class <%= nameCap %>Controller {
	constructor($scope) {

	}
}


module.controller(ctrlName, [...deps, <%= nameCap %>Controller]);

export default ctrlName;
