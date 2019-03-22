import React from 'react';
import styled from 'styled-components'
import Analysis from './Analysis';
import UpperRow from './UpperRow';
import { Bordered } from 'styles/GridStyled';

const EditorColumn = ({ DnDTitleItems,
	// DnDMetaItems,
	// DnDEditorItems,
	DnDTargetID, }) => {
	return (
		<Bordered>
			<Grid>
				<UpperRow
					DnDTitleItems={DnDTitleItems}
				/>
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

