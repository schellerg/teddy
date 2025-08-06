import type React from "react"
import { formatMoney } from "@utils/formatMoney"

import { Button } from "@components"
import { Plus, Pencil, Trash2 } from "lucide-react"

import type { CardProps } from "@utils/types"

const Card: React.FC<CardProps> = ({ clientName, clientWage, companyValue }) => {
  const iconSize = 18

  return (
    <div className="text-center p-4 rounded-sm bg-white shadow-custom">
      <h3 className="font-bold text-black">{clientName}</h3>
      <p className="text-black">Salário: {formatMoney(clientWage)}</p>
      <p className="text-black">Empresa: {formatMoney(companyValue)}</p>

      <div className="flex justify-between mt-4">
        <Button icon={<Plus size={iconSize} />} onClick={() => alert('Button Clicked!')} />
        <Button icon={<Pencil size={iconSize} />} onClick={() => alert('Button Clicked!')} />
        <Button icon={<Trash2 color='#ec6724' size={iconSize} />} onClick={() => alert('Button Clicked!')} />
      </div>
    </div>
  )
}

export default Card