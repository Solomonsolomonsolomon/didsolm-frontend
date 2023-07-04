const createForm = (array) => {
  let inputFields = [];
  for (let i of array) {
    inputFields.push(<input {...i} />);
  }
  return inputFields;
};
export default createForm;
