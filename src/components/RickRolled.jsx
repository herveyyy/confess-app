import React,{useRef,useEffect} from "react";
function YoutubeEmbed() {
    const videoEl = useRef(null);
    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };
    useEffect(() => {
      attemptPlay();
    }, []);

    return (
         <div className="video-responsive">
 <video
          playsInline
          loop
          autoPlay
          controls
          alt="All the devices"
          src="src\data\RickVid.mp4"
          ref={videoEl}
        />
</div> 
);
}

    
  




export default YoutubeEmbed;