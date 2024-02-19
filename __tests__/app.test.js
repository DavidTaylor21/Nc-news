const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data");
const endPoints = require("../endpoints.json");

beforeEach(() => seed(data));
afterAll(() => db.end());

describe("/api/topics", () => {
  describe("GET topics", () => {
    test("Server should respond with status code 200 and array of all topics", () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then((response) => {
          const topics = response.body.topics;
          expect(topics).toHaveLength(3);
          topics.forEach((topic) => {
            expect(topic).toHaveProperty("slug");
            expect(topic).toHaveProperty("description");
          });
        });
    });
  });
});
describe("Test for endpoints that dont exist", () => {
  test("should return an error message of page not found", () => {
    return request(app)
      .get("/api/robot")
      .expect(404)
      .then((response) => {
        expect(response.body.msg).toBe("Page not found");
      });
  });
});
describe("/api", () => {
  test("should respond with 200 and object describing all the available endpoints on API", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then((response) => {
        expect(response.body.endpointsInformation).toHaveProperty("GET /api");
        expect(response.body.endpointsInformation["GET /api"]).toHaveProperty(
          "description"
        );
        expect(response.body.endpointsInformation["GET /api"]).toHaveProperty(
          "queries"
        );
        expect(response.body.endpointsInformation["GET /api"]).toHaveProperty(
          "exampleResponse"
        );
        expect(response.body.endpointsInformation).toEqual(endPoints);
      });
  });
});
describe("/api/articles/:article_id", () => {
  test("SHould respond with 200 status and an object corresponding to the given article id", () => {
    return request(app)
      .get("/api/articles/1")
      .expect(200)
      .then((response) => {
        expect(typeof response.body.article.article_id).toBe("number");
        expect(typeof response.body.article.title).toBe("string");
        expect(typeof response.body.article.topic).toBe("string");
        expect(typeof response.body.article.author).toBe("string");
        expect(typeof response.body.article.body).toBe("string");
        expect(typeof response.body.article.created_at).toBe("string");
        expect(typeof response.body.article.votes).toBe("number");
        expect(typeof response.body.article.article_img_url).toBe("string");
      });
  });
});
