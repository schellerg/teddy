import { createContext } from "react";
import type { SelectedClientsContextType } from "@utils/types";

const SelectedClientsContext = createContext<SelectedClientsContextType | null>(null)

export default SelectedClientsContext