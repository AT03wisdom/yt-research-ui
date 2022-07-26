import styled from 'styled-components';

const ImagePlaceholder = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: darkgray;
  border-radius: 50%;
`;

export default function ProfileImage(props) {
  return <ImagePlaceholder size={props.size} />;
}
