import clsx from "clsx"

interface PaginationProps {
  totalPages?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const Pagination = (props: PaginationProps) => {
  return (
    <nav>
      <ol className="flex space-x-2 font-bold text-sm">
        {
          [...Array(props.totalPages || 1)].map((x, index) =>
            <li>
              <a
                className={
                  clsx('flex items-center justify-center min-w-9 p-2 cursor-pointer rounded-sm hover:text-white hover:bg-orange',
                    {
                      'bg-orange text-white': props.currentPage === index + 1,
                    }
                  )
                }
                key={`page-${index + 1}`}
                title={`Página ${index + 1}`}>
                {index + 1}
              </a>
            </li>
          )
        }
      </ol>
    </nav>
  )
}

export default Pagination