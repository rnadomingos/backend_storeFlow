import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function ProtectRoute({ isAdmin, component: Component, ...rest }) {

  const { loading, userInfo, isAuthenticated } = useSelector(state => state.userLogin)

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={props => {
            if (isAuthenticated === false) {
              return <Redirect to='/' />
            }

            if (isAdmin === true && !userInfo.user.is_admin) {
              return <Redirect to='/' />
            }

            return <Component {...props} />
          }}
        />
      )}
    </Fragment>
  )

}
