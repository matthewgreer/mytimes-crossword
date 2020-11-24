import React from 'react'

class Box extends React.Component {
  constructor(props) {
    super(props);
    // props: 
      // boxName
      // ratio
      // isBlackBox, 
      // position, 
      // value, 
      // label, 
      // isHighlighted,
      // isInFocus,
      // clueNumber,       ??????????
      // updateBoard()
      // updateBoxInFocus()
      // changeSolvingDirection()
      // findNextEmptyInput()
      
    this.state = {
      maxLength: 1 // this is in state because if I make a rebus button,
                    // using it will change maxLength
    }

    this.boxInput = React.createRef();

    this.handleLetterInput = this.handleLetterInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isInFocus) {
      this.focusInput();
    }
  }

  focusInput() {
    return this.boxInput.current.focus();
  }

  handleLetterInput(e) {
    if (e.target.value.length >= this.state.maxLength) {
      this.props.updateBoard(this.props.position, e.target.value.toUpperCase());
      return this.props.findNextEmptyInput(this.props.position);
    }
  };

  handleClick(e) {
    if (this.props.isInFocus) {
      return this.props.changeSolvingDirection("switch", this.props.boxName);
    } else {
      return this.props.updateBoxInFocus(this.props.boxName);
    }
  };

  render() {
    if (this.props.isBlackBox) { 
      return(
        <div 
          className="wordcross-grid-box"
        >
          <input
            className="wordcross-box-input black-box" disabled />
        </div>
      );
    } else {
      let highlight = " ";
      if  (this.props.isInFocus) {
        highlight = "active-box-highlight";
      }else if (this.props.isHighlighted){
        highlight = "active-entry-highlight";
      }
      return(
        <div 
          className={`wordcross-grid-box ${highlight}`}
        >
          <span className="clue-number-label">{this.props.label}</span>
          <input
            ref={this.boxInput}
            autoFocus={this.props.isInFocus}
            className={`wordcross-box-input input-box`}
            value={this.props.value.toUpperCase()}
            maxLength={this.state.maxLength}
            autoComplete={"off"}
            pattern={"[A-Za-z]{1}"}
            onClick={this.handleClick}
            onChange={this.handleLetterInput} 
          />
        </div>
      );
    }
  }


};

export default Box;