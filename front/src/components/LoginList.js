import React, { Fragment } from 'react';

import Login from './section/Login'

function ValidationString(s){
    let check1=0
    let check2=0
    let check3=0
    for(let i=0; i<s.length; i++){
        if (s[i]>='A' && s[i]<='Z')
            check1+=1
        if (s[i]>='a' && s[i]<='z')
            check2+=1
        if (s[i]>='0'&& s[i]<='9')
            check3+=1
    }
    return check1*check2*check3!==0
}
function LonginList() {
    
    const onSubmitLoginData = (dataLogin) => {
        if(dataLogin.username.length===0 || dataLogin.password.length==0) 
            {
                alert('Mời bạn nhập lại thông tin ')
                return ;
            }
            if(dataLogin.username.length<=6|| dataLogin.password.length<=6||ValidationString(dataLogin.password)==false) 
            {
                alert('Mật khẩu hoặc tài khoản không hợp lệ, mời nhập lại ')
                return ;
            }
        fetch('User/Login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataLogin),
        }).then(response => response.json())
            .then(dataLogin => {
                console.log('Success:', dataLogin);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <Fragment>
            <div className='container-user'>
               
                    <Login onSubmitLogin={(dataLogin) => onSubmitLoginData(dataLogin)} />
               
            </div>
        </Fragment>
    )
}
export default LonginList;