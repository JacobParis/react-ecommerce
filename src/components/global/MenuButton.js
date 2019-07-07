import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

function mapStateToProps(state) {
  return state;
}

function MenuButton(props) {
  const Button = styled.button`
    background-color: transparent;
    border: 0;
    color: #2d2d40;
    display: block;
    float: left;
    height: 1.875rem;
    left: 1.875rem;
    margin: 0;
    min-height: 1.875rem;
    outline: 0;
    padding: 0;
    position: fixed;
    -webkit-tap-highlight-color: transparent;
    top: 1.875rem;
    -webkit-touch-callout: none;
    user-select: none;
    width: 1.875rem;
    z-index: 10000;
  `;

  return (
    <Button aria-expanded="false" aria-label="Open menu" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g className="hamburger-menu">
          <rect
            className="top"
            y="10"
            width="24"
            height="2"
            fill="currentColor"
          />
          <rect
            className="middle"
            y="2"
            width="24"
            height="2"
            fill="currentColor"
          />
          <rect
            className="bottom"
            y="18"
            width="24"
            height="2"
            fill="currentColor"
          />
        </g>
      </svg>
    </Button>
  );
}

export default connect(mapStateToProps)(MenuButton);
