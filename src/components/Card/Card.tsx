import React from "react"

import clsx from 'clsx'
import { formatMoney } from "@utils/formatMoney"

import { type CardProps } from "@utils/types"

const Card: React.FC<CardProps> = ({ name, salary, companyValuation, actions = [] }) => {
  return (
    <li className="text-center p-4 rounded-sm bg-white shadow-custom">
      <h3 className="font-bold text-black">{name}</h3>
      <p className="text-black">Salário: {formatMoney(salary)}</p>
      <p className="text-black">Empresa: {formatMoney(companyValuation)}</p>

      {actions.length &&
        <div className={clsx("flex mt-4", actions.length > 1 ? "justify-between" : "justify-end")}>
          {actions}
        </div>
      }
    </li>
  )
}

export default Card