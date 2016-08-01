'use strict';

import module from './<%= nameKebab %>.module';
import _ from 'lodash';

const deps = [
];


/**
 * <%= nameCap %> service factory.
 */
function <%= nameCamel %>Factory() {

	/**
	 * <%= nameCap %> service API.
	 * @type {object}
	 */
	const API = {};


	return API;

}


export default module.factory(module.name, [...deps, <%= nameCamel %>Factory]);
