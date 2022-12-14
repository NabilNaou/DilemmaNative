import { React, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native";
import Container from "../components/Container";
import TopLogo from "../components/TopLogo";
import { PieChart, ProgressChart } from "react-native-chart-kit";

//TODO not use absolute positioning
const ResultScreen = ({ navigation, route }) => {
  let Patiëntenbelang = route.params?.Patiëntenbelang || 0;
  let Integriteit = route.params?.Integriteit || 0;
  let Informatiebeveiliging = route.params?.Informatiebeveiliging || 0;

  let checkData = () => {
    if (
      Patiëntenbelang == 0 ||
      (null && Integriteit == 0) ||
      (null && Informatiebeveiliging == 0) ||
      null
    ) {
      return true;
    }
  };

  let data = [
    {
      name: "Patiëntenbelang",
      population: Patiëntenbelang,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Integriteit",
      population: Integriteit,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Informatiebeveiliging",
      population: Informatiebeveiliging,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // default is 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <Container>
      <TopLogo />
      <View style={styles.box}>
        <View>
          <Text style={[styles.header1, { top: 25 }]}>Resultaten</Text>
        </View>
        <View style={[{ alignItems: "center" }]}>
          <Text style={[styles.text, { top: 30 }]}>
            Hier kunt u uw eigen score en de algemene score van uw afdeling
            bekijken
          </Text>
        </View>
        <View style={[{ alignItems: "center", top: 90, right: 110 }]}>
          {checkData == true ? (
            <PieChart
              data={data}
              width={700}
              height={210}
              center={[160, 0]}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
            />
          ) : (
            <Text style={[styles.text, { left: 145, top: 50 }]}>
              Geen data om te laten zien. Maak eerst {"\n"} de quiz af!
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={[styles.GaDoorButton, styles.shadow, { alignSelf: "flex-end" }]}
        onPress={() => navigation.navigate("Toelichting")}
      >
        <Text style={styles.buttonText}>Toelichting</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  box: {
    opacity: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "rgb(203,  221,  230)",
    shadowOpacity: 0.8392156862745098,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    width: 390,
    height: 525,
    alignSelf: "center",
    top: 65,
  },
  GaDoorButton: {
    opacity: 1,
    backgroundColor: "rgba(238, 246, 250, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "rgb(203,  221,  230)",
    shadowOpacity: 0.8392156862745098,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    width: 160,
    height: 40,
    top: 75,
  },
  header1: {
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Montserrat",
    color: "rgba(19, 67, 146, 1)",
    textAlign: "center",
  },
  header2: {
    fontSize: 25,
    fontStyle: "normal",
    fontFamily: "Montserrat",
    color: "rgba(19, 67, 146, 1)",
    textAlign: "center",
  },
  text: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(19, 67, 146, 1)",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  elevation: {
    elevation: 10, //original was 20
    shadowColor: "#52006A",
  },
  buttonText: {
    marginTop: 6,
    marginLeft: 6,
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    color: "#134392",
  },
});
