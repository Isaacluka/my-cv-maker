function Button({ text }) {
  const buttonStyle = {
    color: '#a6a6a6',
    backgroundColor: 'white',
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default Button