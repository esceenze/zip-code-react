import React from 'react';
import CodeInfo from './CodeInfo';
import cx from 'classnames';

export default class App extends React.Component {

  constructor() {
    super();

    // the State of current app
    this.state = {
      code: '',
      codeValidated: false,
    };
  }

  updateCode = (code) => {
    // Updating state and verificate a zipcode in a dirty way
    const codeLength = code.toString().length;
    if (codeLength <= 5) {
      this.setState({code});
      if ( codeLength === 5) {
        this.setState({codeValidated: true});
      }
      else {
        this.setState({codeValidated: false});
      }
    }
  }

  render() {
    const {code, codeValidated} = this.state;
    // Creating styles using classnames lib and values from state
    const styles = cx({
      'form-group': true,
      'has-error': !codeValidated && code.length >= 1,
      'has-success': codeValidated,
    });

    return (
      <div className="col-md-2 col-md-offset-5" style={{marginTop: '80px'}}>
        {/* Using default bootstrap css styles */}
        <div className="panel panel-default">
          <div className="panel-body">
            <h5 className="panel-title">Find your code</h5>
            <hr />
            <div className={styles}>
            {/* Update state on change input's value */}
            <input type="number"
              placeholder="90210"
              onChange={(e) => this.updateCode(e.target.value)}
              value={code}
              className="form-control input-lg"/>
            </div>
          </div>
          {/* If zipode validates render CodeInfo component */}
          {codeValidated && <CodeInfo code={parseInt(code, 10)} />}
        </div>
      </div>
    );
  }
}
