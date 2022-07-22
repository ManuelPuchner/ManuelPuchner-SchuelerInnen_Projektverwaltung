import { Link, NavLink, routes } from "@redwoodjs/router"

enum Hirachy {
  PRIMARY,
  SECONDARY,
  IMAGE,
  SPECIAL
}

type CustomNavLinkProps = {
  to: string
  children: React.ReactNode
  hirachy?: Hirachy
  props?: any
}

const CustomNavLink = ({ to, children, hirachy = Hirachy.SECONDARY,  ...props }: CustomNavLinkProps) => {
  let baseClassname = `
    self-center
  `
  let baseActiveClassname = `
  `

  switch (hirachy) {
    case Hirachy.SPECIAL:
      baseClassname +=
        ' ' +
        `
        bg-gradient-to-r
        from-prim-red
        via-prim-blue
        to-prim-green
        py-[0.375rem]
        px-3
        rounded-full
        bg-left
        transition-bg
        duration-200
        bg-[length:200%_100%]
        hover:bg-right
            mx-2
      `
      baseActiveClassname += " " + `
        hidden
      `
      break;
    case Hirachy.PRIMARY:
      baseClassname += " " + ``
      baseActiveClassname += " " + ``
      break;
    case Hirachy.IMAGE:
      baseClassname += " " + ``
      baseActiveClassname += " " + ``
      break;
    case Hirachy.SECONDARY:
      baseClassname +=
        ' ' +
        `
          mx-2`
      baseActiveClassname += " " + ``
      break;
    default:
      break;
  }

  return <NavLink to={to} activeClassName={baseActiveClassname} className={baseClassname} {...props}>
    {children}
  </NavLink>
}

type HeaderProps = {
  className?: string
}
const Header = ({className}: HeaderProps) => {

  return (
    <header className={`fixed top-0 w-screen rounded-lg text-white z-10`}>
      <div className={`h-min wrapper flex m-2 px-4 py-2 justify-between backdrop-blur-xl rounded-xl bg-white bg-opacity-20 ${className}`}>
        <div className="flex">
          <div className="logo self-center">
            <CustomNavLink to={routes.home()} hirachy={Hirachy.IMAGE}>
              <img src={'/logo.png'} alt="Logo" className="w-36" />
            </CustomNavLink>
          </div>
        </div>
        <nav className="flex">
          <ul className="self-center flex">
            <li className="flex">
              <CustomNavLink to={routes.dashboard()} hirachy={Hirachy.SPECIAL}>
                Go To Dashboard
              </CustomNavLink>
            </li>
            <li className="flex">
              <CustomNavLink to={routes.home()}>Home</CustomNavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
