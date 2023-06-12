'use client';
import { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { getChanged, getIsOpen } from '@/store/features/cartSlice';
import { toggleCart } from '@/store/features/cartSlice';
import { useRef } from 'react';
import { getIsOpenMenu, toggleMenu } from '@/store/features/homeSlice';
const category = [
  {
    id: 1,
    name: 'Category 1',
    href: '#',
  },
  {
    id: 2,
    name: 'Category 2',
    href: '#',
  },
]
const SidebarText = {
  title: "HELLO!",
  description: "This is a dialog description",
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis perspiciatis vel minus sequi pariatur qui, eaque, veniam, incidunt quaerat nobis eum non aliquam itaque rem quos quas id facere?",
}

export default function Sidebar() {
  const isOpen = useSelector(getIsOpenMenu);
  const dispatch = useDispatch();
  const cancelButtonRef = useRef();
  return (
    <Dialog as="div" className="bg-red-50 fixed left-0 top-0 bottom-0 w-64 z-10" open={isOpen} onClose={() => dispatch(toggleMenu())}>
      <Dialog.Panel className="bg-blue-200">
        <Dialog.Title className="bg-green-30">{SidebarText.title} <XMarkIcon className="w-6" onClick={() => dispatch(toggleMenu())}/></Dialog.Title>
        <Dialog.Description>
          {SidebarText.description}
        </Dialog.Description>

        <p>
          {SidebarText.body}
        </p>

      </Dialog.Panel>
      <button ref={cancelButtonRef} onClick={() => dispatch(toggleMenu())}>Deactivate</button>
      <button ref={cancelButtonRef} onClick={() => dispatch(toggleMenu())}>Cancel</button>
    </Dialog>
  )
}
