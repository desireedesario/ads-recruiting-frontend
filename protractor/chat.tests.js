var chai           = require("chai"),
    should         = chai.should(),
    expect         = chai.expect,
    chaiAsPromised = require("chai-as-promised"),
    supertest      = require("supertest"),
    api            = supertest("http://localhost:8000");

chai.use(chaiAsPromised);

expect.(myElement.getText()).to.eventually.equal('some text');
