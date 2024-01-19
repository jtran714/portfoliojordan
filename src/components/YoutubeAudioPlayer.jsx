// import React, { useState } from 'react';
// import YouTube from 'react-youtube';

// export const YoutubeAudioPlayer = ({ videoUrl }) => {
//   const [isMuted, setIsMuted] = useState(false);

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   const opts = {
//     height: '0',
//     width: '0',
//     playerVars: {
//       autoplay: 1,
//       mute: isMuted ? 1 : 0,
//     },
//   };

//   return (
//     <div>
//       <YouTube videoId={videoUrl.split('v=')[1]} opts={opts} />
//       <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
//     </div>
//   );
// };
