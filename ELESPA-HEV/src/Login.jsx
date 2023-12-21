import './Login.css'

export default function Login(){

    return(
          <div>
                  <div id="blur"></div>
    <div class="login-wrap">
        <div class="login-html"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label htmlFor="tab-1" class="tab">Sign In</label> <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
            <div class="login-form">
                <div class="sign-in-htm">
                    <div class="group"> <label htmlFor="user" class="label">Username</label> <input id="user" type="text" class="input"/> </div>
                    <div class="group"> <label htmlFor="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password"/> </div>
                    <div class="group"> <input id="check" type="checkbox" class="check" checked/> <label htmlFor="check"><span class="icon"></span> Keep me Signed in</label> </div>
                    <div class="group"> <input type="submit" class="button" value="Sign In" onsubmit="redirectFunction(event)"/> </div>
                    <div class="hr"></div>
                    <div class="foot-lnk"> <a href="#forgot">Forgot Password?</a> </div>
                </div>
                <div class="sign-up-htm">
                    <div class="group"> <label htmlFor="user" class="label">Username</label> <input id="user" type="text" class="input"/> </div>
                    <div class="group"> <label htmlFor="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password"/> </div>
                    <div class="group"> <label htmlFor="pass" class="label">Repeat Password</label> <input id="pass" type="password" class="input" data-type="password"/> </div>
                    <div class="group"> <label htmlFor="pass" class="label">Email Address</label> <input id="pass" type="text" class="input"/> </div>
                    <div class="group"> <input type="submit" class="button" value="Sign Up"/> </div>
                    <div class="hr"></div>
                    
                </div>
            </div>
        </div>
    </div>
         </div>
    )
    
}