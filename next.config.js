module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://universities.hipolabs.com/:path*' // Proxy to Backend
            }
        ];
    }
};
