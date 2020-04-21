import styled from 'styled-components';

export const Component = styled.input`
  ${props => props.border && 'box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3)'};
  border: 0;
  width: 100%;
  height: 50px;
  padding: 10px;
  padding-right: ${props => (props.clear ? '50px' : '10px')};

  &::placeholder {
    color: #ccc;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  .input {
    &__button {
      &--close {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.4;
      }
    }
  }
`;
