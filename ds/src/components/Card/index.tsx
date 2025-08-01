interface CardProps {
  title: string
  text: string
}

const Card = (props: CardProps) => {
  return (
    <div className="">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Card