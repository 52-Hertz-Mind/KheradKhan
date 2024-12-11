import DashboardNavbar from '../components/DashboardNavbar.tsx';
import Footer from '../components/Footer.tsx';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import {
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';

// Create the RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Define the RTL theme
const theme = createTheme({
  direction: 'rtl',
});

function UserSetting() {
  const [nameChangeOpen, setNameChangeOpen] = useState(false);
  const [passwordChangeOpen, setPasswordChangeOpen] = useState(false);
  const [name, setName] = useState('Mamad');
  const [password, setPassword] = useState('12345678');

  const handleNameChangeClickOpen = () => {
    setNameChangeOpen(true);
  };
  const handlePasswordChangeClickOpen = () => {
    setPasswordChangeOpen(true);
  };

  const handleClose = () => {
    setNameChangeOpen(false);
    setPasswordChangeOpen(false);
  };
  return (
    <div>
      <DashboardNavbar />

      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div dir="rtl">
            <div className="px-96 py-20 flex flex-col items-center">
              <h1 className="text-5xl mb-10">تنظیمات حساب</h1>
              <div className="border flex flex-col px-40 py-10 gap-5">
                <div className="flex gap-10">
                  <TextField
                    id="outlined-basic"
                    label="اسم"
                    variant="outlined"
                    type="name"
                    value={name}
                  />
                  <button
                    onClick={handleNameChangeClickOpen}
                    className="text-blue-700"
                  >
                    تغییر اسم
                  </button>
                  <Dialog
                    dir="rtl"
                    open={nameChangeOpen}
                    onClose={handleClose}
                    PaperProps={{
                      component: 'form',
                      onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(
                          (formData as any).entries()
                        );
                        const name = formJson.name;
                        setName(name);
                        console.log(name);
                        handleClose();
                      },
                    }}
                  >
                    <DialogTitle>تغییر اسم</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        اسم جدید خود را وارد کنید
                      </DialogContentText>
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="اسم"
                        type="name"
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button type="submit">تغییر اسم</Button>
                      <Button onClick={handleClose}>لغو</Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div className="flex gap-10">
                  <TextField
                    id="outlined-basic"
                    label="رمز ورود"
                    variant="outlined"
                    value={password}
                    type="password"
                  />
                  <button
                    onClick={handlePasswordChangeClickOpen}
                    className="text-blue-700"
                  >
                    تغییر رمز
                  </button>
                  <Dialog
                    dir="rtl"
                    open={passwordChangeOpen}
                    onClose={handleClose}
                    PaperProps={{
                      component: 'form',
                      onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(
                          (formData as any).entries()
                        );
                        const newPassword = formJson.password;
                        const oldPasswordUserEntered = formJson.oldpassword;
                        if (oldPasswordUserEntered === password) {
                          setPassword(newPassword);
                          console.log('new password was set:', newPassword);
                        } else {
                          console.log('the old password was not correct');
                        }

                        console.log(
                          'old one user entered:',
                          oldPasswordUserEntered,
                          'new one:',
                          newPassword
                        );
                        handleClose();
                      },
                    }}
                  >
                    <DialogTitle>تغییر رمز</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        رمز جدید خود را وارد کنید
                      </DialogContentText>
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="oldpassword"
                        name="oldpassword"
                        label="رمز قبلی"
                        type="password"
                        fullWidth
                        variant="standard"
                      />
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        label="رمز جدید"
                        type="password"
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button type="submit">تغییر اسم</Button>
                      <Button onClick={handleClose}>لغو</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </CacheProvider>

      <Footer />
    </div>
  );
}

export default UserSetting;
