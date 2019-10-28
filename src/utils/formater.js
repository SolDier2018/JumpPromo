import React, {Fragment} from 'react';

export function textToParagraphs (text) {
    const lines = text.trim().split('\n') || [];

    const paragraphs = lines.map((line, key) => React.createElement('p', {key}, line));

    return paragraphs.length ? paragraphs : null;
}

export function nl2br (text) {
    const lines = text.trim().split('\n') || [];

    return lines.map((line, index) => (
        <Fragment key={'key_' + index}>
            {line} <br key={'key_' + index} />
        </Fragment>
    ));
}