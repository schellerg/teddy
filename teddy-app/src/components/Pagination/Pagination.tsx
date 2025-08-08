import clsx from "clsx"
import type React from "react"

import { type PaginationProps } from "@utils/types"

const formatPagination = (totalPages: number, currentPage: number): Array<number | string> => {
  const pages = []

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
    return pages
  }

  pages.push(1)

  if (currentPage > 3) {
    pages.push('...')
  }

  const minRange = Math.max(2, currentPage - 1)
  const maxRange = Math.min(totalPages - 1, currentPage + 1)

  for (let i = minRange; i <= maxRange; i++) pages.push(i)

  if (currentPage < totalPages - 2) {
    pages.push('...')
  }

  pages.push(totalPages)

  return pages
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const pages = formatPagination(totalPages || 1, currentPage || 1)

  return (
    <nav className="my-5">
      <ol className="flex space-x-1 font-bold text-sm">
        {
          pages.map((page, index) => {
            const isEllipsis = typeof page === 'string'
            const activePage = !isEllipsis && currentPage === page

            return (
              <li
                className={
                  clsx(
                    "flex *:block *:w-full *:text-center min-w-9 *:p-2 rounded-sm",
                    {
                      "bg-orange text-white": activePage,
                    }
                  )
                }
                key={isEllipsis ? `ellipsis-${index}` : `page-${page}`}
              >
                {
                  isEllipsis ? <span>{page}</span> : <a className={clsx("cursor-pointer", { "hover:text-orange": !activePage })} title={`Página ${page}`}>{page}</a>
                }
              </li>
            )
          })
        }
      </ol>
    </nav>
  )
}

export default Pagination