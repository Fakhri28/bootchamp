import Counter from '../../entities/Counter/api';
import File from '../../entities/File/api';
import Org from '../../entities/Org/api';
import Tenant from '../../entities/Tenant/api';
import OAuthUser from '../../entities/OAuthUser/api';
import OAuthToken from '../../entities/OAuthToken/api';

const Entity = {
  Counter,
  File,
  Org,
  OAuthUser,
  OAuthToken,
  Tenant,
};

const getEntity = (entityName) => Entity[entityName];

export default getEntity;
