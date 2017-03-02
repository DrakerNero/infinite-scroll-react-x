import React, { Component, PropTypes } from 'react';
import _ from 'lodash'

const scrollY = window.scrollY
const innerHeight = window.innerHeight

class InFiniteScrollReactX extends Component {
  static propTypes = {
    selectId: PropTypes.string
  }

  static defaultProps = {
    selectId: '',
  }

  componentDidMount = () => {
    const { selectId } = this.props
    const { windowScroll, positionScroll } = this

    if (_.isEmpty(selectId)) {
      windowScroll()
    } else {
      positionScroll()
    }
  }

  windowScroll = () => {
    window.addEventListener('scroll', () => {
      console.log('No')
      const height = document.body.clientHeight
      const height8 = window.scrollY
      const height10 = document.getElementById('main').clientHeight
      const maxScrollHeight = (height - innerHeight) + 16 // ใช้ตัวนี้
      console.log(document.body.clientHeight, document.getElementById('main').clientHeight)
      console.log('result', maxScrollHeight)
    })
  }

  positionScroll = () => {
    const { selectId } = this.props
    document.getElementById(selectId).addEventListener('scroll', () => {
      console.log('Yes')
      const height = document.getElementById(selectId).clientHeight
      console.log(height)
      const height8 = window.scrollY
      const clientHeight = document.getElementById('main').clientHeight
      const maxScrollHeight = (clientHeight - innerHeight) + 16 // ใช้ตัวนี้
      console.log(document.body.clientHeight, document.getElementById('main').clientHeight)
      console.log('result', maxScrollHeight)
      
    })
  }

  render() {
    // const { selectId } = this.props
    // const { windowScroll, positionScroll } = this

    // if (_.isEmpty(selectId)) {
    //   windowScroll()
    // } else {
    //   positionScroll()
    // }

    // window.addEventListener('scroll', (e) => {
    //   let height = null
    //   // console.log(height)
    //   // const height8 = window.scrollY
    //   // const height9 = window.innerHeight
    //   // const height10 = document.getElementById('main').clientHeight
    //   // const maxScrollHeight = (height10 - height9) + 16 // ใช้ตัวนี้
    //   // console.log(document.body.clientHeight, document.getElementById('main').clientHeight)
    // })

    return (
      <div>
        hello
      </div>
    );
  }
}

export default InFiniteScrollReactX;
