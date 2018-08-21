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
          crumbs = crumbs.split('_')
          return (
            <BreadcrumbItem key={index}>
              <a href={href}>
                {crumbs.map( (crumb) => {
                  return crumb.charAt(0).toUpperCase() + crumb.substr(1) + ' '
                })}
              </a>
            </BreadcrumbItem>
          )
        }
      })
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <Breadcrumb>
          {this.renderBreadcrumbs()}
        </Breadcrumb>
      </div>
    )
  }
}

export default Breadcrumbs
