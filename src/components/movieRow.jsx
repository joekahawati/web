import React, { Component } from 'react';

class MovieRow extends Component {
    
    state={
        word:[]
    }

    display=(movieId)=>{
        const word1=movieId;
        this.setState({word:word1});
    };

    

    render() { 
        return ( 
            <div>
                    <div  id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action " id={this.props.movie.id} data-toggle="list" onClick={()=> this.props.onSelect(this.props.movie)} role="tab" aria-controls="home">
                            <table key={this.props.movie.id}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img alt="poster" width="120" src={this.props.movie.poster_src}/>
                                        </td>
                                        <td>
                                            <h4>{this.props.movie.title}</h4>
                                            <p>{this.props.movie.release_date}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </a>
                    </div>
                    
            </div>
         );
    }
}
 
export default MovieRow;