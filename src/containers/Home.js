import React from 'react';
import { withSiteData, Head } from 'react-static';
import { Flex, Box } from 'grid-styled';

export default withSiteData(({ title }) => (
  <Flex flexDirection={['column', 'column', 'row', 'row']}>
    <Head>{title} s</Head>
    <Box mb={4} pr={[0, 4, 4, 4]} width={[1, 1, 1 / 2]} />
    <Box mb={4} pr={[0, 4, 4, 4]} width={[1, 1, 1 / 2]} />
  </Flex>
));
