import { cn } from "@utils/cn"
import { type ContainerProps } from "@utils/types"

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={cn("flex items-center w-full sm:w-[1200px] mx-auto", className)}>{children}</div>
}

export default Container