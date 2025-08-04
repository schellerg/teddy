import React, { useEffect, useRef, useState } from "react"

import Icon from "components/Icon"

interface ModalProps {
  title: string
  isOpen: boolean
  children: React.ReactNode
  onClose?: () => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen)
  const modalRef = useRef<HTMLDialogElement | null>(null)

  const handleClose = () => {
    if (onClose) onClose()
    setModalOpen(false)
  }

  const handleEscape = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleClose()
    }
  }

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return

    if (modal) {
      if (isModalOpen) {
        return modal.showModal()
      }

      return modal.close()
    }
  }, [isModalOpen])

  return (
    <dialog
      ref={modalRef}
      className="open:fixed open:flex flex-col inset-0 lg:max-w-max m-auto p-4 bg-white rounded-sm z-50 backdrop:opacity-30 backdrop:bg-black"
      onKeyDown={handleEscape}
    >
      <>
        <header className="flex items-center justify-between mb-3">
          <p className="font-bold">{title}</p>
          <Icon variant="close" onClick={handleClose} />
        </header>
        {children}
      </>
    </dialog>
  )
}

export default Modal