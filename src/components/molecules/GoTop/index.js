import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import { FaArrowUp } from 'react-icons/fa';

import { Container } from './styles';

const GoTop = ({ show }) => {
  const [visible, setVisible] = useState(show);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scroll = () => {
    if (window.pageYOffset > 477) {
      setVisible(true);
    }
    if (window.pageYOffset < 300) {
      setVisible(false);
    }
  };

  const handleButton = () => {
    setVisible(false);
    window.onscroll = scrollToTop();
  };

  useEffect(() => {
    window.onscroll = scroll;
  }, []);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  return (
    visible && (
      <Button
        bgColor="transparent"
        color="#5c5c5c"
        size="small"
        onClickButton={handleButton}
      >
        <Container>
          <FaArrowUp />
        </Container>
      </Button>
    )
  );
};

GoTop.defaultProps = {
  show: true,
};

GoTop.propTypes = {
  show: PropTypes.bool,
};

export default GoTop;
