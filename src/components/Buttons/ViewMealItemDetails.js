import React, { Component } from 'react';
import List from '@material-ui/icons/List';
import IconButton from './IconButton';

class ViewMealItemDetails extends Component {

    render() {
        return (
            <IconButton action={this.props.action}
                icon={<List nativeColor="var(--soft-pink)" />}
                title="View Details"
            />
        );
    }
}

export default ViewMealItemDetails;