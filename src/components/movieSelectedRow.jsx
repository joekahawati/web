import React, { Component } from 'react';

class MovieSelectedRow extends Component {

    viewMovie=()=>{
        const url="https://www.themoviedb.org/movie/"+this.props.movie.id
        window.location.href=url
    }

    render() { 
        return ( 
            <div>
                <div id="list-tab" role="tablist" className="list-group-item ">
                    <table key={this.props.movie.id}>
                        <tbody>
                            <tr>
                                <img className="centerContent"  alt="poster" width="120" src={this.props.movie.poster_src}/><br/>
                            </tr>
                            <tr>
                                <div>
                                    <h4 style={{textAlign:"center"}}>{this.props.movie.title}</h4><br/>
                                    <p>{this.props.movie.overview}</p><br/>
                                </div>
                            </tr>
                            <tr>
                                <input style={{width:150}} className="btn btn-outline-success my-2 my-sm-0"
                                    type="button" value="View" onClick={this.viewMovie}/>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default MovieSelectedRow;