import React, { Dispatch, SetStateAction } from 'react';

export interface StringStateProps {
        search: string;
        setSearch: Dispatch<SetStateAction<string>>;
}