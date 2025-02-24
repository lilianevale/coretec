import { NavLink } from 'react-router-dom';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBIcon,
    CDBSidebarFooter,
    CDBDropDownToggle,
    CDBDropDownMenu,
    CDBDropDownItem,

  } from 'cdbreact';
import { color } from 'react-magic-motion';

  
  
  
function Sidebar(){
  const [open, setOpen] = useState(false);

    return(
        <div>
         <CDBSidebar textColor="#fff" backgroundColor="#333" style={{height:"300vh", float:"left"}}>           

        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Bem Vindo!</CDBSidebarHeader>            

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink to='/'>
            <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='#'>
            <CDBSidebarMenuItem icon="fa-solid fa-flask" iconType="solid" > 
              Módulo de Química
            </CDBSidebarMenuItem>               </NavLink>
            <CDBSidebarMenuItem icon="school"  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} >  Módulo Engenharia Civil   </CDBSidebarMenuItem>
<Collapse in={open}>
<div id="example-collapse-text">
<p><NavLink  to='./ConcProtenido'> Concreto Protendido
</NavLink></p>
<p><NavLink to='./Hidrologia'> Hidrologia
</NavLink></p>
<p><NavLink to='./ConcArmado'> Concreto Armado
</NavLink></p>
    </div>
    </Collapse>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>


        </div>
    );
} export default Sidebar