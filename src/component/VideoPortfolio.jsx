import React from "react";
import "./VideoPortfolio.css";

const reelsData = [
  {
    title: "Video From @nishant.chauhan20",
    videoUrl: "/7.mp4",
    instagramUrl: "https://www.instagram.com/nishant.chauhan20/",
  },
  {
    title: "Video From @wollvo_design",
    videoUrl: "/2.mp4",
    instagramUrl: "https://www.instagram.com/reel/DEFQb6kzSg-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @traikare",
    videoUrl: "/3.mp4",
    instagramUrl: "https://www.instagram.com/reel/DAvtQy7pRYK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @batchmanofficial",
    videoUrl: "/11.mp4",
    instagramUrl: "https://www.instagram.com/reel/DCReVTYCWk_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @traikare",
    videoUrl: "/5.mp4",
    instagramUrl: "https://www.instagram.com/reel/DBJehA_y5PO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @batchmanofficial",
    videoUrl: "/6.mp4",
    instagramUrl: "https://www.instagram.com/reel/DB1Eik6CW54/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @nishant.chauhan20",
    videoUrl: "/8.mp4",
    instagramUrl: "https://www.instagram.com/nishant.chauhan20/",
  },
  {
    title: "Video From @wollvo_design",
    videoUrl: "/1.mp4",
    instagramUrl: "https://www.instagram.com/reel/DE7T_t3zaOs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @batchmanofficial",
    videoUrl: "/9.mp4",
    instagramUrl: "https://www.instagram.com/reel/DEcquZpTtbp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @batchmanofficial",
    videoUrl: "/10.mp4",
    instagramUrl: "https://www.instagram.com/reel/DDmM3myTwBf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @traikare",
    videoUrl: "/4.mp4",
    instagramUrl: "https://www.instagram.com/reel/DEAOYEUyOGq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @batchmancodes",
    videoUrl: "/12.mp4",
    instagramUrl: "https://www.instagram.com/reel/C-kw-COIomL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @batchmancodes",
    videoUrl: "/13.mp4",
    instagramUrl: "https://www.instagram.com/reel/DALrSp5SMFC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @sehyog.with.nisha",
    videoUrl: "/14.mp4",
    instagramUrl: "https://www.instagram.com/reel/C5gvyudSOlp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Video From @traikare",
    videoUrl: "/15.mp4",
    instagramUrl: "https://www.instagram.com/reel/DB4HD6mSz0g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const VideoPortfolio = () => {
  return (
    <section className="video-portfolio" id="video-portfolio">
      <div className="portfolio-header">
        <h1>Video Portfolio</h1>
        <p>Explore my creative work in video editing and reels.</p>
      </div>

      <div className="reels-container">
        {reelsData.map((reel, index) => (
          <div className="reel-card" key={index}>
            <video
              className="reel-video"
              src={reel.videoUrl}
              controls
              loop
              muted
              autoPlay // Enable autoplay
            />
            <div className="reel-info">
              <h3>{reel.title}</h3>
              <a
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                View on Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoPortfolio;
