import { createContext } from "react";
import type { SelectedClientsContextType } from "@utils/types";

export const SelectedClientsContext = createContext<SelectedClientsContextType | null>(null)