import { createContext } from "react";
import type { PaginationContextType } from "@utils/types";

export const offsetOptions = [16, 32, 64]

const PaginationContext = createContext<PaginationContextType>({
  page: 1,
  limit: offsetOptions[0],
  setPage: () => { },
  setLimit: () => { },
})

export default PaginationContext