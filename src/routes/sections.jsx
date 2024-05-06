import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from '../App.jsx';

export const AlarmSettings = lazy(() => import('../pages/alarmSetting.jsx'));
export const UpcomingAlarm = lazy(() => import('../pages/upcomingAlarm.jsx'));
export const Special = lazy(() => import('../pages/special.jsx'));
export const ScreenSize = lazy(() => import('../pages/screenSize.jsx'));
export const Perks = lazy(() => import('../pages/perks.jsx'));
export const Settings = lazy(() => import('../pages/settings.jsx'));
export const Connections = lazy(() => import('../pages/connection.jsx'));
export const GoogleConnections = lazy(() => import('../pages/googleConnection.jsx'));
export const WatchMode = lazy(() => import('../pages/watchMode.jsx'));
export const StatStatus = lazy(() => import('../pages/stat_status.jsx'));
export const ExpJobs = lazy(() => import('../pages/exp_jobs.jsx'));
export const Maps = lazy(() => import('../pages/map.jsx'));
export const ColorSettings = lazy(() => import('../pages/colors.jsx'));
export const StartupVideo = lazy(() => import('../pages/startup_video.jsx'));
export const Radio = lazy(() => import('../pages/radio.jsx'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '*',
      element: (
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
      ),
      children: [
        { path: 'stat-status', element: <StatStatus /> },
        { path: 'special', element: <Special/> },
        { path: 'perks', element: <Perks/> },
        { path: 'watch-mode', element: <WatchMode/> },
        { path: 'exp-jobs-section', element: <ExpJobs /> },
        { path: 'map-section', element: <Maps /> },
        { path: 'radio', element: <Radio /> },
        { path: 'color-section', element: <ColorSettings /> },
      ],
    },
    {
      path: '/',
      element: <StartupVideo />,
    },
    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/screen-size',
      element: <ScreenSize/>,
    },
    {
      path: '/alarm-settings',
      element: <AlarmSettings/>,
    },
    {
      path: '/connection',
      element: <Connections />,
    },
    {
      path: '/google-connection',
      element: <GoogleConnections/>,
    },
    {
      path: '/upcoming-alarm',
      element: <UpcomingAlarm/>,
    },
  ]);

  return routes;
}
