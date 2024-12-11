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
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('Mamad');
  const handleNameChangeClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                    open={open}
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
                    value={'1234'}
                    type="password"
                  />
                  <button className="text-blue-700">تغییر رمز</button>
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
