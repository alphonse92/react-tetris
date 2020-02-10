

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

  adelantar = () => {
    this.timer.setInterval(100)
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
    return (
      <div className="App">
        current time: {this.props.timer.tick}
        <button onClick={this.adelantar} > adelantar</button>
        <button onClick={this.reanude} > reanude</button>
        <button onClick={this.pause} > pause</button>
        <button onClick={this.stop} > stop</button>
      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerComponent);
