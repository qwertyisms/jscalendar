var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var monthsOfYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var colors = ["BD2A33", "D6AA26", "93A31C", "408156", "30374F"]
//colors = ["665F59", "AD8561", "D4A160", "EFCD76", "D2C789"]
squaresize = 175
document.body.innerHTML = ""
collectiveMarginLeft = 0
year = 2021
date = new Date(year, 0, 0)

wrapper = document.createElement("div")
document.body.appendChild(wrapper)
wrapper.classList.add("wrapper")
wrapper.classList.add("clearfix")

div = document.createElement("div")
wrapper.appendChild(div)
div.innerHTML = year
div.classList.add("year")

while (new Date(new Date().setTime(date.getTime() + 1000*60*60*24)).getFullYear() < 2022) {

date = new Date(new Date().setTime(date.getTime() + 1000*60*60*24))
div = document.createElement("div")
wrapper.appendChild(div)
div.innerHTML = date.getDate()



div.classList.add("date")
div.classList.add("day-" + daysOfWeek[date.getDay()].toLowerCase())
div.classList.add("date-" + date.getDate())
div.classList.add("month-" + (date.getMonth() + 1))
div.style.color = "#" + colors[date.getMonth() % colors.length]

if (date.getDate() > 28) {
    collectiveMarginLeft += squaresize
} else if (date.getDate() == 1) {
    div.style.marginLeft = collectiveMarginLeft + "px"
    div.style.clear = "left"
    extraSpan = document.createElement("span")
    div.appendChild(extraSpan)
    extraSpan.innerHTML = monthsOfYear[date.getMonth()]
    extraSpan.classList.add("month")
}

span = document.createElement("span")
div.appendChild(span)
span.innerHTML = daysOfWeek[date.getDay()]
span.classList.add("weekday")


}
var css = `.date { 
    font-family: courier; 
    float: left;
    padding: 0px;
    width: ${squaresize}px;
    height: ${squaresize}px;
    line-height: ${squaresize}px;
    position: relative;
    text-align: center;
    font-size: 75px;
    box-sizing: border-box;
    margin-top: 75px;
}
.weekday {
    position: absolute;
    font-size: 22px;
    top: -60px;
    right: 0px;
    left: 0px;
}
.day-saturday,.day-sunday {
    border: 1px solid;
}
.month {
    position: absolute;
    transform: rotate(90deg);
    left: -25px;
    top: -65px;
    text-align: left;
    float: left;
    width: 4px;
    font-size: 33px;
}
.wrapper:after {
  content: "";
  display: table;
  clear: both;
}
.wrapper {
    background: white;
    padding: ${squaresize}px;
    opacity: 0.3;
    width: ${squaresize*57}px;
    font-weight: bold;
    
}
.year {
    font-size: 175px;
    font-family: courier;
    margin-left: 2495px;
}
`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
document.body.appendChild(style)
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
