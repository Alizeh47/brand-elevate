'use client'

import { BaseLayout } from '@/components/layout/BaseLayout'

function ContentOverview() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Content Overview</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Posts</span>
          <span className="font-medium">0</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Scheduled</span>
          <span className="font-medium">0</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Published</span>
          <span className="font-medium">0</span>
        </div>
      </div>
    </div>
  )
}

function UpcomingSchedule() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Schedule</h2>
      <div className="text-gray-600 text-center py-8">
        No upcoming posts scheduled
      </div>
    </div>
  )
}

function Analytics() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Analytics</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Views</span>
          <span className="font-medium">0</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Engagement Rate</span>
          <span className="font-medium">0%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Top Platform</span>
          <span className="font-medium">-</span>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <BaseLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to your content management dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContentOverview />
        <UpcomingSchedule />
        <Analytics />
      </div>
    </BaseLayout>
  )
} 