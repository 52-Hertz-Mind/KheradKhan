import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DashboardNavbar from '../components/DashboardNavbar.tsx';
import { Slider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import Footer from '../components/Footer.tsx';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const books = useSelector((state: RootState) => state.books.books);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const dailyHighlightMarks = [
    {
      value: 1,
      label: '۱',
    },
    {
      value: 3,
      label: '۳',
    },
    {
      value: 8,
      label: '۸',
    },
    {
      value: 10,
      label: '۱۰',
    },
    {
      value: 20,
      label: '۲۰',
    },
  ];
  const recencyMarks = [
    {
      value: 1,
      label: 'قدیمی تر',
    },

    {
      value: 15,
      label: 'جدید تر',
    },
  ];

  const booksRepeatMark = [
    {
      value: 1,
      label: 'هرگز',
    },

    {
      value: 15,
      label: 'بیشتر',
    },
  ];
  return (
    <div>
      <DashboardNavbar />
      <div className="px-96 py-20" dir="rtl">
        <h1 className="text-5xl mb-3">تنظیمات مرور</h1>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="تنظیمات مرور" {...a11yProps(0)} />
              <Tab label="تنظیمات تکرار" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="flex flex-col border px-20 py-12 gap-5">
              <p>تعداد و تکرار هایلایت های روزانه خودتان را تنظیم کنید</p>
              <Box sx={{ width: 300 }}>
                <Typography id="Highlights per day" gutterBottom>
                  تعداد هایلایت روزانه
                </Typography>
                <Slider
                  aria-label="Highlights per day"
                  defaultValue={10}
                  getAriaValueText={valuetext}
                  step={1}
                  valueLabelDisplay="auto"
                  marks={dailyHighlightMarks}
                  min={1}
                  max={20}
                />
              </Box>
              <Box sx={{ width: 300 }}>
                <Typography id="Highlights per day" gutterBottom>
                  نمایش هایلایت جدید یا قدیم
                </Typography>
                <Slider
                  aria-label="Highlights per day"
                  defaultValue={5}
                  getAriaValueText={valuetext}
                  step={2}
                  marks={recencyMarks}
                  min={1}
                  max={15}
                />
              </Box>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="flex flex-col">
              {books.map((book) => (
                <div
                  className="flex items-center justify-between border p-10"
                  key={book.id}
                >
                  <p className="w-1/3 text-right">{book.bookName}</p>
                  <p className="w-1/6 text-center">
                    {book.highlightText.length}
                  </p>
                  <Box sx={{ width: 300 }} className="w-1/2">
                    <Slider
                      aria-label="Highlights per day"
                      defaultValue={5}
                      getAriaValueText={valuetext}
                      step={2}
                      marks={booksRepeatMark}
                      min={1}
                      max={15}
                    />
                  </Box>
                </div>
              ))}
            </div>
          </CustomTabPanel>
        </Box>
      </div>
      <Footer />
    </div>
  );
}
