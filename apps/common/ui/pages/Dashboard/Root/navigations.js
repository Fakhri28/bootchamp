import { UserIcon, FolderIcon, UsersIcon } from '@heroicons/react/outline';

const navigations = [
  {
    sequenceNr: 91,
    name: 'User All Tenant',
    linkUrl: '/User/List/Online/All',
    icon: UserIcon,
  },
  {
    sequenceNr: 92,
    name: 'Organization All Tenant',
    linkUrl: '/Org/List/Current/All',
    icon: UsersIcon,
  },
  {
    sequenceNr: 93,
    name: 'Tenant',
    linkUrl: '/Tenant/List/Current',
    icon: FolderIcon,
  },
];

export default navigations;
