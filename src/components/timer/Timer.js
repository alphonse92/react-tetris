import React from 'react';
import { connect } from 'react-redux'
import {
  setTick,
  setPause,
  setStop,
  setInterval,
} from '../../redux/actionCreators/Timer';
import { Timer } from './../../services/Timer';

const mapStateToProps = (state) => ({ timer: { ...state.timer } })
const mapDispatchToProps = {
  setTick,
  setPause,
  setStop,
  setInterval,
}

class TimerComponent extends React.Component {

  constructor(props) {
    super(props)
    this.timer = new Timer({ interval: 1000 })
      .subscribe(Timer.Events.TICK, this.setEvent(this.props.setTick))
      .subscribe(Timer.Events.NEW_INTERVAL, this.setEvent(this.props.setInterval))
      .subscribe(Timer.Events.STOP, this.setEvent(this.props.setStop))
      .subscribe(Timer.Events.PAUSE, this.setEvent(this.props.setPause))
      .run();
  }

  setEvent = dispatcher => ({ data }) => dispatcher(data)

  aumentarVelocidad = () => {
    this.timer.setInterval(this.props.timer.interval - 100)
  }

  disminuirVelocidad = () => {
    this.timer.setInterval(this.props.timer.interval + 100)
  }

  reanude = () => {
    this.timer.reanude()
  }
  pause = () => {
    this.timer.pause()
  }
  stop = () => {
    this.timer.stop()
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      position: 'absolute',
      top: 0,
      left: 0
    }

    if (this.props.showControls)
      return (
        <React.Fragment>
          <div style={style} >
            t: <small>{this.props.timer.tick}</small>
            || i: <small>{this.props.timer.interval}</small>
            <button onClick={this.disminuirVelocidad} > {"<<"}  </button>
            <button onClick={this.aumentarVelocidad} > >> </button>
            <button onClick={this.reanude} > > </button>
            <button onClick={this.pause} >||</button>
            <button onClick={this.stop} > X</button>
          </div >
          {this.props.children}
        </React.Fragment>
      )

    return this.props.children;
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerComponent);
