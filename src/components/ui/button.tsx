import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 font-sans text-xs font-medium uppercase tracking-[0.2em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gold text-navy hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)]",
        outline: "border-[1.5px] border-gold text-gold hover:bg-gold hover:text-navy",
        ghost: "text-muted border-b border-muted/30 pb-0.5 hover:text-white hover:border-white rounded-none px-0",
        red: "bg-martial-red text-white hover:bg-martial-red-bright hover:-translate-y-0.5",
      },
      size: {
        default: "px-11 py-5",
        sm: "px-7 py-3",
        lg: "px-14 py-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
