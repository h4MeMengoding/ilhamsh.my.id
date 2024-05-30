import React from "react";
import { BiLogoSpotify } from "react-icons/bi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import SpotifyCard from "@/common/components/elements/SpotifyCard";

export default function Spotify() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Spotify" icon={<BiLogoSpotify size={24} />} />
        <SectionSubHeading>
          <p>Diambil secara realtime dengan API dari</p>
        </SectionSubHeading>
      </div>
      <SpotifyCard />
    </div>
  );
}
