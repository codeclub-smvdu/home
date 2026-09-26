import { ButtonHTMLAttributes, forwardRef, isValidElement, cloneElement } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', loading, disabled, children, asChild, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95'

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary shadow-sm',
      secondary: 'bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:ring-foreground',
      outline: 'border-2 border-border text-foreground hover:bg-surface-dim focus-visible:ring-foreground',
      ghost: 'text-muted hover:text-foreground hover:bg-muted/10 focus-visible:ring-muted',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-xs gap-1',
      md: 'px-5 py-2.5 text-sm gap-2',
      lg: 'px-7 py-3.5 text-base gap-2',
    }

    const classNameCombined = `${base} ${variants[variant]} ${sizes[size]} ${className}`

    const buttonProps = {
      ref,
      className: classNameCombined,
      disabled: disabled || loading,
      ...props,
    }

    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement<any>, {
        ...buttonProps,
        className: `${(children.props.className || '')} ${classNameCombined}`,
      })
    }

    return (
      <button {...buttonProps}>
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'