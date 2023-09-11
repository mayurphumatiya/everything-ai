"use client";
import React from "react";
import { CrispChat } from "./crisp-chat";
import { useAuth } from "@clerk/nextjs";

export const CrispProvider = () => {
  const { isSignedIn } = useAuth();
  return <> {isSignedIn && <CrispChat />}</>;
};
