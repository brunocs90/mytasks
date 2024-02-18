'use client';
import { useGlobalState } from '@/app/context/globalProvider';
import { logout } from '@/app/utils/Icons';
import menu from '@/app/utils/menu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { SidebarStyled } from './styles';

function Sidebar() {
  const { theme } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <SidebarStyled theme={theme}>
        <div className='profile'>
          <div className='profile-overlay'></div>
          <div className='image'>
            <Image width={70} height={70} src='/avatar1.png' alt='profile' />
          </div>
          <h1 className='capitalize'>
            <span>Sin</span>
            <span>Rostro</span>
          </h1>
        </div>
        <ul className='nav-items'>
          {menu.map((item) => {
            const link = item.link;
            return (
              <li
                key={item.id}
                className={`nav-item ${pathname === link ? 'active' : ''}`}
                onClick={() => {
                  handleClick(link);
                }}
              >
                {item.icon}
                <Link href={link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className='sign-out relative m-6'>
          <Button
            name={'Sign Out'}
            type={'submit'}
            padding={'0.4rem 0.8rem'}
            borderRad={'0.8rem'}
            fw={'500'}
            fs={'1.2rem'}
            icon={logout}
            // click={() => {
            //   signOut(() => router.push('/signin'));
            // }}
          />
        </div>
      </SidebarStyled>
    </>
  );
}

export default Sidebar;
