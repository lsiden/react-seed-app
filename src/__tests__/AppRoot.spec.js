import React from 'react';
import { shallow, mount, render } from 'enzyme';

import AppRoot from '../AppRoot';

describe('AppRoot', function() {
	it('renders', function() {
		expect(shallow(<AppRoot />).contains("App Seed App Here"))
	})
})