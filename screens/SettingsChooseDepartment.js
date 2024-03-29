import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import { SelectList } from "react-native-dropdown-select-list";
import TopLogo from "../components/TopLogo";
import GlobalStyle from "../components/GlobalStyle";

const SettingsChooseDepartment = ({ navigation, route }) => {
  const [department, setDepartment] = React.useState("");
  const { setDepartmentChanged } = route.params;

  const data = [
    { key: "Urologie", value: "Poli urologie" },
    { key: "Chirurgie", value: "Poli chirurgie" },
    { key: "Gynaecologie", value: "Poli gynaecologie" },
    { key: "Cardiologie", value: "Poli cardiologie" },
  ];

  return (
    <Container>
      <TopLogo />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[GlobalStyle.CustomFontBold, { fontSize: 30, marginTop: 50 }]}
        >
          Dilemma app
        </Text>
        <Text
          style={[
            GlobalStyle.CustomFontBold,
            { fontSize: 27, marginTop: "auto" },
          ]}
        >
          Hallo!
        </Text>
        <Text style={[styles.header2]}>Kies uw afdeling</Text>
        <SelectList
          setSelected={(val) => setDepartment(val)}
          data={data}
          save="value"
          search={false}
          placeholder="Kiezen"
          searchPlaceholder=""
          boxStyles={[styles.DropDown, styles.shadow, styles.elevation]}
          inputStyles={[styles.DropDownText, styles.header2]}
          dropdownStyles={[styles.DropDownList]}
          dropdownTextStyles={styles.header2}
          defaultOption={{ key: "Poli urologie", value: "Poli urologie" }}
          maxHeight={150}
        />
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("department");
            await AsyncStorage.setItem("department", department);
            setDepartmentChanged(true);

            navigation.navigate("Settings");
          }}
          style={[styles.GaDoorButton, styles.shadow]}
        >
          <Text style={styles.buttonText}>Laten we beginnen!</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SettingsChooseDepartment;

const styles = StyleSheet.create({
  GaDoorButton: {
    opacity: 1,
    backgroundColor: "rgba(238, 246, 250, 1)",
    borderRadius: 20,
    shadowColor: "rgb(203,  221,  230)",
    shadowOpacity: 0.8392156862745098,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    width: 286,
    height: 50,
    marginTop: "auto",
  },
  DropDown: {
    backgroundColor: "rgba(238, 246, 250, 1)",
    borderRadius: 20,
    width: 286,
    height: 59,
    alignSelf: "center",
  },
  DropDownText: {
    fontSize: 25,
    textAlign: "center",
  },
  DropDownList: {
    backgroundColor: "rgba(238, 246, 250, 1)",
    borderRadius: 20,
  },
  DropDownListText: {},
  logoContainer: {
    position: "absolute",
    top: 5,
    right: 1,
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
    width: 276,
    height: 60,
    top: 281.5,
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    opacity: 0.36000001430511475,
    backgroundColor: "EEF6FA",
    fontSize: 18,
    lineHeight: 27,
    borderRadius: 20,
    top: 350,
    opacity: 1,
    backgroundColor: "rgba(238, 246, 250, 1)",
    shadowColor: "rgb(203,  221,  230)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    width: 285,
    alignSelf: "center",
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

  InputContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flex: 3,
  },

  buttonText: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    color: "#134392",
  },
});
