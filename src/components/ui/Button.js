import Link from 'next/link';

const variants = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  ghost: 'btn-ghost',
  outline: 'btn-outline',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
  type = 'button',
  ...props
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
