import { ComponentPropsWithRef, FC } from 'react'

type CarouselDotsProps = ComponentPropsWithRef<'button'>

export const CarouselDots: FC<CarouselDotsProps> = ({
  children,
  ...restProps
}) => {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
