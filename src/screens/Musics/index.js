import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getMusics} from '../../actions/musics'
import Track from '../../components/Track'
import styled from 'styled-components';
import { ReactComponent as Disconnect } from '../../assets/img/turn-off.svg';

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 22px;
`
const StyledFlex = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  max-width: 1440px;
  margin: auto;
`
   
const StyledDeconnect = styled.button`
  width:25px;
  height:100px;
  background: transparent;
  border:0;
  color:#fff;
  position:fixed;
  top:-30px;
  left:15px;
  cursor:pointer;
  transition: all 0.25s linear;
  svg{
    padding:13px 10px;
    width:25px;
    height:100%;
  }
`;

const Musics = props => {
  const dispatch = useDispatch()
  const musics = useSelector(state => state.genres.musics)
  useEffect(() => {
    dispatch(getMusics())
  }, [])

  const redirectToLogin = () => {
    localStorage.removeItem('token')
    props.history.push('/login')
  }

  return (
    <div> 
      <StyledDeconnect onClick={() => redirectToLogin()}><Disconnect/></StyledDeconnect>
      <StyledTitle>Notre selection musicale que nous avons choisi pour vous :</StyledTitle>
      <StyledFlex>
        {musics.map(music => (
            <Track
              key={music.id}
              albumImage={music.albumId}
              track={music.name}
              artist={music.artistName}
              previewUrl={music.previewURL}
            />
        ))}
      </StyledFlex>
    </div>
  );
};

export default Musics;
