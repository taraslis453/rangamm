import React from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-css'
import InfiniteScroll from 'react-infinite-scroll-component'
import classes from './index.module.css'
import {Container, Typography, Box, Preloader} from '../../atoms/'

export const pathParser = (obj, path) => {
  return path.split('.').reduce((accumulator, currentValue) => {
    if (accumulator === null) {
      return obj[currentValue]
    }
    return accumulator[currentValue]
  }, null)
}

export const GridWithPhotos = ({items, totalItems, urlPath, altPath, loadMore}) => {
  let photos = items.map((item, index) => {
    return (
      <div key={index}>
        <img src={pathParser(item, urlPath)} alt={pathParser(item, altPath)} />
      </div>
    )
  })
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  }
  return (
    <Container px={[0, 3]}>
      <InfiniteScroll
        dataLength={items.length}
        hasMore={totalItems === items.length ? false : true}
        next={loadMore}
        loader={
          <Box textAlign='center'>
            <Preloader />
          </Box>
        }
        endMessage={
          <Typography variant='p' as='p' textAlign='center'>
            Yay! You have seen it all
          </Typography>
        }>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={classes.myMasonryGrid}
          columnClassName={classes.myMasonryGrid_column}>
          {photos}
        </Masonry>
      </InfiniteScroll>
    </Container>
  )
}

GridWithPhotos.propTypes = {
  items: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  altPath: PropTypes.string,
  loadMore: PropTypes.func.isRequired,
}
