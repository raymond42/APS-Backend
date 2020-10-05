import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import dummyUser from "./dummy/dummyUser";

chai.use(chaiHttp);
chai.use(expect);

describe("POST/api/v1/auth", () => {
  it("Should return error if user tries to signup with an invalid firstName", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.invalidFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "First name cannot contain number or special characters"
        );
        done();
      });
  });

  it("Should return error if user tries to signup with missing firatName field", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.missingFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("First name is required");
        done();
      });
  });
  it("Should return error if user tries to signup  with invalid email", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.invalidEmail)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("email must be a valid email");
        done();
      });
  });

  it("Should return error if user tries to signup with missing email field", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.missingEmail)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("email is required");
        done();
      });
  });

  it("Should return error if user tries to signup  with invalid password", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.invalidPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "Password must be at least 8 characters with at least a number, Upper and lower cases special character"
        );
        done();
      });
  });

  it("Should return error if user tries to signup with missing password field", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.missingPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("password is required");
        done();
      });
  });

  it("Should return error if user tries to signup with invalid confirm password type", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.numConfirmPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "Confirm password must be a string"
        );
        done();
      });
  });

  it("Should return error if user tries to signup with missing confirm", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.missingConfirm)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("Confirm password is required");
        done();
      });
  });

  it("Should return error if user tries to signup with when passwords do not match", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.unmatchedPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("Passwords must match");
        done();
      });
  });

  it("Should return error if user tries to signup  with a few characters for name", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.lessFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "First name must be at least 2 characters long"
        );
        done();
      });
  });

  it("Should return error if user tries to signup  with a few numbers for name", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.numFirstName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("First name must be a string");
        done();
      });
  });

  it("Should return error if user tries to signup with an invalid lasttName", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.invalidLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "Last name cannot contain number or special characters"
        );
        done();
      });
  });

  it("Should return error if user tries to signup with an invalid Last name", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.firstNumLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "Last name cannot contain number or special characters"
        );
        done();
      });
  });

  it("Should return error if user tries to signup with missing lasttName field", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.missingLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("Last name is required");
        done();
      });
  });

  it("Should return error if user tries to signup  with a few characters for name", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.lessLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "Last name must be at least 2 characters long"
        );
        done();
      });
  });

  it("Should return error if user tries to signup  with a few numbers for name", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.numLastName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("Last name must be a string");
        done();
      });
  });

  it("Should return error if user tries to signup with an invalid UserName", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.invalidUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "User name must contain only alpha-numeric characters"
        );
        done();
      });
  });

  it("Should return error if user tries to signup with an invalid User name", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.firstNumUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "User name cannot begin with a number"
        );
        done();
      });
  });

  it("Should return error if user tries to signup with missing userName field", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.missingUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("User name is required");
        done();
      });
  });

  it("Should return error if user tries to signup  with a few characters for name", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.lessUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "User name must be at least 2 characters long"
        );
        done();
      });
  });

  it("Should return error if user tries to signup  with a few numbers for name", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.numUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(400);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal("User name must be a string");
        done();
      });
  });

  it("Should successfully register user upon correct validation", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.validUser)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(201);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("message", "data");
        expect(res.body.message).to.deep.equal(
          "User created. Please, Check your email for a verification link"
        );
        expect(res.body.data).to.have.keys(
          "_id",
          "__v",
          "date",
          "isAdmin",
          "verified",
          "first_name",
          "last_name",
          "username",
          "email"
        );
        done();
      });
  });

  it("should return error if user tries to signup with an existing email", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.existingEmail)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(409);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "Email raymond42.gr@gmail.com already exists"
        );
        done();
      });
  });

  it("should return error if user tries to signup with an existing userName", (done) => {
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(dummyUser.existingUserName)
      .end((err, res) => {
        if (err) done(err);
        expect(res).have.status(409);
        expect(res).to.be.an("object");
        expect(res.body).to.have.keys("error");
        expect(res.body.error).to.deep.equal(
          "Username Kadhut is already taken, try another one"
        );
        done();
      });
  });
});
