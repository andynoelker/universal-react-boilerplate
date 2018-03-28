import http from 'http';
import assert from 'assert';

import '../lib/index.js';

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://192.168.1.8:1337', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
