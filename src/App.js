import React from 'react';
import { Table } from 'antd';
import data from './data.json'

class App extends React.Component {
  state = {
    columns: [
      {
        title: "Test",
        children: [
          {
            title: " ",
            key: "test_child",
            dataIndex: "test_child",
            render: (text, row, index) => {
              if(index % 2 === 0) {
                return {
                  children: <span>{text}</span>,
                  props: {
                    rowSpan: 2
                  }
                }
              }

              return {
                children: <span>{text}</span>,
                props: {
                  rowSpan: 0
                }
              }
            }
          },
        ]
      }, {
        title: "Library",
        children: [
          {
            title: " ",
            key: "lib_child",
            dataIndex: "lib_child"
          },
        ]
      }, {
        title: "Result - First Run(ms)",
        children: [
          {
            title: "10 rows",
            key: "first_row_10",
            dataIndex: "first_row_10",
            sorter: (a, b) => a.first_row_10 - b.first_row_10,
          },
          {
            title: "100 rows",
            key: "first_row_100",
            dataIndex: "first_row_100",
            sorter: (a, b) => a.first_row_100 - b.first_row_100,
          },
          {
            title: "1000 rows",
            key: "first_row_1000",
            dataIndex: "first_row_1000",
            sorter: (a, b) => a.first_row_1000 - b.first_row_1000,
          }
        ]
      },{
        title: "Result - Second Run(ms)",
        children: [
          {
            title: "10 rows",
            key: "second_row_10",
            dataIndex: "second_row_10",
            sorter: (a, b) => a.second_row_10 - b.second_row_10,
          },
          {
            title: "100 rows",
            key: "second_row_100",
            dataIndex: "second_row_100",
            sorter: (a, b) => a.second_row_100 - b.second_row_100,
          },
          {
            title: "1000 rows",
            key: "second_row_1000",
            dataIndex: "second_row_1000",
            sorter: (a, b) => a.second_row_1000 - b.second_row_1000,
          }
        ]
      },{
        title: "Result - Third Run(ms)",
        children: [
          {
            title: "10 rows",
            key: "third_row_10",
            dataIndex: "third_row_10",
            sorter: (a, b) => a.third_row_10 - b.third_row_10,
          },
          {
            title: "100 rows",
            key: "third_row_100",
            dataIndex: "third_row_100",
            sorter: (a, b) => a.third_row_100 - b.third_row_100,
          },
          {
            title: "1000 rows",
            key: "third_row_1000",
            dataIndex: "third_row_1000",
            sorter: (a, b) => a.third_row_1000 - b.third_row_1000,
          }
        ]
      },{
        title: "Result - Fourth Run(ms)",
        children: [
          {
            title: "10 rows",
            key: "fourth_row_10",
            dataIndex: "fourth_row_10",
            sorter: (a, b) => a.fourth_row_10 - b.fourth_row_10,
          },
          {
            title: "100 rows",
            key: "fourth_row_100",
            dataIndex: "fourth_row_100",
            sorter: (a, b) => a.fourth_row_100 - b.fourth_row_100,
          },
          {
            title: "1000 rows",
            key: "fourth_row_1000",
            dataIndex: "fourth_row_1000",
            sorter: (a, b) => a.fourth_row_1000 - b.fourth_row_1000,
          }
        ]
      },{
        title: "Result - Fifth Run(ms)",
        children: [
          {
            title: "10 rows",
            key: "fifth_row_10",
            dataIndex: "fifth_row_10",
            sorter: (a, b) => a.fifth_row_10 - b.fifth_row_10,
          },
          {
            title: "100 rows",
            key: "fifth_row_100",
            dataIndex: "fifth_row_100",
            sorter: (a, b) => a.fifth_row_100 - b.fifth_row_100,
          },
          {
            title: "1000 rows",
            key: "fifth_row_1000",
            dataIndex: "fifth_row_1000",
            sorter: (a, b) => a.fifth_row_1000 - b.fifth_row_1000,
          }
        ]
      },
    ],
    data: data
  }
  render() {
    const { columns, data } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}

export default App;
