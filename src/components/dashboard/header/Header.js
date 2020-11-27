import React from 'react'

/**
 * This is a header component
 * Displays the user logged in and the log out button
 */
const Header = ()=>{
    return(<div className="ui clearing segment">
    <h3 className="ui right floated header">
      Log Out
    </h3>
    <h3 className="ui left floated header">
    Agent Dashboard
    </h3>
  </div>);
}

export default Header