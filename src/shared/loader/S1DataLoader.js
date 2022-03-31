import React from 'react'
import ContentLoader from 'react-content-loader'

const S1DataLoader = props => {
  return (
    <ContentLoader
    speed={2}
    width={400}
    height={150}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
      {...props}
    >
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" /> 
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" /> 
    <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  )
}

// DataLoader.metadata = {
//   name: '', // My name
//   github: '__REPLACE_ME__', // Github username
//   description: '__REPLACE_ME__', // Little tagline
//   filename: '__REPLACE_ME__', // filename of your loader
// }

export default S1DataLoader;