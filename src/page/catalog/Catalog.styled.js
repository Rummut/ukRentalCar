import styled from "styled-components";

export const Main = styled.main`
  margin-top: 120px;
`;

export const Form = styled.form`
  width: 860px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Lable = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Placeholder = styled.div`
  content: "Enter the text";
  display: block;
  position: absolute;
  color: #121417;
  pointer-events: none;
`;

export const ButtonForm = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
`;

export const Select = styled.select`
  padding: 14px 18px;
  width: 125px;
  border-radius: 14px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
`;

export const InputFrom = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
`;

export const InputTo = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  color: #121417;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
`;
