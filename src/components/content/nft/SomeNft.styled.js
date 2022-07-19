import styled from "@emotion/styled";

 
 
 export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  border-radius: 6px;
  overflow: hidden;
  p {
    color: #fff;
    font-size: 1rem;
  }
  .second-p {
    margin-top: 0.5rem;
    font-weight: 600;
  }
  img {
    min-height: 11rem;
    border-radius: 6px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 320px) {
    p {
      font-size: 0.8rem;
    }
  }
`;