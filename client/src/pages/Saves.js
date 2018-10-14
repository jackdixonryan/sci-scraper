import React from 'react';
import Axios from 'axios';
import Blurb from '../components/Blurb/Blurb';

class Saves extends React.Component{
  state = {
    data: []
  }
  componentDidMount(){
    Axios.get('/saves/articles')
      .then(res => this.setState({data: res.data}))
      .catch(err => console.error(err))
  }

  render(){
    const articles = this.state.data.map(article => {
      return (<Blurb title={article.title} comments={article.comments} image={article.image} originalLink={article.originalLink} writer={article.text}/>)
    })
    return (
      <div className="results">
        { articles }
      </div>
    )
  }
}

export default Saves;