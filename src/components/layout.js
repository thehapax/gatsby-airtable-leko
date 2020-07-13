import React from "react"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
    <Helmet></Helmet>  
    <header></header>
    <div
      style={{
        // Layout styling
        margin: `1%`,
      //  backgroundColor: `#fafafa`,
      }}
    >
      {children}
    </div>
    </>
  )
}
