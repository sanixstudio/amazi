"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("02d75e29-2f79-4edb-bc9c-eecaa37aa4a9");
  }, []);

  return null;
};

export default CrispChat;
