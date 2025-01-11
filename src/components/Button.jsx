const Button = ({ className, href, onClick, children, px }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:opacity-90 rounded-full ${
    px || "px-7"
  } ${className || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
