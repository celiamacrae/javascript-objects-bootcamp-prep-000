var playlist = { BlackEyedPeas : "Boom Boom Pow"

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, {[artist]: song})
}