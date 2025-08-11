import type { LucideIcon } from 'lucide-react'

export interface ApiListUsersParams {
  page?: number
  limit?: number
}

export interface ApiUser {
  id: number
  name: string
  salary: number
  companyValuation: number
}
export interface ApiListUsers {
  clients: Client[]
  currentPage: number
  totalPages: number
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  label?: string
  icon?: React.ReactElement<LucideIcon>
  iconPosition?: 'left' | 'right'
  size?: 'medium' | 'large'
  variant?: 'outline' | 'filled'
  onClick?: () => void
}

export const CardActionsType = {
  SELECT: "select",
  EDIT: "edit",
  DELETE: "delete",
} as const

export type CardActionsType = typeof CardActionsType[keyof typeof CardActionsType]

export interface CardProps {
  client: Client
  actions?: CardActionsType[]
  onSelectClient: (id: number) => void
}

export interface Client {
  id: number
  name: string
  salary: number
  companyValuation: number
}

export interface ClientsList {
  items: Client[]
  loading?: boolean
  error?: Error | null
  actions?: CardActionsType[]
}

export interface ClientModalFormData {
  clientName: { error: boolean, value: string }
  clientWage: { error: boolean, value: number | string }
  companyValue: { error: boolean, value: number | string }
}

export const ClientModalFormType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  EDIT: "EDIT"
} as const

export type ClientModalFormType = typeof ClientModalFormType[keyof typeof ClientModalFormType]

export interface ClientModalFormProps {
  formType: ClientModalFormType,
  formData: ClientModalFormData,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ClientModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  formType: ClientModalFormType
}

export interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
  inputSize?: 'medium' | 'large'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface MenuItemProps {
  label: string
  title?: string
  href?: string
  Icon?: LucideIcon
  onClick?: () => void
}

export interface MenuProps {
  isMenuOpen: boolean
  items: MenuItemProps[]
  onClose: () => void
}

export interface ModalProps {
  title: string
  isOpen: boolean
  children: React.ReactNode
  onClose?: () => void
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: MenuItemProps[]
}

export interface PaginationProps {
  totalPages?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

export interface SelectedClientsContextType {
  clients: Client[]
  addClient: (client: Client) => void
  removeClient: (client: number) => void
  clearClients: () => void
}