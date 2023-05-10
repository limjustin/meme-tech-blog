import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './style.scss';

function PostNavigator({ prevPost, nextPost }) {
  const prevThumbnailSrc = getImage(prevPost.thumbnail);
  const nextThumbnailSrc = getImage(nextPost.thumbnail);
  return (
    <div className="post-navigator-wrapper">
      <div className="post-navigator">
        <div className="post-navigator-card-wrapper">
          {nextPost && (
            <Link className="post-card prev" key={nextPost.id} to={nextPost.slug}>
              <div className="direction">이전 글</div>
              <GatsbyImage className="thumbnail" image={prevThumbnailSrc} alt="thumbnail" />
              <div className="title">{nextPost.title}</div>
            </Link>
          )}
        </div>
        <div className="post-navigator-card-wrapper">
          {prevPost && (
            <Link className="post-card next" key={prevPost.id} to={prevPost.slug}>
              <div className="direction">다음 글</div>
              <GatsbyImage className="thumbnail" image={nextThumbnailSrc} alt="thumbnail" />
              <div className="title">{prevPost.title}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostNavigator;
