const PostOptions = (body) => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'X-CloudMine-ApiKey': '8b2a78d6fab34a808a6e22182a1ade00'
        },
        method: 'POST',
        body: JSON.stringify(body)
    };
};

export {PostOptions};
