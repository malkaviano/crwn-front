import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import { selectSessions } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...otherProps }) => {
                return (
                    <MenuItem key={id} {...otherProps}>
                    </MenuItem>
                );
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectSessions
});

export default connect(mapStateToProps)(Directory);