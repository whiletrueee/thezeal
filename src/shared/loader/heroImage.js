import React from 'react'
import ContentLoader from 'react-content-loader'

const HeroImageLoader = props => (
  <ContentLoader
    width={600}
    height={350}
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="37" y="33" rx="0" ry="0" width="506" height="242" /> 
    <rect x="439" y="283" rx="0" ry="0" width="103" height="14" /> 
    <rect x="44" y="316" rx="0" ry="0" width="498" height="22" />
  </ContentLoader>
)

// DoorDashFavorite.metadata = {
//   name: 'Nic Bovee', // My name
//   github: 'ghettifish', // Github username
//   description: 'A simple favorite from the DoorDash local favorites.', // Little tagline
//   filename: 'DoorDashFavorite', // filename of your loader
// }

export default HeroImageLoader;