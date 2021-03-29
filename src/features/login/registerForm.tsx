import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { Button } from 'src/components/buttons/Button';
import { Box } from 'src/components/layout/Box';
import { Color } from 'src/styles/Color';
import { mq } from 'src/styles/mediaQueries';
import { Stylesheet } from 'src/styles/types';

export function RegisterForm( setIsLoggedIn: any) {
  const [form, setForm] = useState({ email: "", password: "",name:"",confirmPassword:"" });

  const handleFormChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const resetForm = () => {
    setForm({ email: "", password: "", name:"",confirmPassword:"" });
  };
  const validCheck = () => {

    if (form.password != form.confirmPassword) {
      alert("Passwords are not identical");
      return false;
    } 
    if (form.email.length === 0 || form.password.length === 0||form.name.length === 0) {
      alert("fill every section!");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    console.log(form);
    if (!validCheck) return;
    axios
      .post(process.env.API_HOST + "/auth/register/", form)
      .then(function (response) {
        console.log(response);
        alert("login success!");
        setIsLoggedIn(true);
      })
      .catch(function (error) {
        resetForm();
        alert("login fail!");
        console.log(error);
      });
  };

  return (
    <Box direction="column" align="center">
      <div css={style.formContent}>
        <Box direction="column" styles={style.inputContainer}>
          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>EMAIL</span>
            <input
              css={{...style.input }}
              name="email"
              type="text"
              value={form.email}
              onChange={handleFormChange}
            />
          </Box>
          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>NAME</span>
            <input
              css={{...style.input }}
              name="name"
              type="text"
              value={form.name}
              onChange={handleFormChange}
            />
          </Box>
          <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>PASSWORD</span>
            <input
              css={{  ...style.input }}
              name="password"
              value={form.password}
              onChange={handleFormChange}
              type="password"
            />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
            <span css={style.inputLabel}>CONFIRM PASSWORD</span>
            <input
              css={{  ...style.input }}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleFormChange}
              type="password"
            />
        </Box>
        </Box>
      </div>
      <Box direction="row" align ="center" margin="3em 0 0 0">
        <Button
            type="button"
            size="m"
            color={Color.altGrey} 
            onClick={handleSubmit}>Register
        </Button>
      </Box>
    </Box>
  );
}
export const MemoizedLoginForm = React.memo(RegisterForm);

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

