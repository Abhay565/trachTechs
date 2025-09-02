import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import GradientBackground from "../components/organisms/GradientBackground";
import Button from "../components/molecules/Button";
import LoginContent from "../components/molecules/LoginContent";
import Logo from "../components/molecules/Logo";
import InputTitle from "../components/molecules/InputTitle";
import { useNavigation } from "@react-navigation/native";

const OtpScreen = () => {
   const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<TextInput | null>>([]);

  // ✅ Handle OTP Change with Auto-focus
  const handleOtpChange = (value: string, index: number) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value && index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  // ✅ Handle Backspace Navigation
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        {/* Logo */}
        <Logo />

        {/* OTP Header */}
        <LoginContent
          title="OTP Verification"
          subTitle="Please enter Your OTP sent on email"
        />

        {/* OTP Input Boxes */}
        <InputTitle title="Enter OTP" />
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputsRef.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {/* Resend OTP */}
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>

        {/* Verify Button */}
        <Button
          title="Verify"
          onPress={() => {
            console.log("Entered OTP:", otp.join(""));
            navigation.navigate('MainTabs');
          }}
        />
      </View>
    </GradientBackground>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  otpInput: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  resendText: {
    color: "#212121",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
});
