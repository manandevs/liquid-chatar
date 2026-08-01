import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";


const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-lime-600 to-green-600 text-white hover:bg-primary/90 shadow-[inset_0_1px_1px_0_rgb(255_255_255_/_0.4),inset_0_-1px_1px_0_rgba(0,0,0,0.2)] border border-green-600 hover:opacity-90",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200/75 border border-zinc-200/75 hover:opacity-80 transition-all ease-in-out duration-150 shadow-[inset_0_1px_1px_0_rgb(255_255_255_/_0.9)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-zinc-200 bg-transparent hover:bg-zinc-50 text-zinc-700",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        origin: "bg-zinc-900 text-zinc-50 hover:bg-zinc-800 border border-zinc-800 shadow-sm",
        dark: "bg-gradient-to-b from-zinc-700 to-zinc-800 text-zinc-50 hover:bg-zinc-800/80 border-zinc-700 shadow-white/10 shadow-[inset_0_1px_1px_0_rgb(255_255_255_/_0.9)] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_-1px_1px_0_rgba(0,0,0,0.8)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };