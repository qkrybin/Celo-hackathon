import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router';
import seller from 'src/components/icons/forsellers.svg';
import Logo from 'src/components/icons/Mark-at_logo.svg';
import { Box } from 'src/components/layout/Box';
import { mq } from 'src/styles/mediaQueries';
import { Stylesheet } from 'src/styles/types';

export function LoginForm( setIsLoggedIn: any) {
  const [form, setForm] = useState({ id: "", pw: "" });
  const navigate = useNavigate()
  const handleFormChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const resetForm = () => {
    setForm({ id: "", pw: "" });
  };
  const validCheck = () => {

    if (form.id.length === 0 || form.pw.length === 0) {
      alert("fill every section!");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    console.log(form);
    if (!validCheck) return;
    axios
      .post(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/api/auth/login/?id=${form.id}&pw=${form.pw}`,form )
      .then(function (response) {
        console.log(response.data.result);
        if (response.data.result=='success'){
          alert("login success!");
          setIsLoggedIn(true);
          navigate('/')}
        else{ alert("login fail!");}
      })
      .catch(function (error) {
        resetForm();
        console.log(error);
      });
  };

  return (
    <Box direction="column" align="center">
      <div css={style.formContent}>
        <Box direction="column" align="center" styles={style.inputContainer}>
          <img width="156pt" height="48pt" src={Logo} alt="Mark-at Logo" css={style.logo} />
          <img width="156pt" height="20pt" src={seller} alt="Mark-at Logo" css={style.logo} />
          <Box direction="column" styles={style.inputContainer}>
          <Input
            size="large"
            placeholder="ID"
            prefix={<UserOutlined />}
            // value={form.id}
            // name="id"
            // onChange={handleFormChange}
          />
          </Box>
          <Box direction="column" styles={style.inputContainer}>
          <Input
            size="large"
            placeholder="PASSWORD"
            prefix={<LockOutlined />} 
            value={form.pw}
            name="pw"
            onChange={handleFormChange}
          />
          </Box>
        </Box>
        <Box direction="column" align="center" >
          <button
              style={style.btn}
              onClick={handleSubmit}>Login
          </button>
          </Box>
          <Box direction="column" align="center">
          <button
              style={style.btn}
              onClick={()=>{navigate('/seller-register')}}>Sign Up
          </button>
        </Box>
      </div>
    </Box>
    
  );
}
export const MemoizedLoginForm = React.memo(LoginForm);

const style: Stylesheet = {
  formContent: {
    [mq[480]]: {
      marginLeft: '-1.3em',
    },
  },
  inputContainer: {
    marginTop: '1.5em',
    textAlign: 'left',
  },
  btn: {
    width: '12em',
    height:'2em',
    marginTop: '1.5em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    outline: 'none',
    border: 'none',
    borderRadius: 5,
    fontWeight: 500,
    color: 'rgba(255,255,255)',
    font: "Poppins-Medium"
  },

}