const setDocStateAfterUpdate = (mutationName, doc, response, parent) => {
  if (response && response.data && response.data[mutationName]) {
    const docAfterUpdate = {};
    Object.keys(response.data[mutationName]).forEach((key) => {
      if (response.data[mutationName][key]) docAfterUpdate[key] = response.data[mutationName][key];
    });
    parent.setState({
      doc: { ...doc, ...docAfterUpdate },
    });
  }
};

export default setDocStateAfterUpdate;
