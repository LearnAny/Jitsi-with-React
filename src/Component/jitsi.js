import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

const Jitsi = ({uuId}) => {
  return (
    <>
      <JitsiMeeting
        roomName={uuId}
        getIFrameRef={(node) => (node.style.height = "800px")}
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          SHOW_BRAND_WATERMARK: false,
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_POWERED_BY: false
        }}
        userInfo={{
          displayName: "Priyanka Pal",
        }}
      />
    </>
  );
};

export default Jitsi;
