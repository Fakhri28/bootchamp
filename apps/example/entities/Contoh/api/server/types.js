import commonFields from '../../../../../common/entities/common_fields';

export default `
  enum ContohType {
    Manual
    Cron
  }
  enum ContohStatus {
    Draft
    Queue
    Processing
    Active
    Closed
  }
  
  type Contoh {
    ${commonFields}
    nr: String
    contohDate: String
    amount: Float
    type: ContohType
    status: ContohStatus
  }
  
  input ContohInput {
    _id: String!
    
    nr: String
    name: String
    contohDate: String
    amount: Float
    
    type: ContohType
    description: String
  }
`;
