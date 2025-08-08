import clsx from "clsx"
import type React from "react"

import { type NavigationProps } from "@utils/types"

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const currentRoute = '/clientes' // This should be dynamically set based on the current route in a real application

  return (
    <nav>
      <ul className="hidden lg:flex space-x-4">
        {items.map((item) => (
          <li key={item.label}>
            <a
              title={item.title ?? item.label}
              className={
                clsx(
                  "text-black cursor-pointer hover:text-orange",
                  { "text-orange underline": item.href === currentRoute },
                )
              }
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