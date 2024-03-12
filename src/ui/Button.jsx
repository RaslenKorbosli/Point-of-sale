function Button({ btnContent, type }) {
  return <button className={` ${type}`}>{btnContent}</button>;
}

export default Button;
