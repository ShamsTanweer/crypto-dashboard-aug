import React, { useEffect, useState } from "react";
import { get100Coins } from "../functions/get100Coins";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, createTheme } from "@mui/material";
import List from "../components/Dashboard/List";
import Grid from "../components/Dashboard/Grid";
import Header from "../components/Common/Header";

function WatchlistPage() {
  const [coinsData, setCoinsData] = useState([]);
  const [value, setValue] = useState("Grid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get100Coins();
        setCoinsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(coinsData);

  const watchlistData = localStorage.getItem("watchlist");
  // console.log(watchlistData);

  const watchlistArray = JSON.parse(watchlistData) || []; // Initialize as empty array if no data
  // console.log(watchlistArray);

  const renderCoins = coinsData.filter((item) =>
    watchlistArray.includes(item.id)
  );
  // console.log(renderCoins);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vh",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Inter",
    TextTransform: "Capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
          </TabList>
          <TabPanel value="Grid">
            <div className="grid-flex">
              {renderCoins.map((coin, index) => {
                return <Grid coin={coin} key={index} />;
              })}
            </div>
          </TabPanel>
          <TabPanel value="List">
            {renderCoins.map((item, index) => {
              return <List coin={item} key={index} />;
            })}
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}

export default WatchlistPage;
