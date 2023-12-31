'use client'

import Link from 'next/link';
import {
  Navbar,
  MenuItem,
} from '@allowance/bash-ui';
import { useAuth } from '@/providers';

const companyLinks = [
  {
    'link': '/dashboard',
    'title': 'Dashboard',
  },
  {
    'link': '/dashboard/account',
    'title': 'Account Settings',
  },
  {
    'link': '/dashboard/profile',
    'title': 'Profile',
  },
];

const CompanyMenuItems = (
  <>
    {companyLinks.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <MenuItem key={`dashboardNavbarItem-${index}`} linkItem={<Link href={item.link}>{item.title}</Link>} />
    ))}
  </>
);

export default function DashboardNavbar() {
  const { user } = useAuth();

  console.log(user);

  return (
    <Navbar menuItems={CompanyMenuItems} menuPlacement="left" menuAlignment="vertical" />
  )
};