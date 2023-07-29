import React, {FC, JSX} from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5ProIcon from 'react-native-vector-icons/FontAwesome5Pro';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Zocial from 'react-native-vector-icons/Zocial';
import Octicons from 'react-native-vector-icons/Octicons';

interface VectorIconsInterfaces {
  type: string;
  name: string;
  size?: number;
  color?: string;
  style?: any;
}

interface VectorIconsList {
  [key: string]: JSX.Element;
}

export const _VectorIcons: FC<VectorIconsInterfaces> = ({
  type,
  name,
  size,
  color,
  ...props
}) => {
  const VectorIconsList: VectorIconsList = {
    Octicons: (
      <Octicons
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    Zocial: (
      <Zocial
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    Foundation: (
      <Foundation
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    SimpleLineIcons: (
      <SimpleLineIcons
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    MaterialCommunityIcons: (
      <MaterialCommunityIcons
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    AntDesign: (
      <AntDesignIcon
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    Entypo: (
      <EntypoIcon
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    EvilIcons: (
      <EvilIconsIcon
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    Feather: (
      <FeatherIcon
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    FontAwesome: (
      <FontAwesomeIcon
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    FontAwesome5: (
      <FontAwesome5Icon
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    FontAwesome5Pro: (
      <FontAwesome5ProIcon
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    Fontisto: (
      <FontistoIcon name={name} size={size || 16} color={color || '#fff'} />
    ),
    MaterialIcons: (
      <MaterialIcon
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
    Ionicons: (
      <Ionicons
        name={name}
        size={size || 16}
        color={color || '#fff'}
        {...props}
      />
    ),
  };

  if (Object.keys(VectorIconsList).includes(type)) {
    return VectorIconsList[type];
  } else
    return <Ionicons name={name} size={size || 16} color={color || '#fff'} />;
};
