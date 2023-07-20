import { Bars3 } from '../Icons/bars'
import { Popover } from '@headlessui/react'
const Menu = () => {
  return (


    <Popover className="relative">
      <Popover.Button>
        <div className='flex flex-col centered-middle m-2'>
          <div className='centered-middle p-2 rounded-full bg-marino hover:bg-pink-100'>
            <Bars3 />
          </div>
          <span>Menu</span>
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2 bg-blue-100">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img src="/assets/logo.svg" alt="" />
      </Popover.Panel>
    </Popover>

  )
}

export default Menu