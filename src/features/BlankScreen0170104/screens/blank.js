import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_3}>A sample header</Text>
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/cb-login-logo_uPbn2NC.png"
        }}
        style={styles.Image_5}
      />
      <View style={styles.View_6}>
        <View style={styles.View_7}>
          <Button
            title="Like"
            color="#a3ffa8"
            onPress={() => alert("Pressed!")}
          />
        </View>
        <View style={styles.View_8}>
          <Button
            title="Dislike"
            color="#ffa3a8"
            onPress={() => alert("Pressed!")}
          />
        </View>
      </View>
      <Text style={styles.Text_18}>
        This is a paragraph. Lorem ipsum text for days. Bacon and cheese and
        pickles and onions, tomatoes are a must-have. Celery and chives are
        tasty in a stew, but they aren&#39;t the most filling sometimes.
      </Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: { justifyContent: "center", alignItems: "center" },
  Text_3: {
    fontSize: 24,
    color: "#db57ff",
    fontFamily: "Merriweather-Bold",
    textAlign: "center"
  },

  Image_5: {
    height: 100,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#824dff",
    borderWidth: 2,
    borderRadius: 10
  },

  View_6: { width: "100%", flexDirection: "row" },
  View_7: { paddingLeft: 10, paddingRight: 10 },
  Button_16: {},
  View_8: { paddingLeft: 10, paddingRight: 10 },
  Button_17: {},
  Text_18: { height: 200, textAlignVertical: "top" },
  View_1: { justifyContent: "center", alignItems: "center" },
  Text_3: {
    fontSize: 24,
    color: "#db57ff",
    fontFamily: "Merriweather-Bold",
    textAlign: "center"
  },
  Image_5: {
    height: 100,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#824dff",
    borderWidth: 2,
    borderRadius: 10
  },
  View_6: { width: "100%", flexDirection: "row" },
  View_7: { paddingLeft: 10, paddingRight: 10 },
  Button_16: {},
  View_8: { paddingLeft: 10, paddingRight: 10 },
  Button_17: {},
  Text_18: { height: 200, textAlignVertical: "top" },
  Button_19: {}
})
