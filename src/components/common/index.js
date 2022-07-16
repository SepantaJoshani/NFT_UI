import { css } from "@emotion/react";

export const maxWidth = css`
  max-width: 1440px;
  margin: 0 auto;
`;

export const paddingWrapper = css`
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 48px;
  }
  @media (min-width: 1024px) {
    padding: 0 96px;
  }
`;
