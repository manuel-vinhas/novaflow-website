"use client"; // Ensures this runs only on the client

import { useEffect } from "react";

const BotPressChat = () => {
  useEffect(() => {
    // Inject BotPress Webchat script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Inject Custom BotPress Script
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/02/21/16/20250221162528-CPW0AY7X.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // No UI needed, only loads scripts
};

export default BotPressChat;
