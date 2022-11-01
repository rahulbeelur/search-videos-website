import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../apis/youtube';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';

class App extends React.Component {
  state = { videos: [], slectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  }

  onVideoSelected = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={ this.onVideoSelected }/>
      </div>
    );
  }
}

export default App;
