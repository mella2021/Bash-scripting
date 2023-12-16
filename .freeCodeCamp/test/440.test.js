const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggestion correctly', async () => {
    const scriptFile = await getFileContents('../countdown.sh');

    assert(/^[ \t]*echo[ \t]+\$1[ \t]*;?[ \t]*$/gm.test(scriptFile));
  });
});
