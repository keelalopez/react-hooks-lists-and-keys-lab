import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const individualLinks = links.map((link) => {
    return (
      <a href={`#${link}`} key={link}>{link}</a>
      )
  })

  return (
    <nav>
      <ol>
        {individualLinks}
      </ol>
    </nav>
  )
}

export default NavBar;
