'use client';

import { Button } from '@/components/ui/button';
import { DarkModeContext } from '@/context/DarkMode';
import { getCalApi } from '@calcom/embed-react';
import { useContext, useEffect } from 'react';

export default function CalComButton() {
  const darkMode = useContext(DarkModeContext);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();

      cal('ui', {
        styles: {
          branding: {
            brandColor: darkMode && darkMode.darkMode ? '#000000' : '#FFFFFF',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, [darkMode, darkMode?.darkMode]);

  return (
    <Button
      data-cal-link="durrrian/initial"
      data-cal-config='{"layout":"month_view"}'
    >
      Book a meeting with us
    </Button>
  );
}
