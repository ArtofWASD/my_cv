"use client"
import Button from "../../button/button"
import NavMenu from "../../navMenu/navMenu"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  console.log(pathname);
  

  const menuItems = [
    { name: "About", img: "/icons/profile.png", url: "/about" },
    { name: "Projects", img: "/icons/projects.png", url: "/projects" },
    { name: "Blog", img: "/icons/blog.png", url: "/blog" },
    { name: "Contacts", img: "/icons/contact.png", url: "/contacts" },
  ]
  return (
    <header className="grid grid-cols-[94%_5%] justify-items-center items-end">
      <div className="">
        <NavMenu menuItems={menuItems} />
      </div>
      {pathname == '/' ? (
        <></>
      ) : (
        <>
          <div className="justify-self-end">
            <Button />
          </div>
        </>
      )}
    </header>
  )
}

export default Header
