import styled from 'styled-components';

export const StyledCard= styled.article`
  max-width:300px;
  border: 1px #b3b3b3 solid;
  border-radius: 5px;
  margin: 20px auto;
  position: relative;
  box-shadow: #888888 0 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledTitle = styled.p`
  padding:15px;
  margin:0;
`

export const StyledArtist = styled.p`
  position:absolute;
  top: 237px;
  left: -20px;
  padding: 15px;
  background: #FF4060;
  color: #fff;
`

export const StyledImg= styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius 5px;
  border-bottom: 1px solid #b3b3b3;
`