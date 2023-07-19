import localFont from 'next/font/local';

const uncutSans = localFont({
  src: [
    {
      path: './Webfonts/UncutSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Webfonts/UncutSans-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },

    {
      path: './Webfonts/UncutSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Webfonts/UncutSans-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },

    {
      path: './Webfonts/UncutSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Webfonts/UncutSans-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },

    {
      path: './Webfonts/UncutSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Webfonts/UncutSans-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },

    {
      path: './Webfonts/UncutSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Webfonts/UncutSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

export default uncutSans;
