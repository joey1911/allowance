import Link from 'next/link';
import {
  Navbar,
  MenuItem,
} from '@allowance/bash-ui';

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
      <MenuItem key={`dashboardNavbarItem-${index}`} linkItem={<Link href={item.link}>{item.title}</Link>} />
    ))}
  </>
);

const DashboardNavbar = () => {
  return (
    <Navbar menuItems={CompanyMenuItems} menuPlacement="left" menuAlignment="vertical" />
  );
};

export default DashboardNavbar;