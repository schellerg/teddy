import React from "react"

import clsx from 'clsx'
import { formatMoney } from "@utils/formatMoney"

import { type CardProps } from "@utils/types"

const Card: React.FC<CardProps> = ({ id, name, salary, companyValuation, actions = [] }) => {
  return (
    <li key={id} className="text-center p-4 rounded-sm bg-white shadow-custom" data-testid="client-card">
      <h3 className="font-bold text-black" data-testid="name-display">{name}</h3>
      <p className="text-black" data-testid="salary-display">Salário: {formatMoney(salary)}</p>
      <p className="text-black" data-testid="company-valuation-display">Empresa: {formatMoney(companyValuation)}</p>

      {actions.length &&
        <div className={clsx("flex mt-4", actions.length > 1 ? "justify-between" : "justify-end")}>
          {actions}
        </div>
      }
    </li>
  )
}

export default Card