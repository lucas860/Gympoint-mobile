import React from 'react';
import { Image } from 'react-native';

import Logo from '~/assets/gympoint.png';

import { CheckinHeader } from './styles';

export default function Header() {
  return (
    <CheckinHeader>
      <Image source={Logo} />
    </CheckinHeader>
  );
}
