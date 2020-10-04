import chai, { should } from "chai";
import chaiHttp from "chai-http";
import app from "../index";

chai.use(chaiHttp);
chai.use(should);

describe("Test the base url / for aps", () => {
  it("Should return a status 200", () => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.message.should.equal(
          "Welcome to Automating Processing System"
        );
      });
  });
});
