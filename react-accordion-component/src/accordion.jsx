import React from 'react';

const topics = [
  { title: 'Hypertext Markup Language', description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.' },
  { title: 'Cascading Style Sheets', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
  { title: 'JavaScript', description: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use Javascript on the client side for web page behavior,often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on the user's device." }
]

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openTopicIndex: null };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    // if (this.state.openTopicIndex === null) {
    //   this.setState({openTopicIndex: 1});
    // } else {
    //   this.setState({openTopicIndex: null});
    // }
    if (event.target.className === '0') {
      this.setState({openTopicIndex: 0});
    } else if (event.target.className === '1') {
      this.setState({openTopicIndex: 1});
    } else if (event.target.className === '2') {
      this.setState({ openTopicIndex: 2});
    }
    console.log(event.target.className)
  }
  render() {
    return (
      topics.map((topic, index) => {
        return (
          <div key={index}>
            <button className={index} onClick={this.handleClick}>{topic.title}</button>
            <p className={this.state.openTopicIndex === index ? "description" : 'hidden'}>{topic.description}</p>
          </div>
        )
      })
    )
  }
}

export default Accordion
// if (this.state.openTopicIndex === event.target.className) {
//   this.setState({ openTopicIndex: null });
// } else
// function Accordion(props) {
//   const topics = this.topics;
//   const listTopics = topics.map((topic, index) =>
//     <button key={index}>
//       {topic.title}
//     </button>
//   );
//   return (
//     <div>
//       {listTopics}
//     </div>
//   )
// }

// function Accordion(props) {
//   <div>
//     {
//       topics.map((topic, index) => {
//         return <p key={index}>{topic}</p>;
//       })
//     }
//   </div>
// }

// htmlClick() {
//   this.setState({ openTopicIndex: 1 })
// }
// cssClick() {
//   this.setState({ openTopicIndex: 2 })
// }
// jsClick() {
//   this.setState({ openTopicIndex: 3 })
// }

// className = { this.state.htmlDescOpen ? 'description' : 'hidden' }
// class Accordion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {htmlDescOpen: false, cssDescOpen: false, jsDescOpen: false};
//     this.htmlClick = this.htmlClick.bind(this);
//     this.cssClick = this.cssClick.bind(this);
//     this.jsClick = this.jsClick.bind(this);
//   }
//   htmlClick() {
//     if (this.state.htmlDescOpen === true) {
//       this.setState({ htmlDescOpen: false, cssDescOpen: false, jsDescOpen: false });
//     } else {
//       this.setState({ htmlDescOpen: true, cssDescOpen: false, jsDescOpen: false });
//     }
//   }
//   cssClick() {
//     if (this.state.cssDescOpen === true) {
//       this.setState({ htmlDescOpen: false, cssDescOpen: false, jsDescOpen: false });
//     } else {
//       this.setState({ htmlDescOpen: false, cssDescOpen: true, jsDescOpen: false});
//     }
//   }
//   jsClick() {
//     if (this.state.jsDescOpen === true) {
//       this.setState({ htmlDescOpen: false, cssDescOpen: false, jsDescOpen: false });
//     } else {
//       this.setState({ htmlDescOpen: false, cssDescOpen: false, jsDescOpen: true });
//     }
//   }
//   render()
// }
