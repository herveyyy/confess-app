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
         <div>
 {/* <video
          playsInline
          loop
          autoPlay
          controls
          alt="All the devices"
          src="src\data\rickshort.mp4"
          
        /> */}
        <img className="w" 
        src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"/>
</div> 
);
}

    
  




export default YoutubeEmbed;