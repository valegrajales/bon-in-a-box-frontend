'use strict';

exports = module.exports = function(service) {
	return {
		local: require('./local')(service),
		facebook: require('./facebook')(service),
		google: require('./google')(service),
		linkedin: require('./linkedin')(service)
	};
};
