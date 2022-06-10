import commonFields from '../../../common_fields';

// FIXME IDCard still push to Frontend, maybe we should make other type beside detailUser?

export default `
  type Role {
    name: String
    value: String
    defaultChecked: Boolean
  }
  
  input UserProfileInput {
    fullname: String
    shortname: String
    phone: String
    gender: String
    province: String
    country: String
    about: String
  }
  
  input UserInput {
    _id: String
    email: String
    password: String
    profile: UserProfileInput
    settings: [UserSettingInput]
    roles: [String]
  }

  type User {
    ${commonFields}
    fullname: String
    emailAddress: String
    phone: String
    gender: String
    province: String
    country: String
    about:String
    roles: [Role]
    settings: [UserSetting]
    Image_User_PP: String
    Image_User_Cover: String
    Image_User_IDCard: String
  }

  type UserExportDataZip {
    zip: String
  }
`;
