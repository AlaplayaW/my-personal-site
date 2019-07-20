import React from 'react';

class MyTyped extends React.Component {

  static defaultProps = {
    dataText: []
  }

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    }
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150
    });

    if (!isDeleting && text === fullText) {
      
      setTimeout(() => this.setState({ isDeleting: true }), 500);
      
    } else if (isDeleting && text === '') {
      
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
      
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {    
    return (
      <>
        <span>{ this.state.text }</span>
        <span id="cursor"/>
      </>
    );
    
  }
}

export default MyTyped;
