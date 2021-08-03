const app = require("../app");
const request = require("supertest");

//Fill in the test case below for the Songs API

describe("routes/songs", () => {

  it("POST /songs should return a new song object", () => {
   const requestBody = {name: "Song 1", artist: "Will"};
   const responseBody = {id: 1, name: "Song 1", artist: "Will"};
   return request(app)
   .post('/songs')
   .send(requestBody)

   .then(response => {
    expect(response.status).toEqual(201);
     expect(response.body).toEqual(responseBody)
   });

  });
  
  it("GET /songs should return a non empty array", () => {
    return request(app)
    .get('/songs')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(Array.isArray(response.body)).toEqual(true);
      expect(response.body.length).toEqual(1);
    });
   

  });

  it("GET /songs/:id should return song with id specified", () => {
    const responseBody = {id: 1, name: "Song 1", artist: "Will"};
    return request(app)
    .get('/songs/1')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toMatchObject(responseBody);
    });

  });
  
  it("PUT /songs/:id should return the updated song", () => {
    const requestBody = {id: 1, name: "Song 2", artist: "Will"};
    const responseBody = {id: 1, name: "Song 2", artist: "Will"};

    return request(app)
    .put('/songs/1')
    .send(requestBody)

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody);
    });

  });

  it("DELETE /songs/:id should return the deleted song", () => {
    const responseBody = {id: 1, name: "Song 2", artist: "Will"};

    return request(app)
    .delete('/songs/1')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody);
    });

  });
  
  it("GET /songs should return an empty array", () => {
    return request(app)
    .get('/songs')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(Array.isArray(response.body)).toEqual(true);
      expect(response.body.length).toEqual(0);
    });
    
  });

});

