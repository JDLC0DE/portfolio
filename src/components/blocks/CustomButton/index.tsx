import clsx from 'clsx'
import { Button, ButtonProps } from '@nextui-org/react'
import { FC } from 'react'

/* interface CustomButtonProps extends Omit<ButtonProps, 'color'> {
  color?: ButtonProps['color'] | 'white'
} */

export const CustomButton: FC<ButtonProps> = ({
  color = 'default',
  variant,
  className,
  ...props
}) => {
  return (
    <Button
      type="button"
      color={color}
      variant={variant}
      className={clsx(
        'font-semibold',
        {
          'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950':
            variant === 'solid' && color === 'default',
          'border-zinc-950 dark:border-white text-zinc-950 dark:text-white':
            variant === 'bordered' && color === 'default'
        },
        className
      )}
      {...props}
    />
  )
}
