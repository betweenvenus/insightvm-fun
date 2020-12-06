import styled from "styled-components";

const ImageWrapper = styled.div`
  min-height: 300px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default function InfoImage({ src, alt }) {
  return (
    <ImageWrapper>
      <img src={src} alt={alt ?? src} />
    </ImageWrapper>
  );
}
