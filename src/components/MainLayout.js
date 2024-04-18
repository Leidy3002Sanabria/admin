import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
//Librerias de iconos
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import { MdChecklist } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { MdOutlineCategory } from "react-icons/md";
import { IoIosColorFill } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa6";
import { SiBloglovin } from "react-icons/si";
import { TbLogin2 } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { Outlet } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className='logo'>
          <h2 className= "text-white fs-5 text-center py-4 mb-0">
            
            <span className="sm-logo">DC</span>
            <span className="lg-logo">Dev Corner</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '',
              icon: <RiDashboardFill />,
              label: 'Panel de Administración',
            },
            {
              key: 'customers',
              icon: <VideoCameraOutlined />,
              label: 'Clientes',
            },
            {
              key: 'Catalog',
              icon: <GrCatalog />,
              label: 'Catalogo',
              children:[
                {
                  key: "Product",
                  icon: <MdOutlineAddShoppingCart className='fs-4' />,
                  label: 'Agregar Productos',
                },
                {
                  key: "Product-list",
                  icon: <MdChecklist className='fs-4' />,
                  label: 'Lista de productos',
                },
                {
                 
                  key: "brand",//brand->Marca
                  icon: <SiBrandfolder  className='fs-4' />,
                  label: 'Marca',
                },
                {
                 
                  key: "list-brand",//brand->Marca
                  icon: <MdChecklist  className='fs-4' />,
                  label: 'Lista de Marcas',
                },
                {
                 
                  key: "category",
                  icon: <MdOutlineCategory   className='fs-4' />,
                  label: 'Categoria',
                },
                {
                 
                  key: "list-category",
                  icon: <MdChecklist   className='fs-4' />,
                  label: 'Lista de Categorias ',
                },
                {
                 
                  key: "category",
                  icon: <MdOutlineCategory   className='fs-4' />,
                  label: 'Categoria',
                },
                {
                 
                  key: "list-category",
                  icon: <MdChecklist   className='fs-4' />,
                  label: 'Lista de Categorias ',
                },
                {
                 
                  key: "color",
                  icon: <IoIosColorFill   className='fs-4' />,
                  label: 'Color',
                },
                {
                 
                  key: "list-color",
                  icon: <IoIosColorFill   className='fs-4' />,
                  label: 'Lista de Colores ',
                }
              ]
            },
            {   
              key: "orders",
              icon: <FaClipboardList    className='fs-4' />,
              label: 'Ordenes ',
            },
            {
              key: "blog",
              icon: <SiBloglovin  className='fs-4' />,
              label: 'Blogs ',
              children:[
                {   
                  key: "blog",
                  icon: <TbLogin2    className='fs-4' />,
                  label: 'Agregar blog',
                },
                
                {   
                  key: "blog-list",
                  icon: <MdChecklist   className='fs-4' />,
                  label: 'Lista de Blog',
                },
                {   
                  key: "blog-category",
                  icon: <TbLogin2    className='fs-4' />,
                  label: 'Agregar Categoria',
                },
                
                {   
                  key: "blog-category-list",
                  icon: <MdChecklist    className='fs-4' />,
                  label: 'Lista de Categorias',
                },
              ]
            },
            
            {   
              key: "enquiries",
              icon: <FaClipboardList    className='fs-4' />,
              label: 'Consultas ',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header 
        className="d-flex justify-content-between ps-1 pe-5"
        style=
        {{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div className="position-relative">
              <IoMdNotifications className='fs-4'/>
              <span className="badge bg-warning rounded-circle p-1 position-absolute">3</span>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <img 
                width={32}
                height={32}
                src="https://img.freepik.com/foto-gratis/efecto-humo-marco-neon-morado_53876-98142.jpg?t=st=1712677869~exp=1712681469~hmac=636b49d434151d41c7980e02fb1cc638de30c89a316942ee84e52d8eda175637&w=740"/>
              </div>
              <div>
                <h5 className="mb-0">Proyecto de Grado</h5>
                <p className="mb-0">Proyecto@gmail.com</p>
              </div>
            </div> 
            </div>
        </Header>
        <div></div>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        
        <Outlet/>
        
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;