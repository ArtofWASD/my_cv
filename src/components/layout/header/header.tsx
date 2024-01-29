import NavMenu from "../../navMenu/navMenu"

const Header = () => {
  const menuItems = [
    { name: "About", img: "/icons/profile.png", url: "/about" },
    { name: "Projects", img: "/icons/projects.png", url: "/projects" },
    { name: "Blog", img: "/icons/blog.png", url: "/blog" },
    { name: "Contacts", img: "/icons/contact.png", url: "/contacts" },
  ]
  return (
    <header>
      <div className="grid grid-flow-col">
        <NavMenu menuItems={menuItems} />
      </div>
    </header>
  )
}

export default Header
