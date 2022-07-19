import styled from "@emotion/styled";

export const Paragraph = styled.p`
  margin: 0.2rem 0;
  font-size: 0.8rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1rem;
    margin: 1rem 0;
  }
  @media (min-width: 1280px) {
    font-size: 1.2rem;
    margin: 2rem 0;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  column-gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const StyledInput = styled.input`
  background-color: #fff;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  outline: none;
  border: 0;
  ::placeholder {
    color: gray;
  }

  @media (min-width: 425px) {
    padding: 0.5rem 1rem;
  }
  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
    min-width: 15rem;
  }
  @media (min-width: 1024px) {
    padding: 0.5rem 2rem;
    min-width: 18rem;
    font-size: 1.2rem;
  }
  @media (min-width: 1280px) {
    padding: 1rem 2rem;
    min-width: 22rem;
    font-size: 1.4rem;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #fdd54b;
  color: #000;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 0.5rem;
  border-radius: 5px;

  @media (min-width: 425px) {
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 0.5rem 3rem;
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    padding: 1rem 3rem;
    font-size: 1.4rem;
  }
`;

export const TreasureWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: absolute;
  right: -1rem;
  bottom: -1.8rem;

  @media (min-width: 768px) {
    width: 5.5rem;
    height: 5.5rem;
  }
  @media (min-width: 1024px) {
    width: 6.5rem;
    height: 6.5rem;
    right: -2rem;
    bottom: -1.8rem;
  }
  @media (min-width: 1280px) {
    width: 7.5rem;
    height: 7.5rem;
    right: -2rem;
    bottom: -1.8rem;
  }

  @media (max-width: 424px) {
    width: 4rem;
    height: 4rem;
  }
  @media (max-width: 374px) {
    display: none;
  }
`;

export const HatWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: absolute;
  left: 0rem;
  top: -1.8rem;

  @media (min-width: 768px) {
    width: 5.5rem;
    height: 5.5rem;
  }

  @media (min-width: 1024px) {
    width: 6.5rem;
    height: 6.5rem;
  }
  @media (min-width: 1280px) {
    width: 7.5rem;
    height: 7.5rem;
  }
  @media (max-width: 374px) {
    display: none;
  }
`;
