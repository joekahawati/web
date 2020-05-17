import React, { Component } from 'react';
import MovieRow from './movieRow';
import $ from 'jquery';
import MovieSelectedRow from "./movieSelectedRow";
import { trackPromise } from 'react-promise-tracker';

class MovieSearch extends Component {

    constructor(props){
        super(props);
        this.state={
            movie:[""]
        };
    };

    handleSelect=(movieId)=>{

        const movie=movieId;
        this.setState({movie:movie})
    };

    Search=(movieName)=>{
        
        const urlString="https://api.themoviedb.org/3/search/movie?api_key=182a161598b7402d9ce7828a81fd3688&language=en-US&query="+movieName;
        trackPromise(
        $.ajax({
            url:urlString,
            success:(searchResults)=>{
                const results=searchResults.results;

                var movieRows=[]
                results.forEach((movie)=>{
                    movie.poster_path!=null ? movie.poster_src="https://image.tmdb.org/t/p/w185"+movie.poster_path : movie.poster_src="../logo.jpg";
                    const movieRow=<MovieRow key={movie.id} movie={movie} onSelect={this.handleSelect}/>
                    movieRows.push(movieRow)
                })
                this.setState({rows:movieRows})
            },
            error:(xhr,status,err)=>{
                console.error("Failed to fetch data")
                if(xhr.status===0) 
                    alert("Make sure you are connected to the internet!");
                else if(xhr.status===422)
                    alert("Please enter a movie name!");
            }
        }));
    }

    searchChangeHandler=()=>{
        const inputVal = document.getElementById("inputid").value;
        this.Search(inputVal)
    }

    render() { 
        return ( 
            <div className="divPosition">
                <div className="search form-inline my-2 my-lg-0 ">
                        <input id="inputid" className="form-control mr-sm-2 " type="search" placeholder="Enter movie name" aria-label="Search"/>
                        <button onClick={this.searchChangeHandler} className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </div><br/><br/>

                <div className="movieRow">{this.state.rows}</div>
                
                {this.state.movie[0] === undefined ? <div className="movieRowSelected "><MovieSelectedRow movie={this.state.movie}/></div> : <di></di> }
            </div>
            
         );
    }
}
 
export default MovieSearch;