//FixedTable.js
import React from 'react';
import {Table, Column, Cell}  from 'fixed-data-table';

class MyTable extends React.Component {
	render() {
		return 
			<Table 
				rowsCount={100}
				rowHeight={50}
				width={1000}
				height={500}>
				<Column
					cell={<Cell>}
			</Table>
	}
}
