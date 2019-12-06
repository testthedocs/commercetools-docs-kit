import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import SpacingsInline from '@commercetools-uikit/spacings-inline';
import SpacingsStack from '@commercetools-uikit/spacings-stack';
import IconButton from '@commercetools-uikit/icon-button';
import createStyledIcon from '../../utils/create-styled-icon';
import UnstyledStackedLinesIndentedIcon from '../../icons/stacked-lines-indented-icon.svg';
import { colors, dimensions, typography } from '../../design-system';
import PageNavigation from './page-navigation';

const StackedLinesIndentedIcon = createStyledIcon(
  UnstyledStackedLinesIndentedIcon
);

const slideInAnimation = keyframes`
  from { margin-right: -100%; }
  to { margin-right: 0; }
`;
const ContainerOverlay = styled.div`
  ${props => {
    if (props.isMenuOpen) {
      return css`
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 20;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: flex-end;
      `;
    }
    return css``;
  }}

  display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
  overflow: auto;

  @media screen and (${dimensions.viewports.largeTablet}) {
    display: none;
  }
`;
const SlidingContainer = styled.div`
  background-color: ${colors.light.surfacePrimary};
  animation: ${slideInAnimation} 0.5s ease-out alternate;
  width: ${dimensions.widths.pageNavigation};
  height: 100%;
  overflow: auto;
`;
const GridContainer = styled.div`
  display: none;
  border-left: 1px solid ${colors.light.borderPrimary};

  @media screen and (${dimensions.viewports.largeTablet}) {
    display: block;
    grid-area: page-navigation;
    width: ${dimensions.widths.pageNavigation};
  }
  @media screen and (${dimensions.viewports.laptop}) {
    width: ${dimensions.widths.pageNavigationSmall};
  }
  @media screen and (${dimensions.viewports.desktop}) {
    width: ${dimensions.widths.pageNavigation};
  }
`;
const StickyContainer = styled.div`
  position: sticky;
  top: ${dimensions.spacings.xxl};
  margin: 0 0 ${dimensions.spacings.s};
`;
const PageTitleLink = styled.a`
  color: ${colors.light.textSecondary};
  font-size: ${typography.fontSizes.extraSmall};
  padding: ${dimensions.spacings.s} ${dimensions.spacings.m} 0;
  border-left: 1px solid transparent;
  text-decoration: none;
  :hover {
    color: ${colors.light.linkNavigation};
    svg {
      * {
        fill: ${colors.light.linkNavigation};
      }
    }
  }
  :hover,
  :active {
    outline-width: 0;
  }
`;
const ToggleMenuButton = styled.div`
  position: fixed;
  top: calc(${dimensions.heights.header} + ${dimensions.spacings.m});
  right: ${dimensions.spacings.m};
  cursor: pointer;

  @media screen and (${dimensions.viewports.largeTablet}) {
    display: none;
  }
`;

const LayoutPageNavigation = props => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  if (!props.tableOfContents) return null;
  if (
    !props.tableOfContents.items ||
    (props.tableOfContents.items && props.tableOfContents.items.length === 0)
  )
    return null;

  const navigationContainer = (
    <SpacingsStack scale="m">
      <PageTitleLink href="#anchor-page-top">
        <SpacingsInline scale="s" alignItems="center">
          <div>
            <StackedLinesIndentedIcon color="textSecondary" />
          </div>
          <div>{props.pageTitle}</div>
        </SpacingsInline>
      </PageTitleLink>
      <PageNavigation tableOfContents={props.tableOfContents} />
    </SpacingsStack>
  );
  return (
    <>
      <ToggleMenuButton>
        <IconButton
          icon={<StackedLinesIndentedIcon theme="textSecondary" />}
          label="Open page navigation"
          onClick={() => {
            setMenuOpen(true);
          }}
        />
      </ToggleMenuButton>
      <ContainerOverlay
        isMenuOpen={isMenuOpen}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <SlidingContainer>{navigationContainer}</SlidingContainer>
      </ContainerOverlay>

      <GridContainer role="navigation" aria-label="Page navigation">
        <StickyContainer>{navigationContainer}</StickyContainer>
      </GridContainer>
    </>
  );
};
LayoutPageNavigation.displayName = 'LayoutPageNavigation';
LayoutPageNavigation.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  tableOfContents: PropTypes.shape({
    items: PropTypes.array,
  }),
};

export default LayoutPageNavigation;
