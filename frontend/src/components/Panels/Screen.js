import React, {Component} from 'react';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.viewClasses = 'col-lg-12';
  }

  componentDidMount() {
    //console.log("mounting component " + this.props.title)
    document.title = this.props.title;
  }

  render() {
    return (
      <div id="screen">
        <div style={{height: '100vh'}}>
          <div>
            <h3>{this.props.title}</h3>
            <div className="row col-md-12">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
