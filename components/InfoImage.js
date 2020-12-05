import styled from "styled-components";
import Image from "next/image";

const ImageWrapper = styled.div`
  position: relative;
  min-height: 300px;
`;

export default function InfoImage({ src, alt }) {
  return (
    <ImageWrapper>
      <Image src={src} alt={alt ?? src} layout="fill" objectFit="cover" />
    </ImageWrapper>
  );
}
