/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */
const render = (cityCode) => {
  // 1.1 获取北京市天气数据
  myAxios({
    url: "http://hmajax.itheima.net/api/weather",
    method: "GET",
    params: {
      city: cityCode,
    },
  }).then((res) => {
    const { data } = res;
    console.log(data);
    // 1.2 数据展示
    // 1) 时间
    const timeOne = `
      <span class="dateShort">${data.dateShort}</span>
      <span class="calendar">农历&nbsp;
        <span class="dateLunar">${data.dateLunar}</span>
      </span>`;
    document.querySelector(".top-box .title").innerHTML = timeOne;
    // 2) 渲染城市
    document.querySelector(".area").innerHTML = data.area;
    // 3) 当前天气
    // 3.1)
    const nowWeather = `
      <div class="tem-box">
        <span class="temp">
          <span class="temperature">${data.temperature}</span>
          <span>°</span>
        </span>
      </div>
      <div class="climate-box">
        <div class="air">
          <span class="psPm25">${data.psPm25}</span>
          <span class="psPm25Level">${data.psPm25Level}</span>
        </div>
        <ul class="weather-list">
          <li>
            <img src="${data.weatherImg}" class="weatherImg" alt="">
            <span class="weather">${data.weather}</span>
          </li>
          <li class="windDirection">${data.windDirection}</li>
          <li class="windPower">${data.windPower}</li>
        </ul>
      </div>`;
    document.querySelector(".weather-box").innerHTML = nowWeather;
    // 3.2)
    const { todayWeather } = data;
    const todayWeatherHtml = `
      <div class="range-box">
        <span>今天：</span>
        <span class="range">
          <span class="weather">${todayWeather.weather}</span>
          <span class="temNight">${todayWeather.temNight}</span>
          <span>-</span>
          <span class="temDay">${todayWeather.temDay}</span>
          <span>℃</span>
        </span>
      </div>
      <ul class="sun-list">
        <li>
          <span>紫外线</span>
          <span class="ultraviolet">${todayWeather.ultraviolet}</span>
        </li>
        <li>
          <span>湿度</span>
          <span class="humidity">${todayWeather.humidity}</span>%
        </li>
        <li>
          <span>日出</span>
          <span class="sunriseTime">${todayWeather.sunriseTime}</span>  
        </li>
        <li>
          <span>日落</span>
          <span class="sunsetTime">${todayWeather.sunsetTime}</span>
        </li>
      </ul>`;
    document.querySelector(".today-weather").innerHTML = todayWeatherHtml;
    // 4) 七天内的天气
    // console.log(data.dayForecast)
    const htmlStr = data.dayForecast
      .map((item) => {
        return `
        <li class="item">
          <div class="date-box">
            <span class="dateFormat">${item.dateFormat}</span>
            <span class="date">${item.date}</span>
          </div>
          <img src="${item.weatherImg}" alt="" class="weatherImg">
          <span class="weather">${item.weather}</span>
          <div class="temp">
            <span class="temNight">${item.temNight}</span>-
            <span class="temDay">${item.temDay}</span>
            <span>℃</span>
          </div>
          <div class="wind">
            <span class="windDirection">${item.windDirection}</span>
            <span class="windPower">${item.windPower}</span>
          </div>
        </li>`;
      })
      .join("");
    document.querySelector(".week-wrap").innerHTML = htmlStr;
  });
};
render("110100");

/**
 * 目标2: 根据关键字，展示匹配城市列表
 *  2.1 给搜索框绑定输入事件
 *  2.2 获取到输入内容后, 发送请求,获取匹配城市列表
 *  2.3 渲染城市列表
 */
// 2.1 给搜索框绑定输入事件
document.querySelector(".search-city").addEventListener("input", (e) => {
  // 2.2 获取到输入内容后, 发送请求, 获取匹配城市列表
  // console.log(e.target.value)
  const city = e.target.value;
  myAxios({
    url: "http://hmajax.itheima.net/api/weather/city",
    method: "GET",
    params: { city },
  }).then((res) => {
    document.querySelector(".search-list").innerHTML = res.data
      .map((item) => {
        return `<li class="city-item" data-code="${item.code}">${item.name}</li>`;
      })
      .join("");
  });
});

/**
 * 目标3: 点击不同的城市,页面展示不同城市的天气
 *  3.1 给所有的城市列表绑定事件 => 事件委托
 *  3.2 点击后得到当前 城市的 code值
 *  3.3 将这个 code 值,传递值 渲染函数
 */
document
  .querySelector(".search-list")
  .addEventListener("click", ({ target }) => {
    if (target.tagName === "LI") {
      // console.log(e.target.dataset.code)
      render(target.dataset.code);
      // 清空表单
      document.querySelector(".search-city").value = "";
      // 清空列表
      document.querySelector(".search-list").innerHTML = "";
    }
  });
