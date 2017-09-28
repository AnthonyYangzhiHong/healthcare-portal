import React, {Component} from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

require('fixed-data-table/dist/fixed-data-table.min.css');

/**
 * ExampleTable Component
 */
class ExampleTable extends Component {
  static propTypes = {
    rows: React.PropTypes.array.isRequired,
    loadingInProgress: React.PropTypes.bool
  };

  render() {
    if (this.props.loadingInProgress) {
      return <div>Loading...</div>;
    } else if (this.props.rows.length === 0) {
      return <div>No data to display</div>;
    } else {
      return (
        <Table
          rowsCount={this.props.rows.length}
          rowHeight={30}
          headerHeight={30}
          width={1000}
          maxHeight={500}
        >
          <Column
            columnKey="name"
            header={<Cell>Name</Cell>}
            cell={<RawDataCell data={this.props.rows} field="name" />}
            width={500}
          />

          <Column
            columnKey="filmCount"
            header={<Cell>Number of Films</Cell>}
            cell={<CountingCell data={this.props.rows} field={'films'} />}
            width={500}
          />
        </Table>
      );
    }
  }
}

class RawDataCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return <Cell {...props}>{data[rowIndex][field]}</Cell>;
  }
}

class CountingCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return <Cell {...props}>{data[rowIndex][field].length}</Cell>;
  }
}

export default ExampleTable;
