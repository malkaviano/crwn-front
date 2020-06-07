import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectSessions = createSelector(
    [ selectDirectory ],
    directory => directory.sections
);