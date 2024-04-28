'use client'
import React, { useState } from "react";
import DocContext from "./docContext";

const DocContextProvider = ({ children }) => {
  const [isDocument, setDocument] = useState(false);
  return <DocContext.Provider value={{isDocument,setDocument}} >{children}</DocContext.Provider>;
};

export default DocContextProvider;
