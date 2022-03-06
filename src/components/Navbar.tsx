import { Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { RouteNames } from '../router'
import { useTypedSelector } from './../hooks/useTypedSelector';

const Navbar: FC = () => {

const router = useHistory()
const {isAuth} = useTypedSelector(state => state.authReducer)

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth
        ?
        <>
        <div style={{color: 'white'}}>
            DANIIL
          </div>
        <Menu theme="dark" mode="vertical" selectable={false}>
              <Menu.Item onClick={() => console.log('выйти')}
                         key={1}
                         >
                          Logout
                         </Menu.Item>
                </Menu>
        </>
        :
          <Menu theme="dark" mode="vertical" selectable={false}>
              <Menu.Item onClick={() => router.push(RouteNames.LOGIN)}
                         key={1}
                         >
                            Login
                         </Menu.Item>
                </Menu>
        }
      </Row>
    </Layout.Header>
  )
}

export default Navbar

//rafc

