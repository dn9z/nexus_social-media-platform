import React from 'react'
import MobileFeed from '../Feed/MobileFeed'
import MobileGroups from "../MobileGroups"
import TopMenu from '../TopMenu'

const MobileMain: React.FC = () => {
  return (
    <>
        <TopMenu/>
        <MobileGroups/>
        <MobileFeed/>
    </>
  )
}

export default MobileMain