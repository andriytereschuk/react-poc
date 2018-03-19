import React from 'react';
import PropTypes from 'prop-types';
import appConfig from '../../config/appConfig';
import './Home.scss';
import CounterContainer from './components/CounterContainer/CounterContainer';
import Users from './components/Users/Users';
import withWire from '../common/hocs/withWire';

function Home(props) {
  return (
    <div>
      <h1>This is home page</h1>
      <h3>Bootstrap grid system</h3>
      <div className="row">
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div className="col-6 col-sm-6">.col-6 .col-sm-6</div>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>
      <h3>{props.dumbService.getHelloPhrase()}</h3>
      <h3>From config: {appConfig.baseUrl}</h3>
      <CounterContainer />
      <button onClick={props.notificationService.error}>
        show notification
      </button>
      <div className="row row-center">
        <Users />
      </div>
    </div>
  );
}

Home.propTypes = {
  dumbService: PropTypes.shape({
    getHelloPhrase: PropTypes.func
  }).isRequired,
  notificationService: PropTypes.shape({
    error: PropTypes.func
  }).isRequired
};

export default withWire(
  Home,
  ['dumbService', 'notificationService'],
  (dumbService, notificationService) => (
    { dumbService, notificationService }
  )
);