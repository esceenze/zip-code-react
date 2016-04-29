import React from 'react';
import zipcodes from 'zipcodes';

export default class CodeInfo extends React.Component {

  // Checking props which passed from parent component
  static propTypes = {
    code: React.PropTypes.number.isRequired,
  }

  // Setting defaults to avoid runtime exception
  static defaultProps = {
    code: 0,
  }

  render() {
    const {code} = this.props;
    // Using zipcodes npm lib to get info from zipcode
    const resultObj = zipcodes.lookup(code);

    return (
      <div className="panel-footer">
        {/* If resultObj returns info render it else print error */}
        {resultObj ?
          <div>
            This code refers to
            <h3>
              {resultObj.city}, {resultObj.state}
            </h3>
            <p className="text-muted">latitude: {resultObj.latitude}, longitude:  {resultObj.longitude}</p>
          </div>
          :
          <div className="text-muted">
            Sorry, did not find anything on {code} zip code lookup.
          </div>
        }
      </div>
    );
  }
}
