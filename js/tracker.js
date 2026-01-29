class MazkiPlayTracker {
    constructor() {
        this.apiKeys = {
            numverify: '05044082f9bf70813475310a69893aae',
            abstractPhone: '23ed5b5d4b6f407495cea0dce6aa140a',
            positionstack: '7e892d1c3acc5387655e6c1fc53279a3'
        };
        
        this.prefixDB = this.initIndoPrefixDB();
        this.results = [];
        this.map = null;
        this.targetMarker = null;
        this.init();
    }

    initIndoPrefixDB() {
        return {
            '811': { city: 'Jakarta Pusat', province: 'DKI Jakarta', lat: -6.2088, lng: 106.8456, carrier: 'Telkomsel' },
            '812': { city: 'Jakarta Selatan', province: 'DKI Jakarta', lat: -6.1754, lng: 106.8650, carrier: 'Telkomsel' },
            '813': { city: 'Semarang', province: 'Jawa Tengah', lat: -6.9935, lng: 110.3695, carrier: 'Telkomsel' },
            '814': { city: 'Surabaya', province: 'Jawa Timur', lat: -7.2575, lng: 112.7521, carrier: 'Telkomsel' },
            '815': { city: 'Bandung', province: 'Jawa Barat', lat: -6.9175, lng: 107.6191, carrier: 'Telkomsel' },
            '816': { city: 'Yogyakarta', province: 'DI Yogyakarta', lat: -7.7956, lng: 110.3695, carrier: 'Telkomsel' },
            '817': { city: 'Makassar', province: 'Sulawesi Selatan', lat: -5.1472, lng: 119.4101, carrier: 'Telkomsel' },
            '818': { city: 'Medan', province: 'Sumatera Utara', lat: 3.5952, lng
