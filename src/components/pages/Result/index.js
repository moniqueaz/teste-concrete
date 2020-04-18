import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderSearch from '../../templates/HeaderSearch';

import { Content, SectionLeft, SectionRight } from './styles';

const Result = () => {
  return (
    <HeaderSearch onSearch={() => undefined}>
      <Content>
        <SectionLeft>Left</SectionLeft>
        <SectionRight>Right</SectionRight>
      </Content>
    </HeaderSearch>
  );
};

Result.defaultProps = {};

Result.propTypes = {};

export default Result;
