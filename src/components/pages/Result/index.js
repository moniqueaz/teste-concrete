import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderSearch from '../../templates/HeaderSearch';
import User from '../../organisms/User';
import List from '../../organisms/List';

import { Content, SectionLeft, SectionRight } from './styles';

const Result = () => {
  return (
    <HeaderSearch onSearch={() => undefined}>
      <Content>
        <SectionLeft>
          <User />
        </SectionLeft>
        <SectionRight>
          <List />
        </SectionRight>
      </Content>
    </HeaderSearch>
  );
};

Result.defaultProps = {};

Result.propTypes = {};

export default Result;
