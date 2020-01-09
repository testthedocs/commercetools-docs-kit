import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@commercetools-docs/gatsby-theme-docs';
import { Markdown } from '@commercetools-docs/ui-kit';
import { useTypeLocations } from '../../../../hooks/use-type-locations';
import generateTypeDisplayText from '../../../../utils/generate-type-display-text';

const Type = ({ apiKey, property, dataTestId }) => {
  const typeLocations = useTypeLocations();
  const originalTypeToLinkTo =
    property.type === 'array' && property.items
      ? property.items.type
      : property.type;

  const typeLocation = typeLocations
    ? typeLocations[`${apiKey}__${originalTypeToLinkTo}`]
    : undefined;

  const originalTypeLocation = typeLocation ? typeLocation.urlAnchorTag : '';
  const typeDisplayText = generateTypeDisplayText(property);
  return (
    <div data-testid={dataTestId ? `${dataTestId}` : null}>
      <div>
        {originalTypeLocation ? (
          <Link href={originalTypeLocation}>{typeDisplayText}</Link>
        ) : (
          <span>{typeDisplayText}</span>
        )}
      </div>
      <div>
        <Markdown.InlineCode>{property.builtinType}</Markdown.InlineCode>
      </div>
    </div>
  );
};

Type.propTypes = {
  apiKey: PropTypes.string.isRequired,
  property: PropTypes.object.isRequired,
  typeLocations: PropTypes.object,
  dataTestId: PropTypes.string,
};

export default Type;
