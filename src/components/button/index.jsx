import "./index.css"

function Button(props){

    const {variant = "primary", size = "md", children} = props;
    const className = `my-button my-button--${variant} my-button--${size}`;

    return <button className={className}>{children}</button>;
}
export default Button;