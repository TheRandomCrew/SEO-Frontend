import styled from 'styled-components';

export const ClearFix = styled.div`
    overflow: auto; 
    width: 100%;
`;

export const InputText = styled.input`
    width: 90%;
    border: 1px solid #999;
    padding: 0.5rem;
    margin-bottom: 3px;
    height: 25px;
    border: 2px solid grey;
    border-radius: 25px;
    @media (max-width: 768px) {
    width: 90%;
    }
`;

export const TextArea = styled.textarea`
  width: 90%;
  padding: 0px 10px;
  border: 2px solid #04b509;
  margin: auto;
  @media (max-width: 768px) {
    width: 85%;
  }
`;
