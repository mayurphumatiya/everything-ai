"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("133c79a9-bcee-43af-98bf-4716fd00755c");
  }, []);

  return null;
};
