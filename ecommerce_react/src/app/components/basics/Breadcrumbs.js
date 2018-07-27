import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'mdbreact'

class Breadcrumbs extends Component {
  renderBreadcrumbs() {
    var location = this.props.location.pathname
    location = location.split('/')
    if (location[0] === location[1]) {
      return <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
    } else {
      var href = ''
      return location.map( (crumbs, index) => {
        if (crumbs === "") {
          return <BreadcrumbItem key={index}><a href="/">Home</a></BreadcrumbItem>
        } else {
          href += '/' + crumbs
          return (
            <BreadcrumbItem key={index}>
              <a href={href}>
                {crumbs.charAt(0).toUpperCase() + crumbs.substr(1)}
              </a>
            </BreadcrumbItem>
          )
        }
      })
    }
  }
  render() {
    return (
      <Breadcrumb>
        {this.renderBreadcrumbs()}
      </Breadcrumb>

    )
  }
}

export default Breadcrumbs
