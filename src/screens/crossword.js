import React, { useState } from "react";
import { TextInput, Text, ScrollView, View } from "react-native";
import {searchDefinitions} from "../components/searchDefinitions"

export default function Screen1() {

  const [values1, setValues1] = useState(["", "", "", "", "", "", "", ""]);
  const [values2, setValues2] = useState(["", "", "", "", "", "", "", "", ""]);
  const [values3, setValues3] = useState(["", "", "", "", "", ""]);
  const [values4, setValues4] = useState(["", "", ""]);
  const [values5, setValues5] = useState(["", "", "", "", "", "", "", "", ""]);

  const [definitions, setDefinitions] = useState(["", "", "", "", ""]);

  const [isRow1, setIsRow1] = useState(false);


  const wordsList = ["software", "developer", "system", "app", "framework"];


  const handleInputChange = (index, text, values, setValues) => {
    const newInputValues = [...values];
    newInputValues[index] = text;
    setValues(newInputValues);
  };

   const handleSearchDefinitions = () => {
    searchDefinitions(setDefinitions, wordsList);
  };

  const check = (values, setValues, word) => {
    const newInputValues = values.map((value, index) => {
      if (value.toUpperCase() !== word[index].toUpperCase()) {
        return "";
      } else {
        return value;
      }
    });
    setValues(newInputValues);
  };



  return (
    <View
      style={{
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 80,
      }}
    >
      <Text
        style={{ fontSize: 40, marginVertical: 20, fontWeight: "bold" }}
        onPress={handleSearchDefinitions}
      >
        Crossroads
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 134 }}></View>
                <View style={{ width: 16 }}>
                  <Text
                    style={{ fontSize: 20 }}
                    onPress={() => {
                      check(values1, setValues1, wordsList[1]);
                      setIsRow1(true);
                    }}
                  >
                    1
                  </Text>
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput
                    placeholder={""}
                    size="20"
                    defaultValue={0}
                    value={values1[0]}
                    onChangeText={(text) =>
                      handleInputChange(0, text, values1, setValues1)
                    }
                  />
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 16 }}>
                  <Text
                    style={{ fontSize: 20 }}
                    onPress={() => {
                      check(values2, setValues2, wordsList[2]);
                      setIsRow1(false);
                    }}
                  >
                    2
                  </Text>
                </View>
                {values2.map((item, columnIndex) => (
                  <View style={{ padding: 2, borderWidth: 1 }}>
                    <TextInput
                      placeholder={""}
                      size="20"
                      defaultValue={0}
                      value={(isRow1 && columnIndex === 5) ? values1[1] : item}
                      onChangeText={(text) => {
                        handleInputChange(columnIndex, text, values2, setValues2);
                        if (columnIndex === 5) {
                          handleInputChange(1, text, values1, setValues1);
                        }
                      }}
                    />
                  </View>
                ))}
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput
                    placeholder={""}
                    size="20"
                    defaultValue={0}
                    value={values1[2]}
                    onChangeText={(text) =>
                      handleInputChange(2, text, values1, setValues1)
                    }
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 54 }}></View>
                <View style={{ width: 16 }}>
                  <Text
                    style={{ fontSize: 20 }}
                    onPress={() => {
                      check(values3, setValues3, wordsList[3]);
                      setIsRow1(false);
                    }}
                  >
                    3
                  </Text>
                </View>
                {values3.map((item, columnIndex) => (
                  <View style={{ padding: 2, borderWidth: 1 }}>
                    <TextInput
                      placeholder={""}
                      size="20"
                      defaultValue={0}
                      value={(isRow1 && columnIndex === 3) ? values1[3] : item}
                      onChangeText={(text) => {
                        handleInputChange(columnIndex, text, values3, setValues3);
                        if (columnIndex === 3) {
                          handleInputChange(3, text, values1, setValues1);
                        }
                      }}
                    />
                  </View>
                ))}
                <View style={{ width: 64 }}></View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput
                    placeholder={""}
                    size="20"
                    defaultValue={0}
                    value={values1[4]}
                    onChangeText={(text) =>
                      handleInputChange(4, text, values1, setValues1)
                    }
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 134 }}></View>
                <View style={{ width: 16 }}>
                  <Text
                    style={{ fontSize: 20 }}
                    onPress={() => {
                      check(values4, setValues4, wordsList[4]);
                      setIsRow1(false);
                    }}
                  >
                    4
                  </Text>
                </View>
                {values4.map((item, columnIndex) => (
                  <View style={{ padding: 2, borderWidth: 1 }}>
                    <TextInput
                      placeholder={""}
                      size="20"
                      defaultValue={0}
                      value={(isRow1 && columnIndex === 0) ? values1[5] : item}
                      onChangeText={(text) => {
                        handleInputChange(columnIndex, text, values4, setValues4);
                        if (columnIndex === 0) {
                          handleInputChange(5, text, values1, setValues1);
                        }
                      }}
                    />
                  </View>
                ))}
                <View style={{ width: 64 }}></View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput
                    placeholder={""}
                    size="20"
                    defaultValue={0}
                    value={values1[6]}
                    onChangeText={(text) =>
                      handleInputChange(6, text, values1, setValues1)
                    }
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 27 }}></View>
                <View style={{ width: 16 }}>
                  <Text
                    style={{ fontSize: 20 }}
                    onPress={() => {
                      check(values5, setValues5, wordsList[5]);
                      setIsRow1(false);
                    }}
                  >
                    5
                  </Text>
                </View>
                {values5.map((item, columnIndex) => (
                  <View style={{ padding: 2, borderWidth: 1 }}>
                    <TextInput
                      placeholder={""}
                      size="20"
                      defaultValue={0}
                      value={(isRow1 && columnIndex === 4) ? values1[7] : item}
                      onChangeText={(text) => {
                        handleInputChange(columnIndex, text, values5, setValues5);
                        if (columnIndex === 4) {
                          handleInputChange(7, text, values1, setValues1);
                        }
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={{ height: 27 }}></View>
          <Text
            style={{ fontSize: 20, marginVertical: 20, fontWeight: "bold" }}
          >
            Definitions
          </Text>
          <Text>1. {definitions[0]}</Text>
          <Text>2. {definitions[1]}</Text>
          <Text>3. {definitions[2]}</Text>
          <Text>4. {definitions[3]}</Text>
          <Text>5. {definitions[4]}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
