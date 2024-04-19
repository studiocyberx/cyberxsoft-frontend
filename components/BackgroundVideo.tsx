import React from "react";

interface BackgroundVideoProps {
  children: React.ReactNode;
  videoSrc: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  children,
  videoSrc,
  ...props
}) => {
  return (
    <div {...props} className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {children}
    </div>
  );
};

export default BackgroundVideo;
