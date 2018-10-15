import React from 'react';
import './Blurb.css';
import Axios from 'axios';

class Blurb extends React.Component {
  constructor(props) {
    super(props);
    this.saveArticle = this.saveArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
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

  deleteArticle() {
    Axios({
      method: 'delete',
      url: '/saves/articles',
      data: {
        title: this.props.title
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  render() {
    // Tidies up an href with clipped wings.
    const newRender = 'http://www.reddit.com/' + this.props.comments;

    // Displays Save/Remove link depending on the page the blurb lives on.
    const LinkSection = () => {
      if (window.location.href.includes('saves')) {
        return (
          <div className="card-action">
            <button onClick={this.deleteArticle} className="btn btn-waves white red-text lighten-3 link">Remove</button>
          </div>
        )
      } else {
        return (
          <div className="card-action">
            <button onClick={this.saveArticle} className="btn btn-waves white red-text lighten-3 link">Save</button>
          </div>
        )
      }
    }

    const Image = () => {
      if (this.props.image) {
        return (
          <div class="card-image">
            <img alt="reddit" src={this.props.image}/>
          </div>
        )
      } else {
        return null;
      }
    }

    return (
      <div className="card col s6 m4 l3">
        {/* <div class="card-image">
          <img alt="reddit" src={this.props.image}/>
        </div> */}
        <Image/>
        <div className="card-content black-text">
          <span className="card-title">{this.props.title}</span>
          <p>{this.props.writer}</p>
          <a href={this.props.originalLink}>Original</a>
          <br></br>
          <a href={newRender}>Or Read from Reddit...</a>
        </div>
        <LinkSection/>
      </div>
    )
  }
}

export default Blurb;