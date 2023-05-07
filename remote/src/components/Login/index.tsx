import React, { useState } from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';

interface ButtonProps {
  onClick?: Function
}

export const Login: React.FunctionComponent<ButtonProps> = ({ onClick }) => {
  const [username, setUserName] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  
  return (
    <Box sx={{ width: 500 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            label="User Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={() => onClick?.(username, password)}>Login</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
