import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../App.jsx';

export const StatStatus = lazy(() => import('../pages/stat_status.jsx'));
export const ExpJobs = lazy(() => import('../pages/exp_jobs.jsx'));
export const Maps = lazy(() => import('../pages/map.jsx'));
export const ColorSettings = lazy(() => import('../pages/colors.jsx'));
export const StartupVideo = lazy(() => import('../pages/startup_video.jsx'));
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
        { path: 'exp-jobs-section', element: <ExpJobs /> },
        { path: 'map-section', element: <Maps /> },
        { path: 'color-section', element: <ColorSettings /> },
      ],
    },
    {
      path: '/',
      element: <StartupVideo />,
    },
  ]);

  return routes;
}
