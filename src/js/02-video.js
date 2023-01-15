import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

// player.on('play', function() {
//     console.log('played the video!');
// });



player.on("timeupdate", throttle(function (data) {
    const time = data.seconds;
    // console.log(time);
   localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, time)
},1000))

const time = +localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);
 player.setCurrentTime(time);