'use client'
import React, { useState, useContext } from 'react'
import DocContext from '@/context/docContext';
import Sidebar from "@/components/Sidebar/page";
import Message from "../components/Message/page"
import Usersection from "../components/UserSection/page"
import DocumentSection from "../components/DocumentSection/page"

export default function Home() {
  const { isDocument, setDocument } = useContext(DocContext);
  return (
    <div className="flex">

      <Sidebar />
      {isDocument ? <DocumentSection /> : <Usersection />}

    </div>
  );
}
