# react-native-animated-border

## Getting started

`$ npm install react-native-animated-border --save`

### Mostly automatic installation

`$ react-native link react-native-animated-border`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-animated-border` and add `RNReactNativeAnimatedBorder.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeAnimatedBorder.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.RNReactNativeAnimatedBorderPackage;` to the imports at the top of the file
- Add `new RNReactNativeAnimatedBorderPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-animated-border'
   project(':react-native-animated-border').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-animated-border/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-animated-border')
   ```

## Usage

```javascript
import RNAnimatedBorder from "react-native-animated-border";

// TODO: What to do with the module?

RNAnimatedBorder;

//Neste your component into RNAnimatedBorder

<RNAnimatedBorder>YOUR COMPONENT HERE</RNAnimatedBorder>;

//Options
borderWidth: Number;
firstColor: String;
secondColor: String;
borderColor: String;
padding: Number;
margin: Number;
elevation: Number;
```

```javascript
// Example
<View style={styles.container}>
      <RNAnimatedBorder
        firstColor="red"
        secondColor="green"
        borderWidth={5}
        elevation={8}
      >
        <Text>Open up App.js to start working on your app!</Text>
      </RNAnimatedBorder>
      <RNAnimatedBorder
        firstColor="blue"
        secondColor="yellow"
        borderWidth={5}
        borderRadius={20}
        elevation={8}
        margin={5}
      >
        <Button
          onPress={() => Alert.alert("I love RNAnimatedBorder!")}
          title="press me"
        />
      </RNAnimatedBorder>
      <RNAnimatedBorder
        firstColor="pink"
        secondColor="orange"
        borderWidth={20}
        elevation={8}
        margin={5}
      >
        <View
          style={{ width: 100, height: 100, backgroundColor: "black" }}
        ></View>
      </RNAnimatedBorder>

```
