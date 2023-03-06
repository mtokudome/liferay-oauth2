/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */

const path = require('path');

module.exports = {
	env: {
		node: true,
	},
	extends: ['plugin:@liferay/general'],
	plugins: ['@liferay'],
	rules: {
		'@liferay/portal/no-global-fetch': 'off',
		'@liferay/portal/no-localhost-reference': 'off',
		'notice/notice': [
			'error',
			{
				templateFile: path.join(__dirname, 'copyright.js'),
			},
		],
	},
};
