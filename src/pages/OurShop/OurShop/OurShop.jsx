import Cover from "../../shared/Cover/Cover";
import shopBanner from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import TabFood from "../TabFood/TabFood";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
  const categories = ["pizza", "salad", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category);

  const drinks = menu.filter((items) => items.category === "drinks");
  const pizza = menu.filter((items) => items.category === "pizza");
  const dessert = menu.filter((items) => items.category === "dessert");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");

  return (
    <div>
        <Helmet>
            <title>Bistro boss || Shop</title>
        </Helmet>
      <Cover img={shopBanner} tittle={"Our Shop"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <TabFood items={pizza}></TabFood>
        </TabPanel>
        <TabPanel>
          <TabFood items={dessert}></TabFood>
        </TabPanel>
        <TabPanel>
          <TabFood items={salad}></TabFood>
        </TabPanel>
        <TabPanel>
          <TabFood items={soup}></TabFood>
        </TabPanel>
        <TabPanel>
          <TabFood items={drinks}></TabFood>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
