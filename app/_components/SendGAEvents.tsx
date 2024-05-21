"use client";

import { sendGAEvent } from "@next/third-parties/google";

export function SendGAEvents() {
  return (
    <div>
      <button
        onClick={() => sendGAEvent({ event: "buttonClicked", value: "xyz" })}
      >
        Send Event
      </button>
    </div>
  );
}
