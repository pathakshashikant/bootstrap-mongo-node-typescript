import { expect } from 'chai';
import { agent as request } from 'supertest';
import 'mocha';

import App from '../src/index';

// General implementation for testing services
// eslint-disable-next-line no-undef
describe('baseRoute', () => {
	// eslint-disable-next-line no-undef
	it('should GET', async () => {
		const res = await request(App).get('/');
		expect(res.status).to.equal(404);
		expect(res.type).to.equal('application/json');
		expect(res.body.message).to.equal('Welcome to Skyfri API Services');
	});
});
