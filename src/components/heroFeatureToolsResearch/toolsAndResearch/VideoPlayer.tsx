import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUri }) => {
    return (
        <div className="video-player">
            <ReactPlayer url={videoUri} controls={false} loop={true} muted playing={true} height={"18rem"} width={"30rem"} />
        </div>
    );
};

export default VideoPlayer;
