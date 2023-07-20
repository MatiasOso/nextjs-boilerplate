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
  description: "Categorías",
  body: "Category 1, Category 2, Category 3",
}

export default function Sidebar() {
  const isOpen = useSelector(getIsOpenMenu);
  const dispatch = useDispatch();
  const cancelButtonRef = useRef();
  return (
    <Dialog as="div" className="bg-marino text-crema fixed left-0 top-0 bottom-0 w-64 z-10" open={isOpen} onClose={() => dispatch(toggleMenu())}>
      <Dialog.Panel className="bg-marino">
        <Dialog.Title className="bg-marino">{SidebarText.title} <XMarkIcon className="w-6" onClick={() => dispatch(toggleMenu())}/></Dialog.Title>
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
