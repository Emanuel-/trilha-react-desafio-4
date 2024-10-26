import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
  color: #FFF;
  border: 1px solid ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
  border-radius: 21px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.6)};
  }
`;
