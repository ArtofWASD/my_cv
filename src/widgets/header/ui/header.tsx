"use client"
import { usePathname } from "next/navigation"
import Button from "@/src/shared/ui/button"
import Toggler from "@/src/shared/ui/toggler"
import { NavMenu } from "../../navMenu/ui/navMenu"

export const Header = () => {
  const pathname = usePathname()
  const menuItems = [
    { name: "About", img: "/icons/profile.png", url: "/about" },
    { name: "Projects", img: "/icons/projects.png", url: "/projects" },
    { name: "Blog", img: "/icons/blog.png", url: "/blog" },
    { name: "Contacts", img: "/icons/contact.png", url: "/contacts" },
  ]
  return (
    <header className="grid">
      <div className="justify-self-end pt-2 pr-2">
        <Toggler />
      </div>
      <div className="grid grid-cols-[94%_5%] justify-items-center items-end">
        <div className="py-4">
          <NavMenu menuItems={menuItems} />
        </div>
        {pathname == "/" ? (
          <></>
        ) : (
          <>
            <div className="justify-self-end self-center pt-4">
              <Button />
            </div>
          </>
        )}
      </div>
    </header>
  )
}
