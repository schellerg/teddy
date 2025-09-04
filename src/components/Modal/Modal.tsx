import React, { useEffect, useRef } from "react"

import { X } from "lucide-react"

import { type ModalProps } from "@utils/types"

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleClose = () => {
    if (onClose) onClose()
  }

  const handleEscape = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleClose()
    }
  }

  useEffect(() => {
    const modal = modalRef.current

    if (!modal) return

    if (isOpen && !modal.open) {
      return modal.showModal()
    }

    return modal.close()
  }, [isOpen])

  if (isOpen)
    return (
      <dialog
        ref={modalRef}
        className="open:fixed open:flex flex-col inset-0 lg:max-w-max m-auto p-4 bg-white rounded-sm z-50 backdrop:opacity-30 backdrop:bg-black"
        onKeyDown={handleEscape}
      >
        <>
          <header className="flex items-center justify-between mb-3">
            <p className="font-bold">{title}</p>
            <a className='cursor-pointer' title='Fechar modal' onClick={handleClose} data-testid="close-modal-button">
              <X size={20} />
            </a>
          </header>
          {children}
        </>
      </dialog>
    )
}

export default Modal