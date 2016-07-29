'use strict';

import module from './<%= nameKebab %>.module';
import ctrlName from './<%= nameKebab %>.ctrl';

/**
 * <%= nameKebab %> component definition.
 * @type {object}
 */
const <%= nameCamel %> = {
	bindings: {

	},
	controller: ctrlName,
	controllerAs: 'vm',
	template: require('./<%= nameKebab %>.tmpl.html')
};

export default module.component('<%= nameCamel %>', <%= nameCamel %>);
