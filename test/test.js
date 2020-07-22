var expect = require("chai").expect;
var request = require("request");
//Dev team 
//Here they used chai testing with the requestmodule 
//request module:// the simplest way to make http requests to a server and is usally used for testing
//they made very simple requests for testing the connection of there three pages (home/signup/singin)

it("Main page ", function (done) {
  request("http://localhost:5001", function (error, response, body) {
    expect(response.statusCode).to.equal(200);//what do we expect from this request to the server ? => to make sure it is connected so we use the response status
    done();// we have to use done done() to let it no that there is no function next (for this request)
  });
});

it("Signin page ", function (done) {
  request("http://localhost:5001/Signin", function (error, response, body) {
    expect(response.statusCode).to.equal(404);
    done();
  });
});

it("Signup page ", function (done) {
  request("http://localhost:5001/Signup", function (error, response, body) {
    expect(response.statusCode).to.equal(404);
    done();
  });
});

it("HomePage ", function (done) {
  request("http://localhost:5001/Signup", function (error, response, body) {
    expect(response.statusCode).to.equal(404);
    done();
  });
});

it("contactUs ", function (done) {
  request("http://localhost:5001/Signup", function (error, response, body) {
    expect(response.statusCode).to.equal(404);
    done();
  });
});

it("aboutUs ", function (done) {
  request("http://localhost:5001/Signup", function (error, response, body) {
    expect(response.statusCode).to.equal(404);
    done();
  });
});

it("LandingPage ", function (done) {
  request("http://localhost:5001/Signup", function (error, response, body) {
    expect(response.statusCode).to.equal(404);
    done();
  });
});

it("login ", function (done) {
  request("http://localhost:5001/Signup", function (error, response, body) {
    expect(response.statusCode).to.equal(404);
    done();
  });
});