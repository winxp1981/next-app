import React from 'react'
import PropTypes from 'prop-types'
import router from '../routes'

const ExternalLink = ({ route, params = {}, ...otherProps }) => {
  const path = router.findByName(route).getAs(params)
  return (
    <a href={path} {...otherProps} />
  )
}

ExternalLink.propTypes = {
  route: PropTypes.string,
  params: PropTypes.object
}

export default ExternalLink
