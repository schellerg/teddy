import React from 'react'
import type { FieldError } from 'react-hook-form'
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
  createdAt: Date
  updatedAt: Date
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

export interface CardProps extends Omit<Client, "createdAt" | "updatedAt"> {
  actions?: React.ReactNode[]
}

export interface Client {
  id: number
  name: string
  salary: number
  companyValuation: number
  createdAt: Date
  updatedAt: Date
}

export interface ClientsListProps {
  items: Client[]
  loading?: boolean
  error?: Error | null
  renderActions?: (client: Client) => React.ReactNode[]
}

export interface ClientModalFormData {
  id?: number
  name: string
  salary: number
  companyValuation: number
}

export const ClientModalFormType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  EDIT: "EDIT"
} as const

export type ClientModalFormType = typeof ClientModalFormType[keyof typeof ClientModalFormType]

export interface ClientModalFormProps {
  title: string
  client?: ClientModalFormData
  loading: boolean
  error?: Error | null
  onSubmit: (data: ClientModalFormData) => void
}

export interface ClientModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  formType: ClientModalFormType
  client?: Client
  refetch: () => Promise<void>
}

export interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  helperText?: string
  inputSize?: 'medium' | 'large'
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

export type PaginationContextType = {
  page: number
  limit: number,
  setPage: (page: number) => void,
  setLimit: (offset: number) => void,
}

export interface SelectedClientsContextType {
  selectedClients: Client[]
  addSelectedClient: (client: Client) => void
  removeSelectedClient: (client: number) => void
  clearSelectedClients: () => void
}