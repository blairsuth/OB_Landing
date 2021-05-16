import * as React from "react";
import { Link } from 'gatsby';
import Logo from "../images/logo-white.svg";

const Header = () => (
  <header>
    <div className="px-4 py-8 alt-bg md:px-8">
      <div className="grid grid-cols-2 space-between">
        <div>
          <Link to='/'>
            <img src={Logo} className="h-12" alt="" />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          {/* <Link to='/' className="px-1">Abcd</Link> */}
          {/* <Link to='/' className="px-1">XYZ</Link> */}
          <button className="px-4 py-2 yellow-bg rounded-md">Join as Pro</button>
        </div>
      </div>
    </div>
  </header>
)

export default Header
