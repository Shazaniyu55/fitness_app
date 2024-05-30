import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LongCard = ({
  avatar,
  title,
  subtitle,
  subtitleColor = "#A4A9AD",
  progressBar,
  backgroundColor,
  rightIcon,
  onPress
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (title === "Jumping Jack") {
      navigation.navigate("Jumping Jack");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: backgroundColor,
          flexDirection: "row",
          padding: 20,
          borderRadius: 20,
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        {avatar}
        <View style={{ width: !progressBar ? 191 : null }}>
          <Text
            style={{
              color: "#DDDADA",
              lineHeight: 18,
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: subtitleColor,
              lineHeight: 15,
              fontSize: 10,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Text>

          {progressBar}
        </View>
        <View>
          <TouchableOpacity>{rightIcon}</TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LongCard;
