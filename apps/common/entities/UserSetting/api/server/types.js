import commonFields from '../../../common_fields';

export default `
  enum UserSettingType {
    boolean
    string
    number
  }
  
  type UserSetting {
    ${commonFields}
    
    host: String
    isGDPR: Boolean
    key: String                 # The key value you'll access this setting with
    label: String               # The user-facing label for the setting.
    type: UserSettingType
    value: String
    setByUser: Boolean
  }
  
  input UserSettingInput {
    _id: String
    
    host: String
    isGDPR: Boolean
    key: String
    label: String
    type: String
    value: String
    setByUser: Boolean
    updatedAt: String
    
    description: String
  }
`;
