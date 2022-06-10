import { UserIcon } from '@heroicons/react/outline';

const navigations = [
  {
    sequenceNr: 41,
    name: 'User',
    linkUrl: '/User/List/Online/Host',
    icon: UserIcon,
  },
  {
    sequenceNr: 42,
    name: 'Counter',
    linkUrl: '/Counter/List/Current',
    icon: UserIcon,
  },
  {
    sequenceNr: 43,
    name: 'File',
    linkUrl: '/File/List/Current',
    icon: UserIcon,
  },
  {
    sequenceNr: 44,
    name: 'Notification',
    linkUrl: '/Notification/List/Current',
    icon: UserIcon,
  },
  {
    _id: 45,
    sequenceNr: 45,
    name: 'EmailSubscriber',
    linkUrl: '/EmailSubscriber/List/Current',
    icon: UserIcon,
  },
];

export default navigations;
