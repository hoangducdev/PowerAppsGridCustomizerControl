import * as React from 'react';
import { CellRendererOverrides } from '../types';
import { ImageDisplay } from './ImageDisplayComponent';

export const cellRendererOverrides: CellRendererOverrides = {
    ["Image"]: (props, col) => {
        return <ImageDisplay props={props} col={col}/>
    }
}
