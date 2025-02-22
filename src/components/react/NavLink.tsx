const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-600 hover:text-gray-900 hover:underline underline-offset-0 hover:underline-offset-4 transition-all duration-200 ease-in-out"
    >
      {children}
    </a>
  )
}

export default NavLink
