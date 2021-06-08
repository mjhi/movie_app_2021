import React from 'react';
import axios from "axios";
import Movie from "./Movie";



class App extends React.Component{
  state ={
    isLoading :true,
    movies: []
  };
  getMovies = async () => {
    const {data: {data : {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return( 
    <section className='container'> 
      {isLoading ? <div className='loader'>
        <span className='loader_text'>Loading...</span>
      </div> 
      : <div className='movies'>
        {movies.map(movie2 => (
        <Movie 
        key={movie2.id}
        id={movie2.id} 
        title={movie2.title}
        year={movie2.year} 
        summary={movie2.summary} 
        poster={movie2.medium_cover_image}
        genres={movie2.genres}
        />
        ))}
      </div>
      }
      </section>
    );
  }
}

export default App;
