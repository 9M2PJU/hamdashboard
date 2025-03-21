// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "9M2PJU Ham Radio Dashboard";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "#2196f3",
    "CLUBLOG",
    "https://clublog.org/livestream/9M2PJU",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "DX CLUSTER",
    "https://dx.hamradio.my",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "LIGHTNING",
    "https://map.blitzortung.org/#6.08/4.123/109.318",
    1,
    "R"
  ],
  [
    "#2196f3",
    "APRS Maps",
    "https://maps.hamradio.my",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "TIME.IS",
    "https://time.is/",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=3.0418&lon=101.1731&zoom=7",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    1,
    "R"
  ],
  [
    "#000000",
    "RAIN",
    "https://www.accuweather.com/en/my/national/weather-radar",
    1,
    "R"
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "RADAR",
    "https://zoom.earth/places/malaysia/"
  ],
  [
    "LOCAL RADAR",
    "https://www.met.gov.my/data/radar_malaysia.gif?nocache=1742537882274"
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"
  ],
  [
    "SATELLITE CAN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif"
  ],
  [
    "SATELLITE CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif"
  ],
  [
    "LIGHTNING",
    "https://www.lightningmaps.org/blitzortung/oceania/index.php?bo_page=archive&bo_map=indonesia&bo_animation=now"
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ny.png"
  ],
  [
    "YOUTUBE",
    "iframe|https://www.youtube.com/embed/v6-ydrdTPhM?autoplay=1&mute=1"
  ],
  [
    "BSP ADS-B",
    "iframe|https://adsb.hamradio.my/"
  ],
  [
    "VIDEO",
    "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"
  ],
  [
    "HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  11200,
  10000,
  11000,
  10100,
  10200,
  10500,
  10300,
  10600,
  30400,
  60700,
  60900,
  10800
];

// CUT END
