# API Document

---

## Free CORS Proxy

1. [thingproxy](https://github.com/Freeboard/thingproxy)
2. [Whatever-Origin](https://github.com/ripper234/Whatever-Origin)

---

## Nginx Config: cors-proxy.fantasticmao.cn

```text
server {
    listen 443 ssl http2;
    server_name cors-proxy.fantasticmao.cn;

    ......

    resolver 8.8.8.8;

    location ~ ^/(?<domain>mpv2\.weather\.com\.cn)/(?<path>.*)$ {
        if ($http_origin ~* (localhost|fantasticmao\.github\.io|fantasticmao\.gitee\.io)) {
            add_header 'Access-Control-Allow-Origin' $http_origin;
        }
        proxy_pass  $scheme://$domain/$path$is_args$args;
    }

}
```

---

## 中国天气网（Does not support CORS）

### Method & URL

GET https://mpv2.weather.com.cn/v2/

### Request Arguments

| 字段 | 类型   | 描述 | 示例       |
| ---- | ------ | ---- | ---------- |
| lat  | double | 纬度 | 30.222574  |
| lng  | double | 经度 | 120.121498 |

### Response Fields

| 字段                                | 类型   | 描述                 | 示例   |
| ----------------------------------- | ------ | -------------------- | ------ |
| location.city                       | string | 城市                 | 杭州市 |
| observe.weatherText                 | string | 当前天气             | 晴     |
| observe.temperature                 | string | 当前温度             | 14     |
| observe.humidity                    | string | 当前湿度             | 73%    |
| observe.air.pm25                    | string | 当前 pm2.5           | 19     |
| daily.\${key}                       | long   | 距离 1970-01-01 天数 | 18381  |
| daily.\${key}.weatherDescription[0] | string | 天气描述（开始）     | 晴     |
| daily.\${key}.weatherDescription[1] | string | 天气描述（结束）     | 多云   |
| daily.\${key}.temperature[0]        | string | 最高温度             | 28     |
| daily.\${key}.temperature[1]        | string | 最低温度             | 16     |
| daily.\${key}.index.list[0].level   | string | 紫外线强度           | 很强   |
| daily.\${key}.air.aqic              | array  | 空气质量             | 优     |
