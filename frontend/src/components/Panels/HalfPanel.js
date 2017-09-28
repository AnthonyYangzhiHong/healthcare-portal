import React from 'react';
import {Panel} from '../';

export default function PanelWrapper(props) {
  return (
    <div className="col-md-6 col-sm-6 col-xs-12">
      <Panel title={props.title}>
        <div>{props.children}</div>
      </Panel>
    </div>
  );
}
