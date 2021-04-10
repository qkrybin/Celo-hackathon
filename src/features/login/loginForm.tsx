import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router';
import { Button } from 'src/components/buttons/Button';
import { Box } from 'src/components/layout/Box';
import { Color } from 'src/styles/Color';
import { Font } from 'src/styles/fonts';
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
        <Box direction="column" styles={style.inputContainer}>
          <h1 css={Font.h1Green}>Seller Login</h1>
          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>ID</span>
            <input
              css={{...style.input }}
              name="id"
              type="text"
              value={form.id}
              onChange={handleFormChange}
            />
          </Box>
          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>PASSWORD</span>
            <input
              css={{  ...style.input }}
              name="pw"
              value={form.pw}
              onChange={handleFormChange}
              type="password"
            />
          </Box>
        </Box>
      </div>
      <Box direction="row" align="center" margin="3em 0 0 0">
        <Button
            type="button"
            size="m"
            color={Color.altGrey} 
            onClick={handleSubmit}>login
        </Button>
      </Box>
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
    textAlign: 'right',
  },
  inputLabel: {
    textAlign: 'left',
    width: '6em',
    paddingRight: '1em',
    [mq[480]]: {
      width: '8em',
    },
  },
  input: {
    width: '8.6em',
    height: '1.8em',
    textAlign: 'center',
    letterSpacing: '0.6em',
    fontSize: '1.4em',
    '::placeholder': {
      letterSpacing: '0.3em',
      color: Color.borderInactive,
      opacity: 1 /* Firefox */,
    },
    ':focus': {
      '::placeholder': {
        color: Color.primaryWhite,
        opacity: 0,
      },
    },
  },
}

