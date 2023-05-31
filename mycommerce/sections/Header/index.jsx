import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Search from '@/components/Search'
const styles = {
  header: 'flex flex-row',
  logo: 'w-1/8 bg-green-200',
  menu: 'w-1/8 bg-blue-200 centered-middle',
  search: 'w-full bg-red-100 items-center align-center',
  buttons: 'w-1/5 bg-yellow-200',
}

const index = () => {
  return (
    <header>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.menu}>
            <Menu />
          </div>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.buttons}>
            BUTTONS
          </div>
        </div>
    </header>
  )
}

export default index