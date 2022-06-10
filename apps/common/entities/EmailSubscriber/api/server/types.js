import commonFields from '../../../common_fields';

export default `
  enum EmailSubscriberStatus {
    Draft
    Queue
    Processing
    Active
    Closed
  }
  
  type EmailSubscriber {
    ${commonFields}
    email: String
    type: String
    status: EmailSubscriberStatus
  }
  
  input EmailSubscriberInput {
    _id: String!
    
    name: String
    email: String!
    type: String
    
    description: String
  }
`;
