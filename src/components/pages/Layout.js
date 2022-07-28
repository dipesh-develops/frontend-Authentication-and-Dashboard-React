import {Outlet} from "react-router-dom"
import React from 'react'

import Navbar from '../Navbar'

const Layout = () => {
  return (
    <>
      <Navbar/>
      {/* renders child element outlet */}
      <Outlet/>
    </>
  )
}

export default Layout