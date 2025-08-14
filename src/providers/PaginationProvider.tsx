import type React from "react";
import { useState } from "react";

import { PaginationContext, offsetOptions } from "@contexts";

const PaginationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(offsetOptions[0])

  return <PaginationContext.Provider value={{ page, setPage, limit, setLimit }}>
    {children}
  </PaginationContext.Provider>
}

export default PaginationProvider