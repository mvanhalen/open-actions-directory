'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import {
  Card,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


type Action = {
  name: string
  description: string
  type: string
  link?: string
  builder?: string
  bounty?: string
  builder_profile?: string,
  width?: number,
  hero: string,
  tag: string
}

export function ActionCard({ action } : { action: Action }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  if (!loaded) return null
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <div className="
          mt-[5px]
          mb-[10px]
          md:mb-[40px]
          w-full
          transition
          ">
          <Card className="
            bg-[#fbfaf9] rounded-[8px] flex
            justify-center content-start
            h-[192px]
            hover:bg-[#f1eeee]
            [&>*:nth-child(1)]:hover:scale-110
            overflow-hidden	transition
            border md:border-0 border-[#EEEDED]
          ">
          <Image
            src={`/svg/${action.hero}`}
            width={action.width || 264}
            height={404}
            alt={action.name}
            className='transition'
          />
          </Card>
          <div>
            <p
              className='
              text-[#343433]
              font-[500] mt-5'
            >{action.name}</p>
            <p
              className='
              font-[400]
              text-[#848281] text-sm mt-2
              '
            >{action.description}</p>
          </div>
        </div>
      </DialogTrigger>
      {/* Active Dialog */}
      <DialogContent
        className='
        border-0
        w-full
        h-full sm:h-auto
        md:min-w-[480px]
        lg:min-w-[673px]
        p-0
        rounded-0 sm:rounded-lg
        pt-24 sm:pt-0
        '
      >
        <div
        className='
        bg-[#fbfaf9]
        flex justify-center
        rounded-t-lg
        mx-6 sm:mx-0
        '>
          <Image
            src={`/svg/${action.hero}`}
            width={490}
            height={500}
            alt={action.name}
          />
        </div>
        <div
          className='pt-6  pb-8 px-8 pt-2 bg-white rounded-b-lg'
        >
          <div className='flex items-center'>
            <p
              className='font-semibold text-[19px]'
            >{action.name}</p>
            {
              action.type === 'idea' && (
                <Image
                  src="/svg/idea-badge.svg"
                  width={40}
                  height={20}
                  alt='Idea'
                  className='ml-2'
                />
              )
            }
          </div>
          <p
            className='text-[#848281] text-md mt-1 font-light'
          >
            {action.tag}
          </p>
          <p
            className='mt-4 text-[#848281] font-light'
          >
            {action['long-description']}
          </p>
          <div className='mt-10 flex'>
            <Link
              href="https://docs.lens.xyz/docs/creating-a-publication-action"
              target="_blank"
              rel="noopener noreferrer"
              className='
              bg-[#343433]
              rounded-full text-white px-[16px] py-[11px]
              text-sm
              flex items-center
              '
            >
              <p>View Docs</p>
              <Image
                src={'/svg/arrow-white.svg'}
                alt="Arrow"
                height={13}
                width={13}
                className='ml-1'
              />
            </Link>
            <Link
              href="https://docs.lens.xyz/docs/creating-a-publication-action"
              target="_blank"
              rel="noopener noreferrer"
              className='
                ml-3
                bg-[#F0F0F0]
                rounded-full text-black px-[16px] py-[11px]
                text-sm
                flex items-center
                hover:bg-[#D9D9D9]
              '
            >
              <p>Submit Post</p>
              <Image
                src={'/svg/arrow.svg'}
                alt="Arrow"
                height={13}
                width={13}
                className='ml-1'
              />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}