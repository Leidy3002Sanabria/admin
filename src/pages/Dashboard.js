import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const data = [
  //Informacion de la grafica de columnas
  { Meses: "Enero", Ingresos: 0.16 },
  { Meses: "Febrero", Ingresos: 0.125 },
  { Meses: "Marzo", Ingresos: 0.24 },
  { Meses: "Abril", Ingresos: 0.19 },
  { Meses: "Mayo", Ingresos: 0.22 },
  { Meses: "Junio", Ingresos: 0.05 },
  { Meses: "Julio", Ingresos: 0.01 },
  { Meses: "Agosto", Ingresos: 0.015 },
  { Meses: "Septiembre", Ingresos: 0.22 },
  { Meses: "Octubre", Ingresos: 0.05 },
  { Meses: "Noviembre", Ingresos: 0.01 },
  { Meses: "Diciembre", Ingresos: 0.015 },
];
const Dashboard = () => {
  const config = {
    data,
    xField: "Meses",
    yField: "Ingresos",
    style: {
      fill: ({ Meses }) => {
      
        return "#524CC1";
      },
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.Ingresos);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
        return "";
      },
      offset: 10,
    },
    legend: false,
  };
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="mb-0">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0">Compare tu April</p>
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="mb-0">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0">Compare tu April</p>
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="mb-0">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0">Compare tu April</p>
          </div>
        </div>
      </div>
  
      <div className="mt-4">
        <h3 className="mb-4">Ingresos estáticos</h3>
        <div>
          <Column {...config}/>
        </div>
        <div className="mt-4">
          <h3 className="mt-4">Pedidos Recientes</h3>
        <Table  columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
  
};
export default Dashboard;