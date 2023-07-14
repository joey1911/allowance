import {
  Navbar,
  MenuItem,
} from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';
import Link from 'next/link';

const companyLinks = [
  {
    'link': '/why',
    'title': 'Why Allowance',
  },
  {
    'link': '/resources',
    'title': 'Resources',
  },
];

const CompanyMenuItems = (
  <>
    {companyLinks.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <MenuItem key={`mainNavbarItem-${index}`} linkItem={<Link href={item.link}>{item.title}</Link>} />
    ))}
  </>
);

const SecondMenuItems = (
  <>
    <MenuItem linkItem={<Link href="/pricing">Pricing</Link>} />
    <MenuItem linkItem={<Link href="/signup">Sign up</Link>} />
  </>
);

export default function MainNavbar() {
  return (
    <div className={flex({ direction: 'row', align: 'stretch', justify: 'start', basis: '100%' })}>
      <Navbar menuItems={CompanyMenuItems} menuPlacement="left" menuAlignment="horizontal" />
      <Navbar menuItems={SecondMenuItems} menuPlacement="right" menuAlignment="horizontal" />
    </div>
  )
};