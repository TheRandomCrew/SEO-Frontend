import React from 'react';
import styled from 'styled-components'
import Analysis from './Analysis';
import { Bordered } from 'styles/GridStyled';
import UpperRow from 'containers/Home/EditorColumn/UpperRow';

const EditorColumn = () => {
	return (
		<Bordered>
			<Grid>
				<UpperRow />
			</Grid>
			<Bordered>
				<Analysis />
			</Bordered>
		</Bordered>
	)
}

export default EditorColumn;

const Grid = styled.div`
  	display: flex;
`

