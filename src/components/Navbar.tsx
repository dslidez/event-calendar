import { Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { RouteNames } from '../router'

const Navbar: FC = () => {

const router = useHistory()
const auth = true

  return (
    <Layout.Header>
      <Row justify='end'>
        {auth
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

