import React from "react";
import Link from "../Link/Link";

const Header = (props) => {
  return (
    <div>
      <Link datatestid="linkhome" href="/">Home</Link>
      <Link datatestid="linkcomponent1" href="/component1">Component 1</Link>
      <Link datatestid="linkcomponent2" href="/component2">Component 2</Link>
    </div>
  );
};

export default Header;
