import { Play } from "lucide-react";
import React from "react";
import { TikTokEmbed } from "react-social-media-embed";

interface VideoItem {
  id: string;
  url: string;
}

const videos: VideoItem[] = [
  {
    id: "1",
    url: "https://www.tiktok.com/@82mdijital/video/7414886050427915525",
  },
  {
    id: "2",
    url: "https://www.tiktok.com/@82mdijital/video/7414135191339404549",
  },
  {
    id: "3",
    url: "https://www.tiktok.com/@82mdijital/video/7413997721608113414",
  },
  {
    id: "4",
    url: "https://www.tiktok.com/@82mdijital/video/7382639837406432517",
  },
  {
    id: "5",
    url: "/https://www.tiktok.com/@82mdijital/video/7377067582496443653",
  },
  {
    id: "6",
    url: "/https://www.tiktok.com/@82mdijital/video/7368121226079816965",
  },
  {
    id: "7",
    url: "https://www.tiktok.com/@82mdijital/video/7367426142724263174",
  },
  {
    id: "8",
    url: "https://www.tiktok.com/@82mdijital/video/7367438862647430405",
  },
];

export default function TikTokGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="relative group">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TikTokEmbed url={video.url} width={325} />
          </div>
        </div>
      ))}
    </div>
  );
}
