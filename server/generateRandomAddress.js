import faker from 'faker';

const generateRandomAddress = () => {
  return {
    phone: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(true),
    province: faker.address.state(),
    provinceNr: faker.address.stateAbbr(),
    regency: faker.address.county(),
    regencyNr: faker.address.citySuffix(),
    district: faker.address.county(),
    districtNr: faker.address.citySuffix(),
    village: faker.address.city(),
    villageNr: faker.address.cityPrefix(),
    rt: '1',
    rw: '1',
    country: faker.address.country(),
    countryNr: '62',
    zipCode: faker.address.zipCode(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    timeZone: faker.address.timeZone(),
  };
};

export default generateRandomAddress;
