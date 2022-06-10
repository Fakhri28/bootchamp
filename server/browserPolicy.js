import { BrowserPolicy } from 'meteor/browser-policy-common';

BrowserPolicy.content.allowOriginForAll('blob:');

BrowserPolicy.content.allowOriginForAll('tailwindui.com');
BrowserPolicy.content.allowOriginForAll('images.unsplash.com');
BrowserPolicy.content.allowOriginForAll('*.amazonaws.com');
