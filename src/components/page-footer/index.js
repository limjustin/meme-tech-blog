import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp; &nbsp;powered by &nbsp;<a href="https://github.com/S-jooyoung">Jooyoung Shin</a>
      </p>
    </footer>
  );
}

export default PageFooter;
