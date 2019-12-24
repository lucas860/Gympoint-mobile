import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { AButton, BText } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <AButton {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="fff" />
      ) : (
        <BText>{children}</BText>
      )}
    </AButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
