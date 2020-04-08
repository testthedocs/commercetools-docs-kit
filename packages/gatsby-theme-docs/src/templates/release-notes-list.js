import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import SpacingsStack from '@commercetools-uikit/spacings-stack';
import { Markdown } from '@commercetools-docs/ui-kit';
import LayoutReleaseNote from '../layouts/internals/layout-release-note';
import LayoutReleaseNotesList from '../layouts/release-notes-list';
import { SEO, ThemeProvider } from '../components';
import markdownComponents from '../markdown-components';

const releaseNoteMarkdownComponents = {
  ...markdownComponents,
  // NOTE: release notes content can only have headings starting from h4.
  h1: Markdown.withAnchorLink(Markdown.H4),
  h2: Markdown.withAnchorLink(Markdown.H5),
  h3: Markdown.withAnchorLink(Markdown.H6),
  h4: Markdown.withAnchorLink(Markdown.H6),
};

const ReleaseNotesListTemplate = (props) => (
  <ThemeProvider>
    <LayoutReleaseNotesList
      pageContext={props.pageContext}
      pageData={props.data.contentPage}
    >
      <Markdown.TypographyPage>
        <SEO
          title={props.data.contentPage.title}
          excludeFromSearchIndex={props.data.contentPage.excludeFromSearchIndex}
        />
        <MDXProvider components={markdownComponents}>
          <div>
            <MDXRenderer>{props.data.contentPage.body}</MDXRenderer>
          </div>
        </MDXProvider>
        <div>
          <MDXProvider components={releaseNoteMarkdownComponents}>
            <SpacingsStack>
              {props.data.allReleaseNotePage &&
                props.data.allReleaseNotePage.nodes &&
                props.data.allReleaseNotePage.nodes.map((releaseNote) => (
                  <LayoutReleaseNote
                    key={releaseNote.slug}
                    title={releaseNote.title}
                    date={releaseNote.date}
                    body={releaseNote.body}
                  />
                ))}
            </SpacingsStack>
          </MDXProvider>
        </div>
      </Markdown.TypographyPage>
    </LayoutReleaseNotesList>
  </ThemeProvider>
);

ReleaseNotesListTemplate.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    hasReleaseNotes: PropTypes.bool.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    contentPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      beta: PropTypes.bool.isRequired,
      isGlobalBeta: PropTypes.bool.isRequired,
      excludeFromSearchIndex: PropTypes.bool.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
    allReleaseNotePage: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
          body: PropTypes.string.isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
};

export default ReleaseNotesListTemplate;

export const query = graphql`
  query QueryReleaseOverviewPage($slug: String!) {
    contentPage(slug: { eq: $slug }) {
      title
      beta
      isGlobalBeta
      excludeFromSearchIndex
      body
    }
    allReleaseNotePage(sort: { order: DESC, fields: date }) {
      nodes {
        slug
        title
        date(formatString: "YYYY-MM-DD")
        description
        type
        topics
        body
      }
    }
  }
`;