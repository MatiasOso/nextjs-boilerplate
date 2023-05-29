import Logo from '@/components/Logo'
const styles = {
  header: 'flex flex-row',
  logo: 'w-1/8 bg-green-200',
  menu: 'w-1/8 bg-blue-200',
  search: 'w-full bg-red-100',
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
            MENU
          </div>
          <div className={styles.search}>
            SEARCH
          </div>
          <div className={styles.buttons}>
            BUTTONS
          </div>
        </div>
    </header>
  )
}

export default index