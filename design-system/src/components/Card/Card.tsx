import { formatMoney } from "@utils/formatMoney"
import Button from "components/Button/Button"

interface CardProps {
  clientName: string
  clientWage: number
  companyValue: number
}

const Card = (props: CardProps) => {
  return (
    <div className="text-center p-4 rounded-sm bg-white shadow-custom">
      <h3 className="font-bold text-black">{props.clientName}</h3>
      <p className="text-black">Salário: {formatMoney(props.clientWage)}</p>
      <p className="text-black">Empresa: {formatMoney(props.companyValue)}</p>

      <div className="flex justify-between mt-4">
        <Button icon="add" onClick={() => alert('Button Clicked!')} />
        <Button icon="edit" onClick={() => alert('Button Clicked!')} />
        <Button icon="delete" onClick={() => alert('Button Clicked!')} />
      </div>
    </div>
  )
}

export default Card