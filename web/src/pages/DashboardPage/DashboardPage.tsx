import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const DashboardPage = () => {
  return (
    <MainLayout headerClassNames="bg-custom-gradient bg-gradient-to-l">
      <MetaTags title="Dashboard" description="Dashboard page" />
    </MainLayout>
  )
}

export default DashboardPage
