import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Lable = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;
`;

export const StyledSelect = styled.select`
  padding: 14px 89px 14px 18px;
  border-radius: 14px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
`;

export const StyledOption = styled.option`
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  display: inline-flex;
  height: 272px;
  padding: 14px 8px 14px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 112px;
  flex-shrink: 0;

  &:hover {
    background-color: red;
  }

  &:checked {
    background-color: #a0d3ff;
  }
`;
