import React from 'react';
import Axios from 'axios';
import Blurb from '../components/Blurb/Blurb';

class Articles extends React.Component{
  state = {
    data: []
  };

  componentDidMount() {
    console.log('mounted.')
    Axios.get(`/api/${this.props.name}`)
      .then(data => this.setState({data: data.data}))
      .catch(err => console.error(err));
  }

  render() {
    const articleList = this.state.data.map(article => {
      return (<Blurb title={article.title} comments={article.comments} image={article.image} originalLink={article.originalLink} writer={article.text}/>)
    });
    return (
      <div>
        <div className = "container">
          { articleList }
        </div>
      </div>
    )
  }
}

export default Articles;