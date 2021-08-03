const express = require('express');
const app = express();
const PORT = 3000

app.use(express.json())

let songs = [];

//return list of all songs
app.get('/songs', (req, res) => {
  res.status(200).json(songs);
});

//create a new song, and return new song
app.post('/songs', (req, res) => {
  let addSong = {
    id: songs.length + 1,
    name: req.body.name,
    artist: req.body.artist
  }
  songs.push(addSong);
  res.status(201).json(songs);
});

//return a song with id 
app.get('/songs/:id', (req, res) => {
  let songByID = songs.find(song => song.id === parseInt(req.params.id));
  res.status(200).json(songByID);
});

//edit a song with id, and return edited song
app.put('/songs/:id', (req, res) => {
  let editSong = songs.find(song => song.id === parseInt(req.params.id));
  editSong.name = req.body.name;
  editSong.artist = req.body.artist;
  res.status(200).json(editSong);
});

//delete a song with id, and return deleted song
app.delete('/songs/:id', (req, res) => {
  let deleteSong = songs.find(song => song.id === parseInt(req.params.id));
  let songIndex = songs.indexOf(deleteSong);
  songs.splice(songIndex, 1);
  res.status(200).json(deleteSong);
});

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
