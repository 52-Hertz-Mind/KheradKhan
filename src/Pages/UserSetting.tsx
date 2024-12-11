import DashboardNavbar from '../components/DashboardNavbar.tsx';
import Footer from '../components/Footer.tsx';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, TextField, ThemeProvider } from '@mui/material';

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
                    value="Mamad"
                  />
                  <button className="text-blue-700">تغییر اسم</button>
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
