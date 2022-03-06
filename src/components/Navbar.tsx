import { Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { RouteNames } from '../router'
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useTypedSelector } from './../hooks/useTypedSelector';

const Navbar: FC = () => {

const router = useHistory()
const {isAuth, user} = useTypedSelector(state => state.authReducer)
const dispatch = useDispatch()

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth
        ?
        <>
        <div style={{color: 'white'}}>
            {user.username}
          </div>
        <Menu theme="dark" mode="vertical" selectable={false}>
              <Menu.Item onClick={() => dispatch(AuthActionCreators.logout())}
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

