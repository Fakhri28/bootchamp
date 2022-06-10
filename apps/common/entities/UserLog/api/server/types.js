import commonFields from '../../../common_fields';

export default `
  type UserLog {
    ${commonFields}
    type: String
  }
  
  input UserLogInput {
    _id: String!
    
    name: String
    
    type: String
    description: String
  }
`;
