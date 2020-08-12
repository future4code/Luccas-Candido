import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'luccao'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'ana'}
          fotoUsuario={'https://picsum.photos/200/300'}
          fotoPost={'https://picsum.photos/id/1/200/150'}
        />

        <Post
          nomeUsuario={'julia'}
          fotoUsuario={'https://picsum.photos/id/2/200/1500'}
          fotoPost={'https://picsum.photos/id/2/200/150'}
        />

      </div>
    );
  }
}

export default App;
