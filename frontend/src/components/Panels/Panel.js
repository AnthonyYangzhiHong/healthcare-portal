import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node
  };

  render() {
    const {title, children} = this.props;

    return (
      <div className="x_panel">
        {title && (
          <div className="x_title">
            <h2>{title}</h2>
            <div className="clearfix" />
          </div>
        )}
        <div className="x_content">{children}</div>
      </div>
    );
  }
}

export default Panel;
