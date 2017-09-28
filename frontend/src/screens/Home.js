import React, {Component} from 'react';
import Form from 'react-jsonschema-form';

import {Screen, HalfPanel} from '../components';
import {PostOptions} from "../FetchHelpers";

export class Home extends Component {
  postData(formData) {
    let obj = {};
    obj[formData.key] = formData.value;
    fetch(`https://api.cloudmine.io/v1/app/2b8e3e40be446e40f1ca7631e8227f6e/text`, PostOptions(obj))
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
  }

  render() {
    const formSchema = {
      type: 'object',
      required: ['key', 'value'],
      properties: {
        key: {type: 'string', title: 'key'},
        value: {type: 'string', title: 'value'}
      }
    };
    return (
      <Screen title="Home">
        <HalfPanel title="test post">
          <Form schema={formSchema} onSubmit={data => this.postData(data.formData)} />
        </HalfPanel>

        <HalfPanel title="mock heart rate">
          <span className="fa fa-heart" />&nbsp; 100
        </HalfPanel>
      </Screen>
    );
  }
}

export default Home;
