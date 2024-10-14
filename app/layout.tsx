import './globals.css';

// eslint-disable-next-line import/no-unresolved
import { GeistSans } from 'geist/font/sans';
import LoadTimeTracker from '@/components/LoadTimeTracker';
import ProjectInfo from '@/components/ProjectInfo';
import Search from '@/components/Search';
import StatusTabs from '@/components/StatusTabs';
import { getProject } from '@/data/services/project';
import { getTaskSummary } from '@/data/services/task';
import { cn } from '@/utils/cn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Next.js 15 filtering list example using modern React features',
  title: 'Next.js 15 Filter List',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const project = await getProject();
  const taskSummary = await getTaskSummary();

  return (
    <html lang="en">
      <body className={cn(GeistSans.className, 'flex flex-col px-4 py-16 sm:px-16 xl:px-48 2xl:px-96')}>
        <div className="group flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1>Project information</h1>
            <ProjectInfo project={project} />
          </div>
          <div className="flex flex-col gap-6">
            <h2>Task list</h2>
            <StatusTabs taskSummary={taskSummary} />
          </div>
          <div className="h-[1px] bg-primary" />
          <Search />
          {children}
        </div>
        <LoadTimeTracker />
      </body>
    </html>
  );
}
