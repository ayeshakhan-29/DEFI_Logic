import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    videoUri: string;
}


const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUri }) => {
    const playerConfig = {
        youtube: {
            playerVars: {
                modestbranding: 1, // Remove YouTube logo
                showinfo: 0,      // Remove video title and uploader
                controls: 0,      // Hide video controls (you already did this)
            },
        },
    };
    return (
        <div className="video-player">
            <ReactPlayer url={videoUri} config={{ youtube: { playerVars: { showinfo: 1, modestbranding: 1 } } }} controls={false} loop={true} muted playing={true} />
        </div>
    );
};

export default VideoPlayer;
