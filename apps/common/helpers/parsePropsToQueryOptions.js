const parsePropsToQueryOptions = (props) => {
  const result = {
    search: props.search ? new RegExp(props.search, 'i') : null,
    limit: props.perPage || null,
    skip:
      (props.currentPage && props.perPage && props.currentPage * props.perPage - props.perPage) ||
      null,
    sort: props.sort || null,
    fields: props.fields || null,
  };

  Object.keys(props).forEach((key) => {
    if (key.includes('Id')) result[key] = props[key];
  });

  return result;
};

export default parsePropsToQueryOptions;
