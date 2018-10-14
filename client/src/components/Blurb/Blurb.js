import React from 'react';
import './Blurb.css';
import Axios from 'axios';

class Blurb extends React.Component {
  constructor(props) {
    super(props);
    this.saveArticle = this.saveArticle.bind(this);
  }

  saveArticle() {
    console.log('this is running...')
    Axios({
      method: 'post',
      url: '/saves/addArticle',
      data: {
        title: this.props.title,
        link: this.props.originalLink,
        writer: this.props.writer,
        image: this.props.image,
        comments: this.props.comments
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    const newRender = 'http://www.reddit.com/' + this.props.comments;
    return (
      <div className="card col s6 m4 l3">
        <div class="card-image">
          <img alt="reddit" src={this.props.image}/>
        </div>
        <div className="card-content black-text">
          <span className="card-title">{this.props.title}</span>
          <p>{this.props.writer}</p>
          <a href={this.props.originalLink}>Original</a>
          <br></br>
          <a href={newRender}>Or Read from Reddit...</a>
        </div>
        <div className="card-action">
          <button onClick={this.saveArticle} className="btn btn-waves white red-text lighten-3 link">Save</button>
        </div>
      </div>
    )
  }
}

export default Blurb;