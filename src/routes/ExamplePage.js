import React, { Component } from "react";
import { connect } from "dva";
import { Table } from "antd";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "city",
    key: "city",
  },
];

@connect(({ example }) => ({ example }), {
  getProductData: (payload) => ({ type: "example/getProductData", payload }),
})
class Example extends Component {
  dataSearch = () => {
    // 异步获取数据
    this.props.getProductData();
  };

  render() {
    console.log("props", this.props);
    const { data } = this.props.example;

    return (
      <div>
        <h3>Example</h3>
        <button onClick={this.dataSearch}>search</button>
        <Table columns={columns} dataSource={data} rowKey="id" />
      </div>
    );
  }
}
export default Example;
