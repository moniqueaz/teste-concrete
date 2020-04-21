import styled from 'styled-components';

export const Component = styled.input`
  ${props => props.border && 'box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3)'};
  border: 0;
  width: 100%;
  height: 50px;
  padding: 10px;

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

// export const Button = styled.button`
// position: absolute;
// right: 20px;
// top: 50%;
// transform: translateY(-50%);
// background-color: white;
// display: flex;
// justify-content: center;
// align-items: center;
// color: #5c5c5c;
// opacity: 0.4;
// svg {
// }
// `;
