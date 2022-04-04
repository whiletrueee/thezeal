import React from 'react'
import ContentLoader from 'react-content-loader'

const S3DataLoader = props => {
  return (
    <ContentLoader
    speed={2}
    width={400}
    height={150}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
      {...props}
    >
    <rect x="91" y="7" rx="0" ry="0" width="103" height="14" /> 
    <rect x="230" y="13" rx="0" ry="0" width="2" height="2" /> 
    <rect x="17" y="31" rx="0" ry="0" width="253" height="6" /> 
    <rect x="17" y="48" rx="0" ry="0" width="253" height="6" /> 
    <rect x="16" y="67" rx="0" ry="0" width="253" height="6" /> 
    <rect x="17" y="86" rx="0" ry="0" width="253" height="6" /> 
    <rect x="16" y="106" rx="0" ry="0" width="253" height="6" />
    </ContentLoader>
  )
}

// DataLoader.metadata = {
//   name: '', // My name
//   github: '__REPLACE_ME__', // Github username
//   description: '__REPLACE_ME__', // Little tagline
//   filename: '__REPLACE_ME__', // filename of your loader
// }

export default S3DataLoader;