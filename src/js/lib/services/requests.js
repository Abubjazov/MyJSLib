import $ from '../core';

$.prototype.get = async function(url, dataTypeAnswer = 'json') {
    let resource = await fetch(url);

    if (!resource.ok) {
        throw new Error(`Could not fetch ${url}, status: ${resource.status}`);
    }

    switch (dataTypeAnswer) {
        case 'json':
            return await resource.json();
        case 'text':
            return await resource.text();
        case 'blob':
            return await resource.blob();
    }
};

$.prototype.post = async function(url, data, dataTypeAnswer = 'text') {
    let resource = await fetch(url, {
        method: 'POST',
        body: data
    });

    switch (dataTypeAnswer) {
        case 'json':
            return await resource.json();
        case 'text':
            return await resource.text();
        case 'blob':
            return await resource.blob();
    }
};
