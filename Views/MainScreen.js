import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import styles from './MainScreenStyles';

const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
        <ScrollView style={styles.mainScreen_display}>
          <Text style={styles.mainScreen_display_text}>Hello World!</Text>
        </ScrollView>
        <View style={styles.mainScreen_keyPad}>
          <View style={styles.mainScreen_keyPad_row}>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>AC</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>( )</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>%</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>/</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.mainScreen_keyPad_row}>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>AC</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>( )</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>%</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>/</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.mainScreen_keyPad_row}>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>AC</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>( )</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>%</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>/</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.mainScreen_keyPad_row}>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>AC</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>( )</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>%</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>/</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.mainScreen_keyPad_row}>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>AC</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>( )</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>%</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.mainScreen_keyPad_button1}>
                <Text style={styles.mainScreen_keyPad_button1_text}>/</Text>
              </View>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default MainScreen