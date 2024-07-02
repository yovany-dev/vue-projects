const getDate = () => {
  const date = new Date();
  const fecha = date.toLocaleDateString();
  const hours = date.toLocaleTimeString().slice(0, 5);

  return `${hours} - ${fecha}`;
}

export default getDate;
