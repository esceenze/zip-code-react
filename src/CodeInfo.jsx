import React from 'react';
import zipcodes from 'zipcodes';

export default class CodeInfo extends React.Component {

  static propTypes = {
    code: React.PropTypes.number.isRequired,
  }

  static defaultProps = {
    code: 0,
  }

  render() {
    const {code} = this.props;
    const resultObj = zipcodes.lookup(code);

    return (
      <div className="panel-footer">
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
            Did not find anything on {code} zip code lookup.
          </div>
        }
      </div>
    );
  }
}
