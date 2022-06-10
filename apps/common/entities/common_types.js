export default `
  type BatchProcessReport {
    timestampStart: String
    timestampFinish: String
    qty: String
    qtyError: String
    type: String
  }
  
  type reportEntity {
    timestamp: String
    total: String
    docs: String
  }
  
  type Ref {
    _id: String
    nr: String
    name: String
    shortname: String
    type: String
    role: String
    host: String
    logoUrl: String
    timestamp: String
  }

  type Phone {
    verified: Boolean
    type: String
    number: String
  }
  
  type Address {
    phone: String
    address: String
    province: String
    provinceNr: String
    regency: String
    regencyNr: String
    district: String
    districtNr: String
    village: String
    villageNr: String
    rt: String
    rw: String
    zipCode: String
    country: String
    countryNr: String
    latitude: Float
    longitude: Float
    description: String
  }
  
  input AddressInput {
    phone: String
    address: String
    province: String
    provinceNr: String
    regency: String
    regencyNr: String
    district: String
    districtNr: String
    village: String
    villageNr: String
    rt: String
    rw: String
    country: String
    countryNr: String
    zipCode: String
    latitude: Float
    longitude: Float
    timeZone: String
    description: String
  }

  enum PartyType {
    Org
    Member
    Webhook
    Cron
    System
    Dummy
  }

  type Party {
    _id: String
    type: PartyType
    name: String
    shortname: String
    logoUrl: String
    latitude: Float
    longitude: Float
    description: String
  }
  
  input PartyInput {
    _id: String!
    
    type: PartyType
    name: String
    shortname: String
    logoUrl: String
    latitude: Float
    longitude: Float
    description: String
  }
  
  type History{
    party: Party
    timestamp: String
    doc: String
    description: String
  }
`;
