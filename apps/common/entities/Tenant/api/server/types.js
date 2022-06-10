import commonFields from '../../../common_fields';

export default `
  enum TenantStatus {
    Draft
    Queue
    Processing
    Active
    Closed
  }
  
  type Tenant {
    ${commonFields}
    tenant: Int
    type: String
    status: TenantStatus
  }
  
  input TenantInput {
    _id: String!
    
    name: String
    tenant: Int
    
    type: String
    description: String
  }
`;
