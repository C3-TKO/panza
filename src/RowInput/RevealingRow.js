import React, { PropTypes } from 'react'
import {
  Animated,
  StyleSheet,
  View
} from 'react-native'
import {
  Base
} from '../index'

/**
 * ReavealingRow enables a row to have revealed options
 * that appear, for instance, when editing it.
 *
 * @Platform ios, android, web
 * @Composes Base
 */

class RevealingRow extends React.Component {

  static displayName = 'RevealingRow'

  static propTypes = {
    showingOptions: PropTypes.bool.isRequired,
    revealedContent: PropTypes.node.isRequired,
    children: PropTypes.node,
    backgroundColor: PropTypes.string
  }

  static defaultProps = {
    showingOptions: false,
    backgroundColor: 'white'
  }

  constructor(props) {
    super(props)
    this.onViewLayout = this.onViewLayout.bind(this)
    this.onOptionsLayout = this.onOptionsLayout.bind(this)
    this.state = {
      leftPosition: new Animated.Value(0),
      rowHeight: 40,
      renderRevealOptions: false,
      revealWidth: -150
    }
  }

  componentWillReceiveProps(nextProps) {
    // animate in
    if (!this.props.showingOptions && nextProps.showingOptions) {
      this.showOptions()

    // animate out
    } else if (!nextProps.showingOptions && this.props.showingOptions) {
      this.hideOptions()
    }
  }

  onViewLayout(e) {
    this.setState({
      renderRevealOptions: true,
      rowHeight: e.nativeEvent.layout.height
    })
  }

  onOptionsLayout(e) {
    this.setState({
      revealWidth: e.nativeEvent.layout.width
    })
  }

  showOptions() {
    Animated.spring(
      this.state.leftPosition,
      { toValue: -this.state.revealWidth }
    ).start()
  }

  hideOptions() {
    Animated.spring(
      this.state.leftPosition,
      { toValue: 0 }
    ).start()
  }

  render() {
    return (
      <View style={{ position: 'relative' }}>
        {this.state.renderRevealOptions && (
          <View style={[styles.revealContainer, { height: this.state.rowHeight }]}>
            <View
              onLayout={this.onOptionsLayout}
              style={{ height: this.state.rowHeight, alignSelf: 'flex-end' }}
            >
              {this.props.revealedContent}
            </View>
          </View>
        )}
        <Base
          onLayout={this.onViewLayout}
          style={{
            flex: 1,
            transform: [{ translateX: this.state.leftPosition }]
          }}
          backgroundColor={this.props.backgroundColor}
          Component={Animated.View}
        >
            {this.props.children}
        </Base>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  revealContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  }
})

export default RevealingRow
