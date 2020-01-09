import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ContentNotifications } from '@commercetools-docs/ui-kit';
import { useReadResourceByResourcePath } from '../../../hooks/use-api-resources';
import Method from './method';

const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const MethodContainer = styled.div`
  margin: 1rem 0;
`;

const Resource = ({ apiKey, resource }) => {
  const resourceObj = useReadResourceByResourcePath(apiKey, resource);

  if (!resourceObj) {
    return (
      <ContentNotifications.Error>{`Resource '${resource}' not found in API`}</ContentNotifications.Error>
    );
  }

  return (
    <ResourceContainer>
      {resourceObj.post ? (
        <MethodContainer>
          <Method
            apiKey={apiKey}
            url={resourceObj.resourcePathUri}
            resourceUriParameters={resourceObj.uriParameters}
            method={resourceObj.post}
            methodType="post"
          />
        </MethodContainer>
      ) : null}

      {resourceObj.get ? (
        <MethodContainer>
          <Method
            apiKey={apiKey}
            url={resourceObj.resourcePathUri}
            resourceUriParameters={resourceObj.uriParameters}
            method={resourceObj.get}
            methodType="get"
          />
        </MethodContainer>
      ) : null}

      {resourceObj.delete ? (
        <MethodContainer>
          <Method
            apiKey={apiKey}
            url={resourceObj.resourcePathUri}
            resourceUriParameters={resourceObj.uriParameters}
            method={resourceObj.delete}
            methodType="delete"
          />
        </MethodContainer>
      ) : null}
    </ResourceContainer>
  );
};

Resource.propTypes = {
  apiKey: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
};

export default Resource;
