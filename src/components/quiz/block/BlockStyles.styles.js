import styled, { css } from "styled-components";

const correctStyles = css`
  border: 2px solid ${(p) => p.theme.palette.success.active};
  background-color: ${(p) => p.theme.palette.success.bg};
`;

const errorStyles = css`
  border: 2px solid ${(p) => p.theme.palette.error.active};
  background-color: ${(p) => p.theme.palette.error.bg};
`;

export const Container = styled.div`
  margin-bottom: 2rem;
  border-radius: 5px;
  background-color: ${(p) => p.theme.paper.dark};
  overflow: hidden;
`;
export const Question = styled.h2`
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

export const QuestionBody = styled.div`
  padding: 1rem 1.25rem;
`;
export const QuestionHeader = styled.div`
  width: 100%;
  padding: 0.5em 1em;
  background-color: ${(p) => p.theme.paper.main};
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.h1`
  letter-spacing: 1px;
`;

export const CheckAnsBtn = styled.button`
  will-change: color;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${(p) => p.theme.text.secondary};
  transition: color 300ms ease;
  &:hover {
    color: ${(p) => p.theme.text.primary};
  }
`;

export const Options = styled.div`
  pointer-events: ${(p) => (p.showresult ? "none" : "initial")};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BulletPoint = styled.span`
  will-change: border;
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.text.disabled};
  transition: border 300ms ease;
  &::after {
    will-change: background-color;
    position: absolute;
    content: "";
    width: 65%;
    height: 65%;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(p) =>
      p.checked ? p.theme.text.secondary : "transparent"};
    transition: background-color 300ms ease;
  }
`;

export const Text = styled.p`
  letter-spacing: 1px;
`;

export const Option = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 2px solid ${(p) => p.theme.paper.light};
  gap: 1rem;
  ${(p) => {
    if (p.showresult) {
      if (p.checked) {
        if (p.iscorrect) {
          return correctStyles;
        } else {
          return errorStyles;
        }
      } else {
        if (p.iscorrect) {
          return correctStyles;
        }
      }
    }
  }}
  &:hover ${BulletPoint} {
    border: 1px solid ${(p) => p.theme.text.primary};
  }
  &:hover ${BulletPoint}::after {
    background-color: ${(p) => (p.checked ? p.theme.text.primary : "")};
  }
`;
