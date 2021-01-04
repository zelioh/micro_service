export class Profile extends React.Component
{
    flip(toface) {
        document.getElementById('formholder').classNameName += " rotacache";
        setTimeout(function(){

            if (toface === 'front') {
                document.getElementById('frontpassword').style.display = 'block';
                document.getElementById('frontemail').style.display = 'block';
                document.getElementById('frontp1').style.display = 'block';
                document.getElementById('frontb1').style.display = 'block';
                document.getElementById('frontb2').style.display = 'block';
                document.getElementById('frontp2').style.display = 'block';

                document.getElementById('backemail').style.display = 'none';
                document.getElementById('backpass1').style.display = 'none';
                document.getElementById('backpass2').style.display = 'none';
                document.getElementById('backadress').style.display = 'none';
                document.getElementById('backan').style.display = 'none';
                document.getElementById('backb1').style.display = 'none';
                document.getElementById('backb2').style.display = 'none';
                document.getElementById('backp').style.display = 'none';
            }

            if (toface === 'back') {
                document.getElementById('frontpassword').style.display = 'none';
                document.getElementById('frontemail').style.display = 'none';
                document.getElementById('frontp1').style.display = 'none';
                document.getElementById('frontb1').style.display = 'none';
                document.getElementById('frontb2').style.display = 'none';
                document.getElementById('frontp2').style.display = 'none';

                document.getElementById('backemail').style.display = 'block';
                document.getElementById('backpass1').style.display = 'block';
                document.getElementById('backpass2').style.display = 'block';
                document.getElementById('backadress').style.display = 'block';
                document.getElementById('backan').style.display = 'block';
                document.getElementById('backb1').style.display = 'block';
                document.getElementById('backb2').style.display = 'block';
                document.getElementById('backp').style.display = 'block';
            }

            document.getElementById('formholder').classNameName = document.getElementById('formholder').classNameName.replace(' rotacache','');
        }, 500);
    }

    render()
    {
        return (
            <div>
                <div id="formholder" className="formholder">
                    <p id="frontp1">Log In</p>
                    <input type="text" id="frontemail" className="profinput" placeholder="Email"/>
                    <input type="password" id="frontpassword" className="profinput" placeholder="Password"/>
                    <button onClick={() => this.flip("back")} id="frontb1" className="formbtn" style={{float: "left"}}>Sign-up</button>
                    <button onClick={() => login()} id="frontb2" className="formbtn" style={{float: "right"}}>Log-in</button>

                    <p id="frontp2" style={{cursor: "pointer", color:"#555555", width:"100%", fontSize:"1em"}}>Forgot Password?</p>



                    <p style={{display:"none"}} id="backp">Sign-up</p>
                    <input style={{display:"none"}} type="text" id="backemail" className="profinput" placeholder="Email"/>
                    <input style={{display:"none"}} type="password" id="backpass1" className="profinput" placeholder="Password"/>
                    <input style={{display:"none"}} type="password" id="backpass2" className="profinput" placeholder="repeat Password"/>
                    <input style={{display:"none"}} type="text" id="backan" className="profinput" placeholder="Account-name"/>
                    <input style={{display:"none"}} type="text" id="backadress" className="profinput" placeholder="Adress"/>

                    <button onClick={() => this.flip("front")} id="backb1" className="formbtn" style={{float: "left", display:"none"}}>Log-in</button>
                    <button onClick={() => signup("back")} id="backb2" className="formbtn" style={{float: "right", display:"none"}}>Sign-up</button>

                </div>
            </div>
        );
    }
}