import React, { Component } from 'react';
import {authenticateUser} from '../../services/authentication'

/**
 * login component renders the login form 
 * handles authentication
 */
class Login extends Component {


    render() {
        return (<main class="pa4 black-80">
            <form class="measure center">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">Asian Insurance Agent Portal</legend>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input class="pa2 input-reset ba bg-transparent  hover-gray w-100" type="email"  id="email-address"
                         />
            </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input class="b pa2 input-reset ba bg-transparent hover-gray w-100" type="password" name="password" id="password"
                            />
            </div>
          </fieldset>
                            <div class="">
                                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                   type="submit" value="Log in"
                                 />
          </div>
                                <div class="lh-copy mt3">
                                    <label class="db fw6 lh-copy f6">For password resets contact IT Helpdesk</label>
                                </div>
        </form>
      </main>)
    }
}

export default Login