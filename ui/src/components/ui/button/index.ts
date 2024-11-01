import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'payment-inline-flex payment-items-center payment-justify-center payment-gap-2 payment-whitespace-nowrap payment-rounded-md payment-text-sm payment-font-medium payment-transition-colors focus-visible:payment-outline-none focus-visible:payment-ring-1 focus-visible:payment-ring-ring disabled:payment-pointer-events-none disabled:payment-opacity-50 [&_svg]:payment-pointer-events-none [&_svg]:payment-size-4 [&_svg]:payment-shrink-0',
  {
    variants: {
      variant: {
        default:
          'payment-bg-primary payment-text-primary-foreground payment-shadow hover:payment-bg-primary/90',
        destructive:
          'payment-bg-destructive payment-text-destructive-foreground payment-shadow-sm hover:payment-bg-destructive/90',
        outline:
          'payment-border payment-border-input payment-bg-background payment-shadow-sm hover:payment-bg-accent hover:payment-text-accent-foreground',
        secondary:
          'payment-bg-secondary payment-text-secondary-foreground payment-shadow-sm hover:payment-bg-secondary/80',
        ghost: 'hover:payment-bg-accent hover:payment-text-accent-foreground',
        link: 'payment-text-primary payment-underline-offset-4 hover:payment-underline',
      },
      size: {
        default: 'payment-h-9 payment-px-4 payment-py-2',
        sm: 'payment-h-8 payment-rounded-md payment-px-3 payment-text-xs',
        lg: 'payment-h-10 payment-rounded-md payment-px-8',
        icon: 'payment-h-9 payment-w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
