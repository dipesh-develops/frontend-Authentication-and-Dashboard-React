import {Outlet} from "react-router-dom"
import React from 'react'

import Navbar from '../Navbar'
import { CssBaseline } from "@mui/material"

const Layout = () => {
  return (
    <>
      <CssBaseline/>
      <Navbar/>
      {/* renders child element outlet */}
      <Outlet/>
    </>
  )
}

export default Layout