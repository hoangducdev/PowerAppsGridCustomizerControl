import { Image, ImageFit } from '@fluentui/react/lib/Image';
import * as React from 'react';
import { CellRendererOverrides } from '../types';
import { useId } from '@fluentui/react-hooks';
import { useState } from 'react';

import {
    Callout,
    mergeStyleSets
} from '@fluentui/react';

export interface IImageDisplayProps {
    props: any,
    col: any
}

const styles = mergeStyleSets({
    callout: {
        width: 320,
        height: 320,
    },
    wrapper: {
        width: '100%',
        height: '100%',
    }
});

export const ImageDisplay: React.FunctionComponent<IImageDisplayProps> = (props) => {
    const location = window.location.origin;
    const value = props.props.value as any;
    const imgUrl = location + value?.fileUrl;
    const [isCalloutVisible, setCalloutVisible] = useState(false);
    const randomId = Math.floor(Math.random() * 1000000000000000);
    const imgId = useId(`callout-img-${randomId}`);
    return (
        <div className={styles.wrapper}>
            <Image
                id={imgId}
                src={imgUrl}
                imageFit={ImageFit.contain}
                width={'100%'}
                height={'100%'}
                onMouseEnter={() => {
                    if (value) {
                        setCalloutVisible(true);
                    }
                }}
                onMouseLeave={() => setCalloutVisible(false)}
            />
            {isCalloutVisible && (
                <Callout
                    role="dialog"
                    target={`#${imgId}`}
                    className={styles.callout}
                    isBeakVisible={true}
                    gapSpace={0}
                    setInitialFocus
                >
                    <Image
                        src={imgUrl}
                        imageFit={ImageFit.contain}
                        width={'100%'}
                        height={'100%'}
                    />
                </Callout>
            )}
        </div>
    );
}
