import commonFields from '../../../common_fields';

export default `
  enum OrgStatus {
    Draft
    Queue
    Processing
    Active
    Inactive
    Closed
  }
  
  type Org {
    ${commonFields}
    nr: String
    logoUrl: String
    
    bcaCompanyCode: String
    bcaCustomerNumber: String
    
    # taxRate: Float        currently not used
    
    email: String
    
    address: Address
    
    type: String
    status: OrgStatus
    
    ParentOrgId: String
    ParentOrg: Org
    
    ChildOrgs: [Org]
    
    Users: [User]
    roles: [Role]
  }
  
  input OrgInput {
    _id: String!
    
    bcaCompanyCode: String
    bcaCustomerNumber: String
    
    nr: String
    name: String
    shortname: String
    # taxRate: Float
    
    email: String
    
    address: AddressInput
    
    type: String
    
    description: String
    
    roles: [String]
  }
`;
