import commonFields from '../../../common_fields';

export default `
  type Counter {
    ${commonFields}
    counter: Float
    type: String
    status: String
  }
  
  input CounterInput {
    _id: String!
    
    name: String
    counter: Float
    
    type: String
    status: String
    description: String
  }
`;
