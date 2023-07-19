import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  /*DdSdkReactNative,
  DdSdkReactNativeConfiguration,*/
  DatadogProviderConfiguration,
  DatadogProvider
} from "expo-datadog";

//DD RUM -> Start

const config = new DatadogProviderConfiguration(
  "pub75303f0a17a070afa8ce4ce28c86b6ba",
  "staging",
  "190262d7-ccff-4ad8-86a7-71bc301d9288",
  true, // track User interactions (e.g.: Tap on buttons. You can use 'accessibilityLabel' element property to give tap action the name, otherwise element type will be reported)
  true, // track XHR Resources
  true // track Errors
);
// Optional: Select your Datadog website (one of "US", "EU" or "GOV")
config.site = "US1";
// Optional: enable or disable native crash reports
config.nativeCrashReportEnabled = true;
// Optional: sample RUM sessions (here, 80% of session will be sent to Datadog. Default = 100%)
config.sessionSamplingRate = 80;

//await DdSdkReactNative.initialize(config)

// Once SDK is initialized you need to setup view tracking to be able to see data in the RUM Dashboard.

//DD RUM -> End

export default function App() {
  return (
    <DatadogProvider configuration={config}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </DatadogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
