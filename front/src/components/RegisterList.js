import React, { Fragment } from 'react';
import Register from './section/Register';

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
function RegisterList() {
    
  
    const onSubmitRegisterData = (dataRegister) => {
        if(dataRegister.password!==dataRegister.confirm) {
            alert('Mời bạn nhập lại mật khẩu ')
            return ;
        }
        if(dataRegister.username.length===0 || dataRegister.password.length==0|| dataRegister.firstname.length==0|| dataRegister.lastname.length==0|| dataRegister.birthday.length==0) 
            {
                alert('Mời bạn nhập lại thông tin ')
                return ;
            }
            if(dataRegister.username.length<=6|| dataRegister.password.length<=6||ValidationString(dataRegister.password)==false) 
            {
                alert('thông tin không hợp lệ, mời nhập lại ')
                return ;
            }
        // if (dataRegister.name=='' ||data
        fetch('User', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataRegister),
        }).then(response => {
            console.log(response.status);
            if(response.status === 200){
                alert('Register is success')
            }else{
                alert('Register fail')
            }
        })
            // .then(dataRegister => {
            //     console.log('Success:', dataRegister);
            // })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    

    return (
        <Fragment>
            <div className='container-user'>
               
                    <Register onSubmitRegister={(dataRegister) => onSubmitRegisterData(dataRegister)} />
               
            </div>
        </Fragment>
    )
}
export default RegisterList;