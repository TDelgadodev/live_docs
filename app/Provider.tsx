"use client";

import React from 'react';
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
import Loader from '@/components/landing/Loader';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider publicApiKey={"pk_prod_FRO2…wTKTMF"}>
      <ClientSideSuspense fallback={<Loader />}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>  )
}

export default Provider