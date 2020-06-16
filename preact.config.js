export default (config) => {
    if (process.NODE_ENV === 'development') {
        console.log('### dev output');
        config.output.publicPath = '/fuelcalc';
    }
    return config;
};