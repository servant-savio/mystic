import React from 'react';
const YouTube = () => {
  const youtubeBase = "https://www.youtube.com";
  const youtubeUrl = `${youtubeBase}/embed/ckUJRg04jyg?si=s54Z0yroDOZh3-83&t=20`;
  return (
    <div>
      <iframe width="560" height="315" 
        src={youtubeUrl} title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
  );
};

export default YouTube;
