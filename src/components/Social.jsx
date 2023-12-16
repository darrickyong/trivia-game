import React from 'react';
import { FaLinkedin, FaGithubAlt, FaAngellist } from "react-icons/fa";

export default function Social() {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/darrickyong/">
        <FaLinkedin className="linkedin" />
      </a>

      <a href="https://github.com/darrickyong">
        <FaGithubAlt className="github" />
      </a>
{/* 
      <a href="https://angel.co/u/darrick-yong">
        <FaAngellist className="angel" />
      </a> */}
    </div>
  )
}