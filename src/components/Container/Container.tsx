import { cn } from "@utils/cn"
import { type ContainerProps } from "@utils/types"

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={cn("flex items-center w-full xl:w-[1200px] px-4 mx-auto", className)}>{children}</div>
}

export default Container