const fs = require('fs')
const ydl = require('youtube-dl')
const {youtubeWatch} = require('./config')


function download(watchId){
    const video = ydl(`${youtubeWatch}${watchId}`,['--format=18'],{ cwd: __dirname })

video.on('info', function(info) {
    console.log({info})
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log(Math.pow(10,-6))
    console.log('size: ' + info.size * Math.pow(10,-6))
  })
   
  video.pipe(fs.createWriteStream('myvideo.mp4'))
  video.on('complete', function complete(info) {
    console.log('filename: ' + info._filename + ' already downloaded.')
  })
  
  video.on('end', function() {
    console.log('finished downloading!')
  })
}
  module.exports = {
    download
  }