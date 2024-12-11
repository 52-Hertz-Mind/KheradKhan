import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DashboardNavbar from '../components/DashboardNavbar.tsx';
import { Slider, Typography } from '@mui/material';

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
      value: 15,
      label: '۱۵',
    },
  ];

  return (
    <div>
      <DashboardNavbar />
      <div className="px-96 py-20" dir="rtl">
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
                  defaultValue={5}
                  getAriaValueText={valuetext}
                  step={1}
                  valueLabelDisplay="auto"
                  marks={dailyHighlightMarks}
                  min={1}
                  max={15}
                />
              </Box>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
