import Link from 'next/link'
import React from 'react'

function NavigationBar() {
  return (
    <div>
      <Link href='/'><a>Getting Started</a></Link><br/>
      <Link href='/subscriptions'><a>Subscriptions</a></Link><br/>
      <Link href='/selling-plans'><a>Subscription Plans</a></Link><br/>
      <Link href='/install'><a>Installation</a></Link><br/>
      <Link href='/settings'><a>Settings</a></Link><br/>
    </div>
  )
}

export default NavigationBar
