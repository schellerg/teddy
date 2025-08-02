import type React from "react"

interface NavigationItemProps {
  label: string
  title?: string
  onClick?: () => void
}

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: NavigationItemProps[]
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {props.items.map((item) => (
          <li key={item.label}>
            <a
              title={item.title ?? item.label}
              className="text-black cursor-pointer hover:text-orange"
              onClick={item.onClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation