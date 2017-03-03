import React, { Component, PropTypes } from 'react';
import _ from 'lodash'

const scrollY = window.scrollY
const innerHeight = window.innerHeight

class InFiniteScrollReactX extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeOut: 1,
    }
  }

  static propTypes = {
    selectId: PropTypes.string,
    offsetHeight: PropTypes.number,
    delay: PropTypes.number,
    onScrollAction: PropTypes.func.isRequired,
  }

  static defaultProps = {
    selectId: '',
    offsetHeight: 100,
    delay: 3,
  }

  componentDidMount = () => {
    const { selectId, offsetHeight } = this.props
    const { windowScroll, positionScroll } = this

    if (_.isEmpty(selectId)) {
      windowScroll()
    } else {
      positionScroll()
    }
  }

  hasTimeState = (timeOut) => {
    this.setState({
      timeOut,
    })
  }
  
  windowScroll = () => {
    const { offsetHeight } = this.props
    const { onfuncScroll } = this

    window.addEventListener('scroll', () => {
      const scroll = window.scrollY
      const height = document.body.clientHeight
      const maxHeight = height + 16
      const onScroll = scroll + innerHeight
      if ((onScroll + offsetHeight) >= maxHeight) {
        onfuncScroll()
      }

    })
  }

  positionScroll = () => {
    const { selectId, offsetHeight } = this.props
    const { onfuncScroll } = this
    const element = document.getElementById(selectId)

    document.getElementById(selectId).addEventListener('scroll', () => {
      const maxHeight = element.scrollHeight
      const clientHeight = element.clientHeight
      const onScroll = element.scrollTop + element.clientHeight


      if ((onScroll + offsetHeight) >= maxHeight) {
        onfuncScroll()
      }

    })
  }

  onfuncScroll = () => {
    const { timeOut } = this.state
    const { delay, onScrollAction } = this.props
    if (this.state.timeOut > 0) {
      this.hasTimeState(0)

      onScrollAction()

      setTimeout((e) => {
        this.hasTimeState(1)
      }, (delay * 1000))
    }
  }

  render() {
    return (
      <div>
        { /* Infinite scroll react x */ }
      </div>
    );
  }
}

export default InFiniteScrollReactX;
