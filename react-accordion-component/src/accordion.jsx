import React, {useState} from 'react';

// class Accordion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { openTopicIndex: null };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(event) {
//     this.setState({ openTopicIndex: Number(event.target.className) });
//     if (this.state.openTopicIndex !== null && Number(event.target.className) === Number(this.state.openTopicIndex)) {
//       this.setState({ openTopicIndex: null });
//     }
//   }
//   render() {
//     return (
//       this.props.topics.map((topic, index) => {
//         return (
//           <div key={index}>
//             <button className={index} onClick={this.handleClick}>{topic.title}</button>
//             <p className={this.state.openTopicIndex === index ? "description" : 'hidden'}>{topic.description}</p>
//           </div>
//         )
//       })
//     )
//   }
// }

function Accordion(props) {
  const [openTopicIndex, setOpenTopicIndex] = useState(null)

  const handleClick = (event) => {
    setOpenTopicIndex(Number(event.target.className))
    if (openTopicIndex !== null && Number(event.target.className) === Number(openTopicIndex)) {
      setOpenTopicIndex(null)
    }
  }

  return (
    props.topics.map((topic, index) => {
      return (
        <div key={index}>
          <button className={index} onClick={handleClick}>{topic.title}</button>
          <p className={openTopicIndex === index ? "description" : "hidden"}>{topic.description}</p>
        </div>
      )
    })
  )
}

export default Accordion
