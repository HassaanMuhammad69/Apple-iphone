import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { watchImg, rightImg } from '../utils'
import VideoCarosel from './VideoCarosel'

const Highlights = () => {

  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0
    })
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25
    })
  }, [])

  return (
    <section id='highlights'
      className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>Get the highlight</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt='watch' className='ml-2' />
            </p>

            <p className='link'>
              Watch the event
              <img src={rightImg} alt='right' className='ml-2' />
            </p>
          </div>

        </div>

        <VideoCarosel />

      </div>

    </section>
  )
}

export default Highlights