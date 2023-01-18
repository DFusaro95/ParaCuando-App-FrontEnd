import Link from "next/link"

const links = [
  {
    label: "Create Post",
    route: "/newpost"
  },   
  {
    label: "Favourites",
    route: "/favourites"
  },
  {
    label: "Sign In",
    route: "/signin"
  },
  {
    label: "Sign Up",
    route: "/signup"
  },
  {
    label: "Profile",
    route: "/profile"
  }
]

export function Navbar () {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href={"/"}>Home</Link></li>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}