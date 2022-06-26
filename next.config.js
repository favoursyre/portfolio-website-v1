const withImages = require('next-images');

module.exports = withImages({
    images: {
        domains: ['127.0.0.1'],
    },
    async rewrites() {
        return [
            {
                source: '/about',
                destination: `${process.env.BACKEND_URL}/about/`,
            },
            {
                source: '/projects',
                destination: `${process.env.BACKEND_URL}/projects/`,
            },
            {
                source: '/technologies',
                destination: `${process.env.BACKEND_URL}/technologies/`,
            },
            {
                source: '/contact',
                destination: `${process.env.BACKEND_URL}/contact/`,
            },
        ];
    },
});