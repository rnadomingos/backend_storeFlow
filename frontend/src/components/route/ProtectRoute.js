import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectRoute({ isAdmin, component: Component, ...restOfProps }) {

  const { loading, userInfo, isAuthenticated } = useSelector(state => state.userLogin)


  return (
    <Fragment>
      <Route
        {...restOfProps}
        render={(props) => {
          if (isAuthenticated === false) {
            return <Redirect to='/' />
          }

          if (isAdmin === true && !userInfo.user.is_admin) {
            return <Redirect to='/home' />
          }

          return <Component {...props} />
        }}
      />
    </Fragment>
  )
}

export default ProtectRoute
