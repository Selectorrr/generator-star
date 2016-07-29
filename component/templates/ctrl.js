'use strict';

import module from './<%= nameKebab %>.module';

const ctrlName = '<%= nameCap %>';

const deps = [
];


/**
 * <%= nameKebab %> component controller.
 */
function <%= nameCamel %>Controller() {

}


module.controller(ctrlName, [...deps, <%= nameCamel %>Controller]);

export default ctrlName;
