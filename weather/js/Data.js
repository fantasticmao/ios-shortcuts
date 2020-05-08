class Data {
    constructor(date, city,
                weatherDesc, temp, humidity, pm25,
                weatherDescFrom, weatherDescTo, maxTemp, minTemp, uvLevel, aqi, chanceOfRain) {
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = date.getDate();
        this.city = city;
        this.weatherDesc = weatherDesc;
        this.temp = temp;
        this.humidity = humidity;
        this.pm25 = pm25;
        this.weatherDescFrom = weatherDescFrom;
        this.weatherDescTo = weatherDescTo;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.uvLevel = uvLevel;
        this.aqi = aqi; // air quality index
        this.chanceOfRain = chanceOfRain;
    };

    renderContent() {
        throw new ReferenceError('unsupported operation exception: renderContent');
    }
}